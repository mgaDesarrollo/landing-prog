import Hero from "@/components/hero"
import AboutUs from "@/components/about-me"
import Services from "@/components/services"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
    </main>
  )
}
