import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Intro from '@/sections/Intro'
import Projects from '@/sections/Projects'
import Testimonials from '@/sections/Testimonials'
import ContactMe from '@/sections/ContactMe'
import Footer from "@/sections/Footer";
import GitHubStats from '@/sections/GitHubStats'; 
import FAQs from '@/sections/FAQs'

import AppWrapper from '@/sections/AppWrapper' // ✅ make sure path is correct

export default function Home() {
  return (
    <AppWrapper>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <GitHubStats />
      <Testimonials />
      <FAQs />
      <ContactMe />
      <Footer />
    </AppWrapper>
  )
}
