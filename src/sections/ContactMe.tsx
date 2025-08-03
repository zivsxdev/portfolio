"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

const CONTACT_EMAIL = "zivsxdev@gmail.com"; // Replace with your actual email

export default function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="text-stone-900 max-w-sm md:max-w-md mx-auto px-2 py-10"
      id="contact"
    >
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-stone-900 text-4xl md:text-3xl">Contact Me</h2>
        <p className="text-orange-500 mt-1 text-sm md:text-base">
          Let&apos;s create something awesome together!
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 text-xs">
          <p className="text-center">✅ Message sent successfully!</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 text-xs">
          <p className="text-center">❌ Please try again or email directly.</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-stone-300 p-3 md:p-5 shadow-md space-y-3 md:space-y-4 border border-black"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
        }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
        <input type="hidden" name="_template" value="table" />

        <div>
          <label className="block text-stone-900 mb-0.5 text-xs md:text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-2 py-1 md:px-3 md:py-2 bg-stone-200 border border-gray-600 text-stone-900 text-xs md:text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-orange-500"
            placeholder="Your name"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))",
            }}
          />
        </div>

        <div>
          <label className="block text-stone-900 mb-0.5 text-xs md:text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-2 py-1 md:px-3 md:py-2 bg-stone-200 border border-gray-600 text-stone-900 text-xs md:text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-orange-500"
            placeholder="you@example.com"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))",
            }}
          />
        </div>

        <div>
          <label className="block text-stone-900 mb-0.5 text-xs md:text-sm">
            Message
          </label>
          <textarea
            name="message"
            rows={3}
            required
            className="w-full px-2 py-1 md:px-3 md:py-2 bg-stone-200 border border-gray-600 text-stone-900 text-xs md:text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-orange-500"
            placeholder="Tell me about your idea..."
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-1.5 md:px-6 md:py-2 text-white text-sm md:text-base font-medium w-full transition-all duration-200 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-orange-500 hover:bg-orange-600'
          }`}
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-4 md:mt-6 text-center">
        <p className="text-gray-400 text-xs md:text-sm">
          Or email me directly:
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-1 mt-1 text-orange-500 hover:underline text-sm"
        >
          <Mail className="w-3 h-3 md:w-4 md:h-4" />
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}