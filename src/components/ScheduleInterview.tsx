import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Video, Phone, MapPin, Check, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ScheduleInterviewProps {
  onBack: () => void;
}

export default function ScheduleInterview({ onBack }: ScheduleInterviewProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const interviewTypes = [
    {
      id: 'video',
      name: 'Video Call',
      icon: Video,
      description: 'Google Meet or Zoom',
      duration: '45-60 minutes'
    },
    {
      id: 'phone',
      name: 'Phone Call',
      icon: Phone,
      description: 'Voice only interview',
      duration: '30-45 minutes'
    },
    {
      id: 'in-person',
      name: 'In-Person',
      icon: MapPin,
      description: 'Face-to-face meeting',
      duration: '60 minutes'
    }
  ];

  const getNext7Days = () => {
    const days = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip weekends {date.getDay() !== 0 && date.getDay() !== 6}
      if (true) {
        days.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
          })
        });
      }
    }
    return days;
  };

  const handleSubmit = () => {
    const subject = "Interview Schedule";
    const body = `
Interview Details:

📅 Date: ${selectedDate}
⏰ Time: ${selectedTime}
📌 Type: ${selectedType}

Company Information:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
🏢 Company: ${formData.company}
💼 Position: ${formData.position}
📝 Message: ${formData.message}
`;

    const mailtoLink = `mailto:narasimhas9490@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setTimeout(() => {
      onBack();
    }, 5000);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>

            <div className="text-center">
              <h1 className="text-lg font-semibold text-black">Schedule Interview</h1>
              <p className="text-sm text-gray-500">Step {step} of 3</p>
            </div>

            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center gap-3 ${step >= 1 ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                {step > 1 ? <Check className="w-4 h-4" /> : '1'}
              </div>
              <span className="text-sm font-medium">Date & Time</span>
            </div>

            <div className={`flex items-center gap-3 ${step >= 2 ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                {step > 2 ? <Check className="w-4 h-4" /> : '2'}
              </div>
              <span className="text-sm font-medium">Interview Type</span>
            </div>

            <div className={`flex items-center gap-3 ${step >= 3 ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 3 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                3
              </div>
              <span className="text-sm font-medium">Your Details</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Date & Time Selection */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-2">
                Select Your Preferred Date & Time
              </h2>
              <p className="text-gray-600">
                Choose from the available slots. All times are in IST (Indian Standard Time).
              </p>
            </div>

            {/* Date Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-black" />
                <h3 className="text-lg font-semibold text-black">Available Dates</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getNext7Days().map((day) => (
                  <button
                    key={day.date}
                    onClick={() => setSelectedDate(day.date)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${selectedDate === day.date
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <div className="font-medium text-black">{day.display}</div>
                    <div className="text-sm text-gray-500">Available</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-black" />
                  <h3 className="text-lg font-semibold text-black">Available Times</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${selectedTime === time
                          ? 'border-black bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="font-medium text-black">{time}</div>
                      <div className="text-xs text-gray-500">Available</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-6">
              <Button
                onClick={() => setStep(2)}
                disabled={!selectedDate || !selectedTime}
                className="bg-black text-white hover:bg-gray-800 px-6 py-2"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Interview Type Selection */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-2">
                Choose Interview Format
              </h2>
              <p className="text-gray-600">
                Select the interview format that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {interviewTypes.map((type) => (
                <div
                  key={type.id}
                  className={`cursor-pointer rounded-lg border-2 p-6 transition-all ${selectedType === type.id
                      ? 'border-black bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center ${selectedType === type.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">{type.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {type.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!selectedType}
                className="bg-black text-white hover:bg-gray-800 px-6 py-2"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-2">
                Your Contact Information
              </h2>
              <p className="text-gray-600">
                Please provide your details so I can confirm the interview.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-black">Contact Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="border-gray-300 focus:border-black"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="border-gray-300 focus:border-black"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">
                    Company/Organization
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="border-gray-300 focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">
                    Position/Role
                  </label>
                  <Input
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Software Engineer, Frontend Developer, etc."
                    className="border-gray-300 focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">
                    Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about the role, team, or anything else you'd like me to know..."
                    rows={4}
                    className="border-gray-300 focus:border-black resize-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-black">Interview Summary</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-black" />
                    <div>
                      <div className="font-medium text-black">
                        {getNext7Days().find(d => d.date === selectedDate)?.display}
                      </div>
                      <div className="text-sm text-gray-600">{selectedTime} IST</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    {selectedType === 'video' && <Video className="w-5 h-5 text-black" />}
                    {selectedType === 'phone' && <Phone className="w-5 h-5 text-black" />}
                    {selectedType === 'in-person' && <MapPin className="w-5 h-5 text-black" />}
                    <div>
                      <div className="font-medium text-black">
                        {interviewTypes.find(t => t.id === selectedType)?.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {interviewTypes.find(t => t.id === selectedType)?.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-black mb-2">What to expect:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Discussion about my experience and projects</li>
                    <li>• Technical questions and problem-solving</li>
                    <li>• Q&A about the role and company</li>
                    <li>• Next steps in the hiring process</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email}
                className="bg-black text-white hover:bg-gray-800 px-6 py-2"
              >
                <Send className="w-4 h-4 mr-2" />
                Schedule Interview
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}