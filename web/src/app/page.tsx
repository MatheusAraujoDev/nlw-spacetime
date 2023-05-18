import { Copyright } from 'src/components/Copyright'
import EmptyMemories from 'src/components/EmptyMemories'
import { Hero } from 'src/components/Hero'
import { SignIn } from 'src/components/SignIn'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2  h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <SignIn />
        <Hero />
        <Copyright />
      </div>

      <EmptyMemories />
    </main>
  )
}
