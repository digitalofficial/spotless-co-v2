import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  Services: [
    { name: "Residential", href: "/services/residential" },
    { name: "Commercial", href: "/services/commercial" },
    { name: "Move-In / Out", href: "/services/move-in-out" },
    { name: "Deep Cleaning", href: "/services/deep-clean" },
    { name: "Office", href: "/services/office" },
    { name: "Airbnb Turnover", href: "/services/airbnb-turnover" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
    { name: "All Services", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Professional cleaning services in Tucson, AZ. We bring the sparkle
              so you can enjoy your space. Eco-friendly, insured, and
              satisfaction guaranteed.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3 2.7C11.3 0.7 8 0.7 6 2.7L8 4.7L10 2.7C11.1 1.6 12.9 1.6 14 2.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M2 6V14H14V6L8 2L2 6Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Tucson, Arizona
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 4L8 8.5L13 4M3 12H13V4H3V12Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              hello@spotlessco.com
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3H4C3.4 3 3 3.4 3 4C3 9 7 13 12 13C12.6 13 13 12.6 13 12V10L10.5 8.5L9 10C7.5 9.5 6.5 8.5 6 7L7.5 5.5L6 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              (520) 555-0123
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold text-charcoal tracking-wide uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-fresh transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Spotless Co. All rights reserved.</p>
          <p>Professional Cleaning in Tucson, AZ</p>
        </div>
      </div>
    </footer>
  );
}
