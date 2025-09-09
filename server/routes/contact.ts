import type { RequestHandler } from "express";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone is required"),
  subject: z.string().optional().default(""),
  inquiry: z.string().optional().default(""),
  message: z.string().min(1, "Message is required"),
  preferredContact: z.string().optional().default(""),
});

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);

    const enriched = {
      ...data,
      submittedAt: new Date().toISOString(),
      id: `message_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
    };

    const fs = await import("fs/promises");
    const path = await import("path");

    const dir = path.join(process.cwd(), "messages");
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir, { recursive: true });
    }

    const jsonName = `${enriched.id}_${enriched.name.replace(/\s+/g, "_")}.json`;
    await fs.writeFile(path.join(dir, jsonName), JSON.stringify(enriched, null, 2));

    const csvPath = path.join(dir, "messages.csv");
    let csv = "";
    try {
      csv = await fs.readFile(csvPath, "utf-8");
    } catch {
      csv = "Timestamp,Name,Email,Phone,Subject,Inquiry,Preferred Contact,Message\n";
    }
    const row = [
      new Date().toISOString(),
      enriched.name,
      enriched.email,
      enriched.phone,
      enriched.subject || "",
      enriched.inquiry || "",
      enriched.preferredContact || "",
      (enriched.message || "").replace(/\n|\r|,/g, ";")
    ]
      .map((f) => `"${String(f)}"`)
      .join(",") + "\n";

    await fs.writeFile(csvPath, csv + row);

    res.status(200).json({ success: true, message: "Message submitted", id: enriched.id });
  } catch (error: any) {
    if (error?.errors) {
      res.status(400).json({ success: false, message: "Invalid data", errors: error.errors });
      return;
    }
    console.error("Contact submission error:", error);
    res.status(500).json({ success: false, message: "Failed to submit message" });
  }
};

export const downloadMessagesCSV: RequestHandler = async (_req, res) => {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    const dir = path.join(process.cwd(), "messages");
    const csvPath = path.join(dir, "messages.csv");

    try {
      const csv = await fs.readFile(csvPath, "utf-8");
      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="messages_${new Date().toISOString().split("T")[0]}.csv"`
      );
      res.send(csv);
    } catch {
      res.status(404).json({ success: false, message: "No messages found" });
    }
  } catch (err) {
    console.error("Error downloading messages CSV:", err);
    res.status(500).json({ success: false, message: "Failed to download messages" });
  }
};
