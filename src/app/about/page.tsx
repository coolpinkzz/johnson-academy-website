import type { Metadata } from "next";
import Link from "next/link";
import CoursePageLayout from "@/components/CoursePageLayout";
import AboutStatsSection from "@/components/AboutStatsSection";

const SITE_URL = "https://johnsonsacademy.com";

export const metadata: Metadata = {
  title:
    "About Us | Johnson's Academy — Music, Dance & Arts Academy in Bangalore",
  description:
    "Founded in 2017, Johnson's Academy has trained 1000+ students in Bangalore. Learn about our history, facilities, expert faculty, and our role in Bengaluru's arts community.",
  keywords: [
    "Johnson Academy Bangalore",
    "music academy Bangalore",
    "dance academy Bangalore",
    "performing arts school",
    "Johnson's Academy about",
    "Ashish Johnson",
  ],
  openGraph: {
    title: "About Us | Johnson's Academy — Music, Dance & Arts in Bangalore",
    description:
      "Founded in 2017 in Bengaluru. 1000+ students trained. Expert faculty, premium facilities. Discover our story and commitment to the arts.",
    type: "website",
    url: `${SITE_URL}/about`,
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

function AboutJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/about/#organization`,
        name: "Johnson's Academy",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description:
          "Johnson's Academy is a performing arts academy in Bangalore offering music, dance, art, and karate training. Founded in 2017, we have trained over 1000 students.",
        foundingDate: "2017",
        founder: {
          "@type": "Person",
          name: "Ashish Johnson",
          jobTitle: "Founder",
        },
        address: [
          {
            "@type": "PostalAddress",
            streetAddress:
              "189, 5th Main Rd, Vysya Bank Colony, Shantiniketan Layout, Arekere",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560076",
          },
          {
            "@type": "PostalAddress",
            streetAddress:
              "3rd Floor, SS Arcade, DLF Main Rd, above KFC, Bhagyalakshmi Avenue, Rukmaiah Layout, Hulimavu",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560076",
          },
        ],
        telephone: "+917798347976",
        email: "info@johnsonsacademy.in",
      },
      {
        "@type": "Person",
        name: "Ashish Johnson",
        jobTitle: "Founder",
        worksFor: {
          "@id": `${SITE_URL}/about/#organization`,
        },
        sameAs: [
          "https://www.facebook.com/johnsonsacademyblr/",
          "https://www.instagram.com/johnsonsacademy_blr/",
          "https://www.youtube.com/@johnsonsacademy8011",
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AboutPage() {
  return (
    <CoursePageLayout>
      <AboutJsonLd />

      {/* Hero */}
      <header
        className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-cover bg-center"
        aria-labelledby="about-heading"
        style={{
          backgroundImage: `url('https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC03649-min-1-scaled.jpg')`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-linear-to-b from-primary/10 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            About Johnson&apos;s Academy
          </p>
          <h1
            id="about-heading"
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Innovation. Excellence. Commitment.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted sm:text-xl">
            A premier performing arts academy in Bengaluru, nurturing talent
            since 2017.
          </p>
        </div>
      </header>

      {/* Our History */}
      <section
        className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="history-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="history-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Our History
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              Founded in 2017 by Ashish Johnson, Johnson&apos;s Academy began in
              a small residential apartment in Hulimavu, Bengaluru, with a
              simple yet powerful aim: to provide professional, structured
              training in the performing arts. Initially offering only guitar
              lessons, the academy quickly earned a reputation for excellence.
            </p>
            <p>
              By 2018, we expanded into a larger commercial space, adding a wide
              range of programs, including Western and Indo-Western Keyboard,
              Drums, Violin, Hindustani Vocals, Western Vocals, Western Dance,
              Indian Classical Dance, Karate, Dance Fitness, and Fine Arts such
              as Drawing, Sketching, and Painting.
            </p>
            <p>
              Today, Johnson&apos;s Academy has proudly trained over 1,000
              students and currently nurtures over 600 learners across two
              branches. Both our centers are located in premium areas with easy
              access and great connectivity, designed to provide a safe, secure,
              and welcoming environment for all students.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities & Faculty */}
      <section
        className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="facilities-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="facilities-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            State-of-the-Art Facilities & Expert Faculty
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Each branch offers more than 2500+ sqft of thoughtfully designed
            space, fully equipped with premium instruments, high-end sound
            systems, and professional-grade facilities to ensure an exceptional
            learning experience. Our team includes over 25 certified and
            experienced instructors, supported by a strong management system
            that upholds our commitment to structured, high-quality education.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We also offer an in-house music store, Kiaan Musical, a sister brand
            of Johnson&apos;s Academy, where students can purchase pre-checked
            premium musical instruments and pro audio materials with end-to-end
            service warranties at the best discounts.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-20"
        aria-label="Academy achievements"
      >
        <AboutStatsSection />
      </section>

      {/* Our Role in the Arts Community */}
      <section
        className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="community-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="community-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Our Active Role in the Arts Community
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              Beyond the classroom, Johnson&apos;s Academy actively shapes the
              arts scene in Bengaluru and beyond. We have had the privilege of
              judging various university-level events for prestigious
              institutions like Jain University and Christ University.
            </p>
            <p>
              For the past three years, we have also been honored to judge and
              host IIT Bangalore&apos;s Battle of the Bands, where winners earn
              the opportunity to perform at IIT Kanpur alongside renowned Indian
              singers, musicians, and bands, along with recording deals and cash
              prizes.
            </p>
            <p>
              In addition, Johnson&apos;s Academy organizes a variety of
              competitions, including Battle of the Bands, Dance Battles, and
              Solo Talent Hunts, creating exciting platforms for students and
              emerging artists to showcase their skills, build stage confidence,
              and experience the spirit of healthy competition.
            </p>
          </div>
        </div>
      </section>

      {/* Wings Festival */}
      <section
        className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-cover bg-center"
        aria-labelledby="wings-heading"
        style={{
          backgroundImage: `url('https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC01511-scaled.jpg')`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2
            id="wings-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            The Annual Festival — WINGS
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Johnson&apos;s Academy hosts Wings, the grand Annual Day Festival,
            where students showcase their talents on a professional stage. This
            event is a celebration of music, dance, theater, and martial arts,
            helping students gain confidence through live performances.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Stage Programs
              </h3>
              <p className="mt-2 text-muted">
                Students participate in choreographed performances, live band
                sets, dramatic plays, and solo showcases, experiencing the
                thrill of performing under the spotlight.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Talent Competitions
              </h3>
              <p className="mt-2 text-muted">
                Various contests in instrumental music, vocal performances,
                dance battles, and more, allowing students to challenge
                themselves and grow as artists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Beyond the Academy */}
      <section
        className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="opportunities-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="opportunities-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Opportunities Beyond the Academy
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Johnson&apos;s Academy has gained recognition beyond its own events.
            Students frequently receive invitations to perform at college
            festivals, talent hunts, and competitions, giving them valuable
            exposure in the broader performing arts scene.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      {/* https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC06064-scaled.jpg */}
      <section
        // add black gradient to the background from left to right
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url('https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC06064-scaled.jpg')`,
          backgroundPosition: "center",
        }}
        className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-cover bg-center"
        aria-labelledby="founder-heading"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Founder
          </p>
          <h2
            id="founder-heading"
            className="mt-2 text-2xl font-bold text-white sm:text-3xl"
          >
            Ashish Johnson
          </h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted">
            Music has the power to transform lives and inspire greatness. At
            Johnson&apos;s Academy, we strive to nurture talent and share the
            joy of music with the world.
          </blockquote>
          <p className="mt-6 text-muted leading-relaxed">
            Ashish believes that &ldquo;music is the bridge between passion and
            expression,&rdquo; encouraging students to play, sing, and let their
            souls be heard. His practical, logical, and theoretical
            understanding of various subjects has enabled him to create courses
            that meet the diverse needs of students across different
            disciplines.
          </p>
        </div>
      </section>

      {/* Looking Ahead */}
      <section
        className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="future-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="future-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Looking Ahead
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            As part of our continued commitment to our students&apos; growth, we
            are soon launching a state-of-the-art, soundproof recital and
            jamming room, providing a professional space where students can
            practice, perform, and shine.
          </p>
          <p className="mt-6 text-lg text-white font-medium">
            Let us go forward in this battle fortified by conviction that those
            who labour in the service of a great and good cause will never fail.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-label="Call to action"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to start your journey?
          </h2>
          <p className="mt-4 text-muted">
            Explore our courses in music, dance, art, and karate. Book a free
            demo and discover your potential.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/30"
            >
              See Courses
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </CoursePageLayout>
  );
}
