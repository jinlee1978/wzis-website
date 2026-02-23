'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    message: '',
  });

  const positions = [
    'Elementary Teacher (Lower Years)',
    'Middle & High School English Teacher',
    'High School Mathematics Teacher',
    'Middle & High School Science Teacher (Physical Sciences)',
    'PE Teacher (Grades 3-12)',
    'Open Applications',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent('WZIS Job Application — ' + formData.position + ' — ' + formData.fullName);
    const body = encodeURIComponent(
      'Name: ' + formData.fullName + '\n' +
      'Position: ' + formData.position + '\n\n' +
      formData.message + '\n\n' +
      '(Please remember to attach your resume to this email.)'
    );

    window.location.href = 'mailto:jobs@zhongshischool.org?subject=' + subject + '&body=' + body;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-navy mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-brand rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="position" className="block text-sm font-medium text-navy mb-2">
          Position Interest
        </label>
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-brand rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="">Select a position</option>
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          Cover Letter / Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-brand rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="Tell us about yourself and why you're interested in joining WZIS..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Submit Application
      </button>

      <p className="text-xs text-gray-500 text-center">
        This will open your email app. Please attach your resume before sending.
      </p>
    </form>
  );
}
