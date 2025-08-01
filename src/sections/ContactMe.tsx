"use client";

import { Mail } from "lucide-react";

const CONTACT_EMAIL = "zivsxdev@email.com";

export default function ContactMe() {
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

      <form
        action={`https://formsubmit.co/${CONTACT_EMAIL}`}
        method="POST"
        className="bg-stone-300 p-3 md:p-5 shadow-md space-y-3 md:space-y-4 border border-black"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
        }}
      >
        <input type="hidden" name="_captcha" value="false" />

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
          className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 px-4 py-1.5 md:px-6 md:py-2 text-white text-sm md:text-base font-medium w-full"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
          }}
        >
          Send Message
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
