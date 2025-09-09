import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  Send,
    CheckCircle,
  MessageSquare,
  Users,
  Calendar,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatBot from "@/components/ChatBot";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Contact() {
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);

  const openEnrollmentForm = () => setIsEnrollmentFormOpen(true);
  const closeEnrollmentForm = () => setIsEnrollmentFormOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiry: "",
    message: "",
    preferredContact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        alert(result?.message || 'Failed to submit message');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      alert('Failed to submit message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      inquiry: "",
      message: "",
      preferredContact: "",
    });
    setSubmitted(false);
  };

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
              <Link
                to="/schedule"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Schedule
              </Link>
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
                            <a href="/contact" className="text-vision-yellow font-medium">
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
            Get in <span className="text-vision-yellow">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to start your accounting journey? We're here to help you
            choose the right course and answer all your questions.
          </p>
          
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Phone */}
            <Card className="text-center border-l-4 border-l-vision-yellow hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-vision-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-vision-yellow" />
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  Call Us
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <a
                      href="tel:+919009232649"
                      className="hover:text-vision-yellow transition-colors"
                    >
                      +91 9009232649
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a
                      href="tel:+919179632649"
                      className="hover:text-vision-yellow transition-colors"
                    >
                      +91 9179632649
                    </a>
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Available: Mon-Sat, 9 AM - 7 PM
                </p>
              </CardContent>
                        </Card>

            {/* WhatsApp */}
            <Card className="text-center border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  WhatsApp
                </h3>
                <p className="text-gray-600">
                  <a
                    href="https://wa.me/919179632649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition-colors font-medium"
                  >
                    +91 9179632649
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Chat instantly for quick responses
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center border-l-4 border-l-vision-yellow hover:shadow-lg transition-shadow mr-[-4px]">
              <CardContent className="p-8" style={{ padding: "32px 13px 32px 7px" }}>
                <div className="w-16 h-16 bg-vision-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-vision-yellow" />
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  Email Us
                </h3>
                <a href="mailto:Visionaccounting@myyahoo.com" className="block text-left hover:text-vision-yellow transition-colors mt-auto">Visionaccounting@myyahoo.com</a>
                <div className="flex font-normal">
                  <p className="text-gray-600 flex-grow" />
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="text-center border-l-4 border-l-vision-yellow hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-vision-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-vision-yellow" />
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  Visit Us
                </h3>
                <div className="text-gray-600 text-sm">
                  <p>301 (3rd Floor)</p>
                  <p>Advocate Chamber</p>
                  <p>6 Sikkha Mohalla Main Road</p>
                  <p>Indore, MP</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-vision-yellow text-vision-yellow hover:bg-vision-yellow hover:text-gray-900"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/dir/?api=1&destination=22.720863,75.8630805",
                      "_blank",
                    )
                  }
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="text-center border-l-4 border-l-vision-yellow hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-vision-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-vision-yellow" />
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-vision-yellow/20">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <MessageSquare className="w-6 h-6 mr-3 text-vision-yellow" />
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Have questions? Fill out the form and we'll get back to you
                  soon.
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-vision-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-gray-900" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-vision-yellow text-vision-yellow hover:bg-vision-yellow hover:text-gray-900"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiry">Type of Inquiry</Label>
                      <Select
                        value={formData.inquiry}
                        onValueChange={(value) =>
                          handleInputChange("inquiry", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="course-info">
                            Course Information
                          </SelectItem>
                          <SelectItem value="enrollment">
                            Enrollment Process
                          </SelectItem>
                          <SelectItem value="fees">Fees & Payment</SelectItem>
                          <SelectItem value="schedule">
                            Schedule & Timing
                          </SelectItem>
                          <SelectItem value="placement">
                            Placement Assistance
                          </SelectItem>
                          <SelectItem value="certification">
                            Certification
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredContact">
                        Preferred Contact Method
                      </Label>
                      <Select
                        value={formData.preferredContact}
                        onValueChange={(value) =>
                          handleInputChange("preferredContact", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="any">Any Method</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* FAQ / Quick Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Users className="w-5 h-5 mr-3 text-vision-yellow" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What courses do you offer?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We offer GST Accounting with Placement, Tally Prime, Tally
                      ERP 9, Basic Computer training, and Complete Package
                      courses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Do you provide placement assistance?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes! We provide 100% placement assistance for our GST
                      Accounting and Complete Package courses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What are the class timings?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We offer Morning (9-11 AM), Afternoon (2-4 PM), and
                      Evening (6-8 PM) batches to suit your schedule.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What is the fee structure?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Course fees range from ₹4,999 to ₹10,499 depending on the
                      course. Visit our Schedule page for detailed pricing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-vision-yellow/5 border-vision-yellow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">
                    🚀 Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Book a free consultation to discuss your career goals and
                    find the perfect course for you.
                  </p>
                  <div className="space-y-3">
                    <Button
                      onClick={openEnrollmentForm}
                      className="w-full bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-vision-yellow text-vision-yellow hover:bg-vision-yellow hover:text-gray-900"
                    >
                      Download Course Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Location
            </h2>
            <p className="text-gray-600">
              Located in the heart of Indore for easy accessibility
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-vision-yellow mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Vision Accounting Classes
                    </h3>
                                        <p className="text-gray-600 text-sm">
                      3rd Floor, Advocate Chamber, 301,
                      <br />6 Sikh Mohalla Main Road,
                      <br />Near Central Camera Repairing,
                      <br />Indore GPO, Indore - 452007
                    </p>
                    <Button
                      className="mt-4 bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold"
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps/dir/?api=1&destination=22.720863,75.8630805",
                          "_blank",
                        )
                      }
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Contact
                  </Link>
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
                <br />
                <a href="https://www.google.com/maps/dir/?api=1&destination=22.720863,75.8630805" target="_blank" rel="noopener noreferrer" className="text-vision-yellow hover:underline">Get Directions</a>
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
