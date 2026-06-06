import { Navbar }       from '@/components/ui/Navbar'
import { Footer }       from '@/components/ui/Footer'
import { Hero }         from '@/components/sections/Hero'
import { WhatItIs }     from '@/components/sections/WhatItIs'
import { StatsStrip }   from '@/components/sections/StatsStrip'
import { HowItWorks }   from '@/components/sections/HowItWorks'
import { InputModes }   from '@/components/sections/InputModes'
import { Scenarios }    from '@/components/sections/Scenarios'
import { WhatDidiDoes } from '@/components/sections/WhatDidiDoes'
import { AppScreens }   from '@/components/sections/AppScreens'
import { NoSwitching }  from '@/components/sections/NoSwitching'
import { TryIt }        from '@/components/sections/TryIt'
import { Testimonial }  from '@/components/sections/Testimonial'
import { Security }     from '@/components/sections/Security'
import { FinalCTA }     from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatItIs />
        <StatsStrip />
        <HowItWorks />
        <InputModes />
        <Scenarios />
        <WhatDidiDoes />
        <AppScreens />
        <NoSwitching />
        <TryIt />
        <Testimonial />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
