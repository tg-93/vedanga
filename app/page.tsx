import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { SocialMediaFeed } from "@/components/social-media-feed"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-semibold text-gray-800">Vedanga Astrology</h1>
        <p className="text-lg text-gray-600 mt-2">by Acharya Meenakshi</p>
      </header>

      {/* Navigation */}
      <NavigationMenu className="max-w-screen-xl mx-auto justify-center mb-8">
        <NavigationMenuList className="space-x-8">
          {["Home", "Contact", "Book Online", "Blog", "About", "Services", "FAQ"].map((item) => (
            <NavigationMenuItem key={item}>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="text-gray-600 hover:text-gray-900">
                  {item}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 max-w-screen-xl mx-auto px-4 py-12">
        {/* Left Column */}
        <div className="bg-[#B08D57] text-white p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            Welcome to Vedanga Astrology
          </h2>
          <div className="space-y-4 text-center">
            <p>
              Welcome, I'm thrilled the stars have brought you here. I'm a successful Astrologer based in New Delhi - here to guide you through life's most complex and difficult matters. Whatever you're going through, I'm here to help you find your way forward.
            </p>
            <p>
              Despite being a Chartered Accountant, I was always drawn to spirituality and astrology. I studied Vedic Astrology, KP, Nadi Astrology, and Palmistry from Bharatiya Vidya Bhawan, under the able guidance of Shri KN Rao and Shri AV Sundaram, among others.
            </p>
            <p>
              Let me do the same for you as I have done for so many others since 2014. Contact me to schedule an appointment or phone call reading.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative min-h-[400px] md:min-h-[600px]">
          <Image
            src="/placeholder.svg"
            alt="Astrologer"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest Updates</h2>
        <SocialMediaFeed />
      </section>

      {/* Contact and Location Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <GoogleMap />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 p-6 rounded-lg">
              <div className="aspect-video bg-gray-200 rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-2">Service {item}</h3>
              <p className="text-gray-600">
                Description of the astrological service or testimonial content goes here.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

