import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Calendar,
  Users,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatBot from "@/components/ChatBot";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Schedule() {
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);

  const openEnrollmentForm = () => setIsEnrollmentFormOpen(true);
  const closeEnrollmentForm = () => setIsEnrollmentFormOpen(false);
  const schedules = [
    {
      course: "GST Accounting with Placement",
      duration: "3 Months",
      timing: "Morning Batch",
      timeSlot: "9:00 AM - 11:00 AM",
      days: "Monday to Friday",
      startDate: "1st & 15th of every month",
      seats: "Limited to 15 students",
      fee: "₹7,999",
      popular: true,
      features: [
        "Practical Training",
        "Job Placement",
        "GST Filing",
        "Certificate",
      ],
    },
    {
      course: "Tally Prime",
      duration: "2 Months",
      timing: "Evening Batch",
      timeSlot: "6:00 PM - 8:00 PM",
      days: "Monday to Friday",
      startDate: "Every Monday",
      seats: "Limited to 20 students",
      fee: "₹7,999",
      popular: true,
      features: [
        "Hands-on Practice",
        "Real Projects",
        "Certificate",
        "Support",
      ],
    },
    {
      course: "Tally ERP 9",
      duration: "2 Months",
      timing: "Afternoon Batch",
      timeSlot: "2:00 PM - 4:00 PM",
      days: "Monday to Friday",
      startDate: "Every Monday",
      seats: "Limited to 20 students",
      fee: "₹6,999",
      popular: false,
      features: ["Complete Training", "Practical Sessions", "Certificate"],
    },
    {
      course: "Basic Computer + Typing",
      duration: "1.5 Months",
      timing: "Morning Batch",
      timeSlot: "11:00 AM - 12:30 PM",
      days: "Monday to Friday",
      startDate: "Every Monday",
      seats: "Limited to 25 students",
      fee: "₹4,999",
      popular: false,
      features: ["Computer Basics", "Hindi & English Typing", "Certificate"],
    },
    {
      course: "Complete Package",
      duration: "6 Months",
      timing: "Flexible Timing",
      timeSlot: "Student's Choice",
      days: "Monday to Friday",
      startDate: "1st of every month",
      seats: "Limited to 12 students",
      fee: "₹10,499",
      popular: true,
      features: [
        "All Courses",
        "Priority Support",
        "100% Placement",
        "Lifetime Support",
      ],
    },
  ];

  const weeklySchedule = [
    {
      day: "Monday",
      courses: ["GST Accounting", "Tally Prime", "Basic Computer"],
    },
    {
      day: "Tuesday",
      courses: ["GST Accounting", "Tally ERP 9", "Typing Practice"],
    },
    {
      day: "Wednesday",
      courses: ["GST Accounting", "Tally Prime", "Basic Computer"],
    },
    {
      day: "Thursday",
      courses: ["GST Accounting", "Tally ERP 9", "Typing Practice"],
    },
    {
      day: "Friday",
      courses: ["GST Accounting", "Tally Prime", "Basic Computer"],
    },
    {
      day: "Saturday",
      courses: ["Doubt Clearing", "Extra Practice", "Assessments"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div>
                <h1 className="text-xl font-bold leading-tight">
                  <span className="text-vision-yellow">Vision Accounting</span>
                  <span className="text-gray-800">
                    {" "}
                    - Tally Training & Accounting Services
                  </span>
                </h1>
                                
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Home
              </Link>
              <a
                href="/#about"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                About
              </a>
              <a
                href="/#courses"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Courses
              </a>
              <a href="/schedule" className="text-vision-yellow font-medium">
                Schedule
              </a>
              <Link
                to="/services"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Services
              </Link>
              <a
                href="/#testimonials"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Reviews
              </a>
                            <a
                href="/#contact"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Contact
              </a>
              <Button
                onClick={openEnrollmentForm}
                className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-6"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-vision-yellow transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="bg-vision-gray text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Class <span className="text-vision-yellow">Schedule</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect time slot for your learning journey. We offer
            flexible batches to fit your schedule.
          </p>
          
        </div>
      </section>

      {/* Course Schedules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Course Schedules & Fees
            </h2>
            <p className="text-xl text-gray-600">
              Detailed timing and fee structure for all our courses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {schedules.map((schedule, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 ${schedule.popular ? "border-2 border-vision-yellow" : ""}`}
              >
                <CardHeader className="relative">
                  {schedule.popular && (
                    <Badge className="absolute -top-2 right-4 bg-vision-yellow text-gray-900 font-semibold">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-vision-yellow transition-colors">
                    {schedule.course}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{schedule.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{schedule.seats}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Timing Details
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-vision-yellow" />
                          <span>{schedule.timeSlot}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-vision-yellow" />
                          <span>{schedule.days}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-vision-yellow" />
                          <span>Starts: {schedule.startDate}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Course Features
                      </h4>
                      <div className="space-y-1">
                        {schedule.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-vision-yellow" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-sm text-gray-600">Course Fee</span>
                      <div className="text-2xl font-bold text-vision-yellow">
                        {schedule.fee}
                      </div>
                    </div>
                    <Button
                      onClick={openEnrollmentForm}
                      className="bg-gray-900 hover:bg-vision-yellow hover:text-gray-900 transition-colors"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

            {/* Important Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-vision-yellow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  📋 Important Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">
                      Registration Requirements
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>10th pass or equivalent for all courses</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Basic computer knowledge (for Tally courses)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>Valid ID proof and photographs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Registration fee: ₹1,000 (adjustable in course fee)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">
                      Class Policies
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>85% attendance required for certification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Make-up classes available for genuine reasons
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>Course materials and software provided</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vision-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span>Free doubt clearing sessions on Saturdays</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Enrollment */}
      <section className="py-20 bg-vision-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to secure your seat in the upcoming batch. Limited
            seats available!
          </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vision-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-gray-300">+91 9009232649</p>
              <p className="text-gray-300">+91 9179632649</p>
                        </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919179632649"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                +91 9179632649
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vision-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-300">Visionaccounting@myyahoo.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vision-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                            <p className="text-gray-300">3rd Floor, Advocate Chamber, 301,</p>
              <p className="text-gray-300">6 Sikh Mohalla Main Road,</p>
              <p className="text-gray-300">Near Central Camera Repairing,</p>
              <p className="text-gray-300">Indore GPO, Indore - 452007</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openEnrollmentForm}
              className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-8 py-3"
            >
              Enroll Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 font-semibold"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <span className="text-vision-yellow">Vision Accounting</span>
                  <span className="text-white">
                    {" "}
                    - Tally Training & Accounting Services
                  </span>
                </h3>
                
                <p className="text-gray-400">Your Success is Our Vision</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/#courses"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <Link
                    to="/schedule"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
                            <p className="text-gray-400 text-sm">
                3rd Floor, Advocate Chamber, 301,
                <br />6 Sikh Mohalla Main Road,
                <br />Near Central Camera Repairing,
                <br />Indore GPO, Indore - 452007
              </p>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.instagram.com/vision_accounting_?igsh=MXF2czJoZDZ6OGp6aA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">Instagram</a>
                  </li>
                  <li>
                    <a href="https://jsdl.in/DT-294R6EWLIUV" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">Justdial</a>
                  </li>
                  <li>
                    <a href="https://www.sulekha.com/profile/vision-accounting-tally-classes-mg-road-indore?utm_medium=copyLink" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">Sulekha</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vision-accounting?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Vision Accounting - Tally Training & Accounting Services.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

            {/* ChatBot */}
      <ChatBot />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919179632649"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-20 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Enrollment Form */}
      <EnrollmentForm
        isOpen={isEnrollmentFormOpen}
        onClose={closeEnrollmentForm}
      />
    </div>
  );
}
