import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "./ContactForm";
import { contactInfo, personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/12 dark:bg-blue-600/8 blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/12 dark:bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="Contact"
            title="Get In Touch"
            description="Open to full-time roles and collaborations at game studios and ad agencies. Based in Ha Noi, Vietnam."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* ── Left: Info ── */}
          <AnimatedSection delay={100}>
            <div className="space-y-6 h-full flex flex-col">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  Ready to collaborate?
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Whether you need a high-converting playable ad, an engaging interactive game demo, or a polished Unity &amp; Luna Playable experience — I&apos;m here to make it happen. Drop me a message and I&apos;ll get back to you shortly.
                </p>
              </div>

              {/* Contact info cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/4 border border-slate-200/80 dark:border-white/8 backdrop-blur-sm hover:border-blue-500/30 dark:hover:border-blue-500/25 hover:shadow-lg hover:shadow-blue-500/8 transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-lg shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-gradient transition-all duration-300">
                        {item.value}
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 ml-auto text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-4 uppercase tracking-wider">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      name: "GitHub",
                      href: personalInfo.github,
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "LinkedIn",
                      href: personalInfo.linkedin,
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "Twitter",
                      href: personalInfo.twitter,
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ),
                    },
                  ].filter(s => s.href !== "#").map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/60 dark:bg-white/6 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Form ── */}
          <AnimatedSection delay={200}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-slate-200/60 dark:border-white/6">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500 dark:text-slate-500">
            © 2026 <span className="text-gradient font-semibold">Truong LV</span>. All rights reserved.
          </div>
          <div className="text-sm text-slate-400 dark:text-slate-600">
            Built with Next.js · Tailwind CSS · TypeScript
          </div>
        </div>
      </div>
    </section>
  );
}
