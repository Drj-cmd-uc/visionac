import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Send,
  Bot,
  User,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  MapPin,
  Clock,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

interface ChatBotProps {
  className?: string;
}

export default function ChatBot({ className = "" }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "नमस्ते! Welcome to Vision Accounting - Tally Training & Accounting Services! 👋\n\nI'm here to help you with course information, enrollment, and any questions you have about our training programs. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      quickReplies: [
        "Course Information",
        "Fee Structure",
        "Schedule & Timing",
        "Enrollment Process",
        "Contact Details",
      ],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let response = "";
    let quickReplies: string[] = [];

    // Course Information
    if (
      lowerMessage.includes("course") ||
      lowerMessage.includes("courses") ||
      lowerMessage.includes("training") ||
      lowerMessage.includes("program")
    ) {
      response = `📚 We offer the following courses:\n\n• **GST Accounting with Placement** (3 months) - ₹7,999\n• **Tally Prime** (2 months) - ₹7,999\n• **Tally ERP 9** (2 months) - ₹6,999\n• **Basic Computer + Typing** (1.5 months) - ₹4,999\n• **Complete Package** (6 months) - ₹10,499\n\nAll courses include practical training, certificates, and job placement assistance!`;
      quickReplies = ["Schedule Details", "Enrollment", "Fee Structure"];
    }
    // Fee Structure
    else if (
      lowerMessage.includes("fee") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("price") ||
      lowerMessage.includes("payment")
    ) {
      response = `💰 **Course Fee Structure:**\n\n• GST Accounting with Placement: ₹7,999\n• Tally Prime: ₹7,999\n• Tally ERP 9: ₹6,999\n• Basic Computer + Typing: ₹4,999\n• Complete Package: ₹10,499\n\n**Note:** Registration fee is ₹1,000 (adjustable in course fee)\n\nWe also offer flexible payment options!`;
      quickReplies = ["Payment Options", "Discounts Available", "Enroll Now"];
    }
    // Schedule & Timing
    else if (
      lowerMessage.includes("schedule") ||
      lowerMessage.includes("timing") ||
      lowerMessage.includes("time") ||
      lowerMessage.includes("batch")
    ) {
      response = `⏰ **Class Timings:**\n\n• **Morning Batch:** 9:00 AM - 11:00 AM\n• **Afternoon Batch:** 2:00 PM - 4:00 PM\n• **Evening Batch:** 6:00 PM - 8:00 PM\n\n📅 **Days:** Monday to Friday\n📅 **Start Dates:** Every Monday & 1st/15th of every month\n\nWe offer flexible timing to suit your schedule!`;
      quickReplies = [
        "Book Demo Class",
        "Check Availability",
        "Course Details",
      ];
    }
    // Enrollment Process
    else if (
      lowerMessage.includes("enroll") ||
      lowerMessage.includes("admission") ||
      lowerMessage.includes("join") ||
      lowerMessage.includes("registration")
    ) {
      response = `📝 **Enrollment Process:**\n\n1️⃣ Fill out our enrollment form\n2️⃣ Submit required documents (ID proof, photos)\n3️⃣ Pay registration fee (₹1,000)\n4️⃣ Choose your preferred batch timing\n5️⃣ Start your learning journey!\n\n**Requirements:** 10th pass or equivalent\n\nReady to get started?`;
      quickReplies = ["Start Enrollment", "Required Documents", "Contact Us"];
    }
    // Contact Information
    else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("address") ||
      lowerMessage.includes("location")
    ) {
                        response = `📞 **Contact Information:**\n\n**Phone:** +91 9009232649, +91 9179632649\n**WhatsApp:** +91 9179632649\n**Email:** Visionaccounting@myyahoo.com\n\n📍 **Address:**\n3rd Floor, Advocate Chamber, 301,\n6 Sikh Mohalla Main Road,\nNear Central Camera Repairing,\nIndore GPO, Indore - 452007\n\n⏰ **Business Hours:**\nMonday - Sunday: 8:00 AM - 8:00 PM`;
      quickReplies = ["Call Now", "WhatsApp", "Visit Location", "Send Email"];
    }
    // Placement & Jobs
    else if (
      lowerMessage.includes("placement") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("career") ||
      lowerMessage.includes("salary")
    ) {
      response = `🚀 **Placement Assistance:**\n\n✅ 100% placement support for eligible courses\n✅ Interview preparation & resume building\n✅ Industry connections & job referrals\n✅ Continuous support until placement\n\n**Recent Placements:**\n• Accounts Executive positions\n• GST Consultants\n• Tally Operators\n• Freelance Accountants\n\nWe're committed to your success!`;
      quickReplies = ["Success Stories", "Salary Expectations", "Apply Now"];
    }
    // Language Support
    else if (
      lowerMessage.includes("hindi") ||
      lowerMessage.includes("english") ||
      lowerMessage.includes("language")
    ) {
      response = `🗣️ **Language Support:**\n\nWe conduct classes in both **Hindi** and **English** as per student preference. Our instructors are fluent in both languages to ensure you understand every concept clearly.\n\n**Medium of Instruction:**\n• Course content: Hindi & English\n• Software interface: English\n• Doubt clearing: Your preferred language`;
      quickReplies = ["Course Languages", "Demo Class", "More Info"];
    }
    // Greetings
    else if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("namaste")
    ) {
      response = `नमस्ते! Hello! 👋\n\nWelcome to Vision Accounting! I'm here to help you with all your questions about our Tally training and accounting courses.\n\nWhat would you like to know today?`;
      quickReplies = [
        "Course Information",
        "Fee Structure",
        "Schedule & Timing",
        "Contact Details",
      ];
    }
    // Thanks
    else if (
      lowerMessage.includes("thank") ||
      lowerMessage.includes("thanks") ||
      lowerMessage.includes("dhanyawad")
    ) {
      response = `You're most welcome! 😊\n\nIf you have any more questions about our courses or need assistance with enrollment, feel free to ask. We're here to help you succeed in your accounting career!\n\nBest of luck! 🌟`;
      quickReplies = ["Course Details", "Enroll Now", "Contact Us"];
    }
    // Default response
    else {
      response = `I understand you're asking about "${userMessage}". Let me help you with that!\n\nHere are some common topics I can assist you with:\n\n• Course information & curriculum\n• Fee structure & payment options\n• Class schedules & batch timings\n• Enrollment process\n• Placement assistance\n• Contact details\n\nWhat specific information would you like to know?`;
      quickReplies = [
        "Course Details",
        "Fee Information",
        "Class Schedule",
        "Enroll Now",
      ];
    }

    return {
      id: Date.now().toString(),
      text: response,
      isBot: true,
      timestamp: new Date(),
      quickReplies,
    };
  };

  const handleSendMessage = async (message: string = inputMessage) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = generateBotResponse(message);
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

    const handleQuickReply = (reply: string) => {
    if (reply === "WhatsApp") {
      window.open("https://wa.me/919179632649", "_blank");
      return;
    }
    handleSendMessage(reply);
  };

  const formatMessage = (text: string) => {
    return text.split("\n").map((line, index) => (
      <div key={index}>
        {line.includes("**") ? (
          <span
            dangerouslySetInnerHTML={{
              __html: line.replace(
                /\*\*(.*?)\*\*/g,
                '<strong style="color: rgb(255, 193, 5);">$1</strong>',
              ),
            }}
          />
        ) : (
          line
        )}
        {index < text.split("\n").length - 1 && <br />}
      </div>
    ));
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 shadow-2xl border-2 border-vision-yellow/20">
          {/* Header */}
          <CardHeader className="bg-vision-yellow text-gray-900 p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-vision-yellow" />
                </div>
                <div>
                  <CardTitle className="text-sm font-bold">
                    Vision AI Assistant
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:bg-gray-900/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="p-0 h-64 overflow-y-auto bg-gray-50">
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? "bg-white text-gray-900 border border-gray-200"
                        : "bg-vision-yellow text-gray-900"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isBot && (
                        <Bot className="h-4 w-4 text-vision-yellow mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="text-sm whitespace-pre-wrap">
                          {formatMessage(message.text)}
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                      {!message.isBot && (
                        <User className="h-4 w-4 text-gray-900 mt-1 flex-shrink-0" />
                      )}
                    </div>

                    {/* Quick Replies */}
                    {message.isBot && message.quickReplies && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.quickReplies.map((reply, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs border-vision-yellow text-vision-yellow hover:bg-vision-yellow hover:text-gray-900"
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-vision-yellow" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex space-x-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="mt-2 text-center">
              <span className="text-xs text-gray-500">
                Powered by Vision AI • विजन AI असिस्टेंट
              </span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
