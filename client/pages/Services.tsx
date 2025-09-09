import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  FileText,
  Receipt,
  Percent,
  ShieldCheck,
  ClipboardList,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Services() {
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const openEnrollmentForm = () => setIsEnrollmentFormOpen(true);
  const closeEnrollmentForm = () => setIsEnrollmentFormOpen(false);

  const services = [
    {
      title: "Bookkeeping & Ledger Maintenance",
      description:
        "Accurate recording of daily financial transactions, ledger postings, reconciliations, and periodic reporting.",
      icon: Calculator,
      highlights: [
        "Daily transaction recording",
        "Bank & cash reconciliation",
        "Accounts receivable/payable tracking",
      ],
    },
    {
      title: "Financial Statement Preparation",
      description:
        "Preparation of Balance Sheet, Profit & Loss, and Cash Flow statements as per accounting standards.",
      icon: FileText,
      highlights: [
        "Monthly/Quarterly/Year-end reports",
        "Variance analysis",
        "Management-ready statements",
      ],
    },
    {
      title: "Income Tax Filing (ITR)",
      description:
        "End-to-end ITR preparation and electronic filing for individuals, professionals, and businesses.",
      icon: Receipt,
      highlights: [
        "Form selection & computation",
        "Deductions optimization",
        "E-filing & acknowledgments",
      ],
    },
    {
      title: "GST Registration & Filing",
      description:
        "Seamless GST registration, monthly/quarterly returns, reconciliations, and compliance advisory.",
      icon: Percent,
      highlights: [
        "GSTIN registration",
        "GSTR-1, 3B, 9, 9C",
        "ITC reconciliation",
      ],
    },
    {
      title: "TDS Compliance & Returns",
      description:
        "Computation, deduction, deposit, and return filing with timely reminders and compliance support.",
      icon: ClipboardList,
      highlights: [
        "TDS/TCS computation",
        "Challan payments",
        "Quarterly statements",
      ],
    },
    {
      title: "Audit Services (Statutory, Internal, Tax)",
      description:
        "Risk-based audits to strengthen controls, ensure compliance, and improve financial reliability.",
      icon: ShieldCheck,
      highlights: [
        "Process & control review",
        "Documentation & evidence",
        "Actionable recommendations",
      ],
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
                  <span className="text-gray-800"> - Tally Training & Accounting Services</span>
                </h1>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-vision-yellow transition-colors font-medium">Home</Link>
              <a href="/#about" className="text-gray-700 hover:text-vision-yellow transition-colors font-medium">About</a>
              <a href="/#courses" className="text-gray-700 hover:text-vision-yellow transition-colors font-medium">Courses</a>
              <Link to="/schedule" className="text-gray-700 hover:text-vision-yellow transition-colors font-medium">Schedule</Link>
              <Link to="/services" className="text-vision-yellow font-medium">Services</Link>
              <a href="/#testimonials" className="text-gray-700 hover:text-vision-yellow transition-colors font-medium">Reviews</a>
              <Link to="/contact" className="text-gray-700 hover:text-vision-yellow transition-colors font-medium">Contact</Link>
              <Button onClick={openEnrollmentForm} className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-6">Enroll Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-vision-yellow transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="bg-vision-gray text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-vision-yellow">Professional Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2 max-w-3xl mx-auto">
            Comprehensive accounting and compliance solutions for individuals and businesses.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted guidance, accurate reporting, and on-time filings to keep your finances compliant and on track.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our range of services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((svc, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow border-l-4 border-l-vision-yellow">
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 bg-vision-yellow/10 rounded-full flex items-center justify-center mb-4">
                    <svc.icon className="w-8 h-8 text-vision-yellow" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{svc.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{svc.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {svc.highlights.map((h, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-vision-yellow mr-2" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link to="/contact" className="inline-flex items-center text-vision-yellow hover:underline font-medium">
                      Get a consultation
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us your requirements and we will tailor a solution to match your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold rounded-lg"
            >
              Contact Us
            </Link>
            <Button
              onClick={openEnrollmentForm}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Enroll for Training
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
                  <span className="text-white"> - Tally Training & Accounting Services</span>
                </h3>
                <p className="text-gray-400">Your Success is Our Vision</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-vision-yellow transition-colors">Home</Link>
                </li>
                <li>
                  <a href="/#courses" className="text-gray-400 hover:text-vision-yellow transition-colors">Courses</a>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-vision-yellow transition-colors">Services</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-vision-yellow transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm">
                301 (3rd Floor) Advocate Chamber
                <br />6 Sikkha Mohalla Main Road, Indore
                <br />
                <a href="https://www.google.com/maps/dir/?api=1&destination=22.720863,75.8630805" target="_blank" rel="noopener noreferrer" className="text-vision-yellow hover:underline">Get Directions</a>
              </p>
              <div className="mt-4 text-gray-400 text-sm space-y-1">
                <div className="flex items-center"><Phone className="w-4 h-4 mr-2" />+91 9009232649</div>
                <div className="flex items-center"><Phone className="w-4 h-4 mr-2" />+91 9179632649</div>
                <div className="flex items-center"><Mail className="w-4 h-4 mr-2" />Visionaccounting@myyahoo.com</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Vision Accounting - Tally Training & Accounting Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Enrollment Form */}
      <EnrollmentForm isOpen={isEnrollmentFormOpen} onClose={closeEnrollmentForm} />
    </div>
  );
}
