import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleEnrollmentSubmission,
  getEnrollments,
  downloadEnrollmentsCSV
} from "./routes/enrollment";
import { handleContactSubmission, downloadMessagesCSV } from "./routes/contact";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

    app.get("/api/demo", handleDemo);

  // Enrollment routes
  app.post("/api/enrollment", handleEnrollmentSubmission);
  app.get("/api/enrollments", getEnrollments);
  app.get("/api/enrollments/download", downloadEnrollmentsCSV);

  // Contact routes
  app.post("/api/contact", handleContactSubmission);
  app.get("/api/messages/download", downloadMessagesCSV);

  return app;
}
