const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Courses", href: "/courses" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/johnsonsacademyblr/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/johnsonsacademy_blr/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@johnsonsacademy8011",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-overlay px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="Johnson's Academy"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">
                Johnson&apos;s Academy
              </span>
            </div>
            <p className="text-sm text-muted">
              Johnson&apos;s Academy offers expert music lessons for all ages
              and skill levels. Our passionate instructors provide personalized
              training in a variety of musical genres to help you master your
              craft.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">
                Contact Us
              </h4>
              <div className="flex flex-col gap-2 text-sm text-muted">
                <p>
                  Branch 1: 189, 5th Main Rd, Vysya Bank Colony, Shantiniketan
                  Layout, Arekere, Bengaluru, Karnataka - 560076
                </p>
                <p>
                  Branch 2: 3rd Floor, SS Arcade, DLF Main Rd, above KFC, next
                  to KaiRuchi, Bhagyalakshmi Avenue, Rukmaiah Layout, Hulimavu,
                  Bengaluru, Karnataka - 560076
                </p>
                <a
                  href="tel:+917798347976"
                  className="hover:text-primary transition-colors"
                >
                  +91 77983 47976
                </a>
                <a
                  href="mailto:info@johnsonsacademy.in"
                  className="hover:text-primary transition-colors"
                >
                  info@johnsonsacademy.in
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col items-center justify-center gap-4 text-center text-sm text-muted">
          <nav className="flex items-center justify-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-primary hover:underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p>
            © {new Date().getFullYear()} Johnson&apos;s Academy. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
