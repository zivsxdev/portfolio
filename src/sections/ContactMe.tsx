"use client";

import { Mail } from "lucide-react";

const CONTACT_EMAIL = "zivsxdev@email.com";

export default function ContactMe() {
  return (
    <section className="  text-stone-900 max-w-2xl md:max-w-lg mx-auto px-4 py-20 sm:py-7" id="contact">
      <div className="text-center mb-8">
        <h2 className="  text-stone-900 text-3xl md:text-5xl lg:text-6xl ">
          Contact Me
        </h2>
        <p className="text-orange-500 mt-2">
          Let&apos;s create something awesome together!
        </p>
      </div>

      <form
        action={`https://formsubmit.co/${CONTACT_EMAIL}`}
        method="POST"
        className=" bg-stone-300 p-6 shadow-lg space-y-4 border border-black"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        }}
      >
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="block  text-stone-900  mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 bg-stone-200 border border-gray-600 text-stone-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-orange-500"
            placeholder="Your name"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
            }}
          />
        </div>

        <div>
          <label className="block text-stone-900  mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-stone-200 border border-gray-600 text-stone-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-orange-500"
            placeholder="you@example.com"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
            }}
          />
        </div>

        <div>
          <label className="block text-stone-900  mb-1 text-sm">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 bg-stone-200 border border-gray-600 text-stone-900 placeholder:text-gray-500
             focus:outline-none focus:ring-2 focus:ring-red-orange-500"
            placeholder="Tell me about your idea..."
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-6 py-2 text-white font-semibold w-full"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
          }}
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">Or email me directly:</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 mt-2 text-orange-500 hover:underline"
        >
          <Mail className="w-4 h-4" />
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
