import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentForm({
  isOpen,
  onClose,
}: EnrollmentFormProps) {
    const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    selectedCourse: "",
    preferredTiming: "",
    previousExperience: "",
    motivation: "",
  });

  const courses = [
    {
      name: "GST Accounting with Placement",
      duration: "3 Months",
      fee: "₹7,999",
      popular: true,
      features: [
        "100% Placement Support",
        "GST Compliance",
        "Practical Training",
      ],
    },
    {
      name: "Tally Prime",
      duration: "2 Months",
      fee: "₹7,999",
      popular: true,
      features: ["Latest Version", "Hands-on Practice", "Certificate"],
    },
    {
      name: "Tally ERP 9",
      duration: "2 Months",
      fee: "₹6,999",
      popular: false,
      features: ["Complete ERP Training", "Industry Standard", "Project Work"],
    },
    {
      name: "Basic Computer + Typing",
      duration: "1 Month",
      fee: "₹4,999",
      popular: false,
      features: [
        "Computer Fundamentals",
        "Hindi/English Typing",
        "Practice Sessions",
      ],
    },
    {
      name: "Complete Package",
      duration: "4 Months",
      fee: "₹10,499",
      popular: true,
      features: ["All Courses Included", "Best Value", "Job Guarantee"],
    },
  ];

  const timings = [
    { label: "Morning (9:00 AM - 11:00 AM)", value: "morning" },
    { label: "Afternoon (2:00 PM - 4:00 PM)", value: "afternoon" },
    { label: "Evening (6:00 PM - 8:00 PM)", value: "evening" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

      const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Enrollment submitted successfully!

✅ Your enrollment ID: ${result.enrollmentId}

📁 Data stored in:
${result.storage.join('\n')}

We will contact you within 24 hours.`);
      } else {
        alert(`Enrollment submission failed: ${result.message}`);
        return;
      }

        } catch (error) {
      console.error('Error submitting enrollment:', error);
      alert('Failed to submit enrollment. Please try again or contact us directly.');
      setIsSubmitting(false);
      return;
    }

    // Close form and reset data only on successful submission
    setIsSubmitting(false);
    onClose();
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      selectedCourse: "",
      preferredTiming: "",
      previousExperience: "",
      motivation: "",
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Enroll at{" "}
              <span className="text-vision-yellow">Vision Accounting</span>
            </h2>
            <p className="text-gray-600 mt-1">
              Start your journey to accounting success
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? "bg-vision-yellow text-gray-900"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? "bg-vision-yellow" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Personal Info</span>
            <span>Course Selection</span>
            <span>Confirmation</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                    placeholder="+91 9009232649"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                    placeholder="Your address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience in Accounting/Tally
                </label>
                <select
                  value={formData.previousExperience}
                  onChange={(e) =>
                    handleInputChange("previousExperience", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="basic">Basic Knowledge</option>
                  <option value="intermediate">Some Experience</option>
                  <option value="advanced">Advanced User</option>
                </select>
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-8 py-3"
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Course Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Choose Your Course
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-200 ${
                      formData.selectedCourse === course.name
                        ? "ring-2 ring-vision-yellow bg-vision-yellow/5"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() =>
                      handleInputChange("selectedCourse", course.name)
                    }
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        {course.popular && (
                          <Badge className="bg-vision-yellow text-gray-900 font-semibold">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="text-lg font-bold text-vision-yellow">
                          {course.fee}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-1">
                        {course.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <Star className="w-3 h-3 mr-2 text-vision-yellow" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {formData.selectedCourse && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Preferred Class Timing *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {timings.map((timing) => (
                      <Card
                        key={timing.value}
                        className={`cursor-pointer transition-all duration-200 ${
                          formData.preferredTiming === timing.value
                            ? "ring-2 ring-vision-yellow bg-vision-yellow/5"
                            : "hover:shadow-md"
                        }`}
                        onClick={() =>
                          handleInputChange("preferredTiming", timing.value)
                        }
                      >
                        <CardContent className="p-4 text-center">
                          <p className="text-sm font-medium">{timing.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to learn accounting/Tally? (Optional)
                </label>
                <textarea
                  value={formData.motivation}
                  onChange={(e) =>
                    handleInputChange("motivation", e.target.value)
                  }
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vision-yellow focus:border-transparent"
                  placeholder="Tell us about your goals and motivation..."
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-3"
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.selectedCourse || !formData.preferredTiming
                  }
                  className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-8 py-3"
                >
                  Review Details
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Confirm Your Enrollment
              </h3>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Enrollment Summary
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Personal Information
                      </h5>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Name:</strong> {formData.fullName}
                        </p>
                        <p>
                          <strong>Email:</strong> {formData.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {formData.phone}
                        </p>
                        {formData.address && (
                          <p>
                            <strong>Address:</strong> {formData.address}
                          </p>
                        )}
                        {formData.previousExperience && (
                          <p>
                            <strong>Experience:</strong>{" "}
                            {formData.previousExperience}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Course Details
                      </h5>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Course:</strong> {formData.selectedCourse}
                        </p>
                        <p>
                          <strong>Timing:</strong>{" "}
                          {
                            timings.find(
                              (t) => t.value === formData.preferredTiming,
                            )?.label
                          }
                        </p>
                        <p>
                          <strong>Fee:</strong>{" "}
                          {
                            courses.find(
                              (c) => c.name === formData.selectedCourse,
                            )?.fee
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {formData.motivation && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Your Goals
                      </h5>
                      <p className="text-sm text-gray-700">
                        {formData.motivation}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-vision-yellow bg-vision-yellow/5">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Next Steps
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-vision-yellow" />
                      Our team will contact you within 24 hours
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-vision-yellow" />
                      Payment details and schedule will be shared
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-vision-yellow" />
                      Classes will start after confirmation
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-vision-yellow" />
                      All course materials will be provided
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="px-8 py-3"
                >
                  Previous
                </Button>
                                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
