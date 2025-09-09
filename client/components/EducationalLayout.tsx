import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Award,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  GraduationCap,
  Building,
  FileText,
  Download,
  Search,
  Bell,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function EducationalLayout() {
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);

  const openEnrollmentForm = () => setIsEnrollmentFormOpen(true);
  const closeEnrollmentForm = () => setIsEnrollmentFormOpen(false);

  const academicPrograms = [
    {
      id: "diploma-accounting",
      title: "Diploma in Accounting & Finance",
      duration: "6 Months",
      level: "Diploma",
      credits: "45 Credits",
      fee: "₹25,000",
      description:
        "Comprehensive program covering accounting fundamentals, financial management, and GST compliance.",
      modules: [
        "Financial Accounting Principles",
        "Management Accounting",
        "GST & Tax Compliance",
        "Computerized Accounting (Tally)",
        "Financial Statement Analysis",
        "Business Communication",
      ],
      prerequisites: "12th Pass or equivalent",
      certification: "Vision Accounting Institute Certificate",
      placement: "100% Placement Assistance",
    },
    {
      id: "certificate-tally",
      title: "Certificate in Tally Prime & ERP",
      duration: "3 Months",
      level: "Certificate",
      credits: "30 Credits",
      fee: "₹15,000",
      description:
        "Industry-focused certification program for Tally software mastery.",
      modules: [
        "Tally Prime Fundamentals",
        "Company Creation & Setup",
        "Voucher Entry & Processing",
        "Inventory Management",
        "GST Implementation",
        "Report Generation & Analysis",
      ],
      prerequisites: "Basic Computer Knowledge",
      certification: "Tally Certified Professional",
      placement: "Job Placement Support",
    },
    {
      id: "advanced-gst",
      title: "Advanced GST & Compliance",
      duration: "2 Months",
      level: "Advanced Certificate",
      credits: "20 Credits",
      fee: "₹12,000",
      description:
        "Specialized program for GST compliance and advanced taxation.",
      modules: [
        "GST Law & Procedures",
        "Return Filing (GSTR-1, 2, 3B)",
        "Input Tax Credit Management",
        "E-invoicing & E-way Bills",
        "GST Audit & Assessment",
        "Compliance & Penalties",
      ],
      prerequisites: "Basic Accounting Knowledge",
      certification: "GST Compliance Specialist",
      placement: "Industry Internship",
    },
  ];

  const faculty = [
    {
      name: "Mr. Dhananjay Patidar",
      designation: "Principal & Chief Instructor",
      qualification: "MBA, Tally Certified",
      experience: "5+ Years",
      specialization: "Accounting, Tally ERP, GST Compliance",
      image: "DP",
      courses: ["All Programs"],
      achievements: [
        "Certified Tally Professional Trainer",
        "GST Implementation Expert",
        "500+ Students Trained",
      ],
    },
  ];

  const facilities = [
    {
      name: "Computer Laboratory",
      description:
        "State-of-the-art computer lab with 25 systems, latest software, and high-speed internet connectivity.",
      icon: Building,
      features: [
        "25 Computer Systems",
        "Latest Software",
        "High-Speed Internet",
        "Air Conditioned",
      ],
    },
    {
      name: "Smart Classrooms",
      description:
        "Interactive learning environment with projectors, smart boards, and modern teaching aids.",
      icon: BookOpen,
      features: [
        "Digital Projectors",
        "Smart Boards",
        "Audio Systems",
        "Comfortable Seating",
      ],
    },
    {
      name: "Library & Resources",
      description:
        "Comprehensive collection of accounting books, journals, and digital resources for students.",
      icon: FileText,
      features: [
        "500+ Books",
        "Digital Library",
        "Research Papers",
        "Study Materials",
      ],
    },
    {
      name: "Career Counseling Center",
      description:
        "Dedicated placement cell providing career guidance, interview preparation, and job assistance.",
      icon: GraduationCap,
      features: [
        "Career Guidance",
        "Resume Building",
        "Interview Prep",
        "Job Placement",
      ],
    },
  ];

  const achievements = [
    { metric: "8+", label: "Years of Excellence", icon: Award },
    { metric: "1500+", label: "Students Graduated", icon: Users },
    { metric: "95%", label: "Placement Rate", icon: GraduationCap },
    { metric: "50+", label: "Industry Partners", icon: Building },
  ];

  const notices = [
    {
      date: "2024-01-15",
      title: "New Batch Admission Open",
      type: "Admission",
      content:
        "Admissions open for February 2024 batch. Limited seats available.",
    },
    {
      date: "2024-01-10",
      title: "Industry Visit Scheduled",
      type: "Event",
      content:
        "Educational visit to leading accounting firms scheduled for January 25th.",
    },
    {
      date: "2024-01-05",
      title: "Placement Drive Results",
      type: "Placement",
      content: "100% placement achieved for December 2023 batch graduates.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Academic Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-vision-yellow rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">
                    <span className="text-vision-yellow">Vision</span>{" "}
                    Accounting Institute
                  </h1>
                  <p className="text-sm text-gray-300">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>+91 9009232649</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  <span>Visionaccounting@myyahoo.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Academic Navigation */}
      <nav className="bg-white border-b-2 border-vision-yellow shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 py-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-vision-yellow font-medium"
              >
                Home
              </Link>
              <Link
                to="#about"
                className="text-gray-700 hover:text-vision-yellow font-medium"
              >
                About Institute
              </Link>
              <Link
                to="#programs"
                className="text-gray-700 hover:text-vision-yellow font-medium"
              >
                Academic Programs
              </Link>
              <Link
                to="#faculty"
                className="text-gray-700 hover:text-vision-yellow font-medium"
              >
                Faculty
              </Link>
              <Link
                to="#facilities"
                className="text-gray-700 hover:text-vision-yellow font-medium"
              >
                Facilities
              </Link>
              <Link
                to="#admissions"
                className="text-gray-700 hover:text-vision-yellow font-medium"
              >
                Admissions
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-vision-yellow font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button
                onClick={openEnrollmentForm}
                className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-vision-yellow text-gray-900 font-semibold mb-4">
                NAAC Accredited Institute
              </Badge>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Excellence in
                <span className="text-vision-yellow">
                  {" "}
                  Accounting Education
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Empowering future accounting professionals with
                industry-relevant skills, modern technology, and guaranteed
                placement assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={openEnrollmentForm}
                  size="lg"
                  className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Apply for Admission
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Prospectus
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="border-l border-vision-yellow pl-4"
                  >
                    <achievement.icon className="w-6 h-6 text-vision-yellow mx-auto mb-2" />
                    <div className="text-2xl font-bold text-vision-yellow">
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-gray-300">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Admission
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                  />
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent">
                    <option>Select Program</option>
                    <option>Diploma in Accounting & Finance</option>
                    <option>Certificate in Tally Prime & ERP</option>
                    <option>Advanced GST & Compliance</option>
                  </select>
                  <Button
                    onClick={openEnrollmentForm}
                    className="w-full bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold py-3"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board & Important Updates */}
      <section className="py-12 bg-vision-yellow/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Bell className="w-8 h-8 mr-3 text-vision-yellow" />
              Notice Board & Updates
            </h2>
            <Button variant="outline" size="sm">
              View All Notices
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notices.map((notice, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-vision-yellow hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {notice.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{notice.date}</span>
                  </div>
                  <CardTitle className="text-lg">{notice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{notice.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to meet industry demands and
              prepare students for successful careers in accounting and finance.
            </p>
          </div>

          <div className="space-y-8">
            {academicPrograms.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-gray-50 p-8">
                    <Badge className="bg-vision-yellow text-gray-900 font-semibold mb-4">
                      {program.level}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-vision-yellow" />
                        <span>
                          <strong>Duration:</strong> {program.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-vision-yellow" />
                        <span>
                          <strong>Credits:</strong> {program.credits}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-vision-yellow" />
                        <span>
                          <strong>Fee:</strong> {program.fee}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={openEnrollmentForm}
                      className="w-full mt-6 bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold"
                    >
                      Apply Now
                    </Button>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <p className="text-gray-600 mb-6">{program.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Course Modules
                        </h4>
                        <ul className="space-y-2">
                          {program.modules.map((module, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 text-vision-yellow mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {module}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Prerequisites
                          </h4>
                          <p className="text-sm text-gray-600">
                            {program.prerequisites}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Certification
                          </h4>
                          <p className="text-sm text-gray-600">
                            {program.certification}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Career Support
                          </h4>
                          <p className="text-sm text-gray-600">
                            {program.placement}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 w-full flex flex-col">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Distinguished Faculty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and experienced educators who are
              committed to your academic excellence and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right mx-auto">
            {faculty.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow flex flex-col"
              >
                <CardContent className="p-8 flex flex-col justify-center items-center ml-auto -mr-[2px] pl-12">
                  <div className="w-24 h-24 bg-vision-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-gray-900 font-bold text-2xl">
                      {member.image}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-vision-yellow font-semibold mb-2">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.qualification}
                  </p>

                  <div className="space-y-2 text-sm mb-6">
                    <div>
                      <strong>Experience:</strong> {member.experience}
                    </div>
                    <div>
                      <strong>Specialization:</strong> {member.specialization}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Courses
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.courses.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Achievements
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center"
                        >
                          <Award className="w-3 h-3 mr-1 text-vision-yellow" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure and modern learning facilities to
              provide the best educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-vision-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-8 h-8 text-vision-yellow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {facility.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {facility.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 mr-2 text-vision-yellow" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Vision Accounting Institute and transform your career with our
            industry-leading programs and expert faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openEnrollmentForm}
              size="lg"
              className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Apply for Admission
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-vision-yellow rounded-full flex items-center justify-center mr-3">
                  <GraduationCap className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Vision Accounting Institute
                  </h3>
                  <p className="text-sm text-gray-300">
                    
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Excellence in Accounting Education
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Academic Programs</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Diploma in Accounting & Finance</li>
                <li>Certificate in Tally Prime & ERP</li>
                <li>Advanced GST & Compliance</li>
                <li>Basic Computer Training</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/" className="hover:text-vision-yellow">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#about" className="hover:text-vision-yellow">
                    About Institute
                  </Link>
                </li>
                <li>
                  <Link to="#admissions" className="hover:text-vision-yellow">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-vision-yellow">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <div>
                    <span>
                      301 (3rd Floor) Advocate Chamber
                      <br />6 Sikkha Mohalla Main Road, Indore
                    </span>
                    <div>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=22.720863,75.8630805" target="_blank" rel="noopener noreferrer" className="text-vision-yellow hover:underline">Get Directions</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 9009232649, +91 9179632649</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Visionaccounting@myyahoo.com</span>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.instagram.com/vision_accounting_?igsh=MXF2czJoZDZ6OGp6aA==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-vision-yellow transition-colors">Instagram</a>
                    </li>
                    <li>
                      <a href="https://jsdl.in/DT-294R6EWLIUV" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-vision-yellow transition-colors">Justdial</a>
                    </li>
                    <li>
                      <a href="https://www.sulekha.com/profile/vision-accounting-tally-classes-mg-road-indore?utm_medium=copyLink" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-vision-yellow transition-colors">Sulekha</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/vision-accounting?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-vision-yellow transition-colors">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vision Accounting Institute. All rights reserved. | NAAC
              Accredited | ISO 9001:2015 Certified
            </p>
          </div>
        </div>
      </footer>

      {/* Enrollment Form */}
      <EnrollmentForm
        isOpen={isEnrollmentFormOpen}
        onClose={closeEnrollmentForm}
      />
    </div>
  );
}
