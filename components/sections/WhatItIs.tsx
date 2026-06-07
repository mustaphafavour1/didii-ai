import Image from 'next/image'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

export function WhatItIs() {
  return (
    <section id="what-it-is" className="bg-cream py-24 sm:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header — centered */}
        <StaggerReveal className="mb-14 text-center">
          <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            ONE APP · TWO WAYS IN
          </p>
          <h2
            className="font-display font-black text-ink leading-tight tracking-tight mx-auto max-w-xl"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.6rem)' }}
          >
            <FunHeadline as="span">An App and Right inside</FunHeadline>
            <br />
            <FunHeadline as="span">your browser too</FunHeadline>
          </h2>
        </StaggerReveal>

        {/* Two cards — narrower containers */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* App card — dark bg */}
          <StaggerReveal delay={0.08}>
            <div className="flex flex-col">
              <div
                className="relative rounded-2xl bg-ink overflow-hidden flex flex-col items-center justify-center p-6 gap-5"
                style={{
                  minHeight: '320px',
                  boxShadow: '0 2px 8px rgba(15,17,8,0.15), 0 8px 32px rgba(15,17,8,0.2)',
                }}
              >
                {/* Subtle yellow tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(255,184,0,0.12), transparent 65%)' }}
                />

                {/* App mockup — phone frame */}
                <div className="relative z-10">
                  <div
                    className="relative rounded-[22px] border border-white/12 overflow-hidden mx-auto"
                    style={{
                      width: 110,
                      aspectRatio: '9/19.5',
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 16px 40px rgba(0,0,0,0.5), 0 0 40px rgba(255,184,0,0.1)',
                    }}
                  >
                    <Image
                      src="/app/whatitis-app.png"
                      alt="didii app screen"
                      fill
                      className="object-cover"
                      sizes="110px"
                    />
                  </div>
                </div>

                <p className="relative z-10 text-cream/55 text-sm text-center">The app</p>
              </div>

              <p className="mt-3 text-ink/40 text-xs leading-relaxed px-1">
                ¹ Your whole money life in one chat — send, save, pay bills, and cash out crypto.
              </p>
            </div>
          </StaggerReveal>

          {/* Browser widget card — light bg */}
          <StaggerReveal delay={0.16}>
            <div className="flex flex-col">
              <div
                className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 gap-5"
                style={{
                  minHeight: '320px',
                  background: '#E8E4D9',
                  boxShadow: '0 2px 8px rgba(15,17,8,0.06), 0 8px 32px rgba(15,17,8,0.06)',
                }}
              >
                {/* Subtle tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 30% 80%, rgba(226,97,60,0.08), transparent 60%)' }}
                />

                {/* Browser mockup */}
                <div className="relative z-10 w-full max-w-[240px]">
                  <div className="rounded-xl border border-ink/12 bg-white overflow-hidden shadow-md">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-ink/5 border-b border-ink/8">
                      {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c) => (
                        <span key={c} className={`w-2 h-2 rounded-full ${c}`} />
                      ))}
                      <div className="ml-2 flex-1 bg-ink/8 rounded-full h-4 flex items-center px-2">
                        <span className="text-ink/30 text-[8px] truncate">mybank.ng/transfer</span>
                      </div>
                    </div>
                    {/* Page body */}
                    <div className="p-3 relative" style={{ minHeight: 110 }}>
                      <div className="h-3 w-24 bg-ink/8 rounded mb-2" />
                      <div className="h-2.5 w-full bg-ink/5 rounded mb-1.5" />
                      <div className="h-2.5 w-3/4 bg-ink/5 rounded mb-1.5" />
                      <div className="h-2.5 w-1/2 bg-ink/5 rounded mb-3" />
                      <div className="h-7 w-20 bg-ink/8 rounded-lg" />

                      {/* didii widget overlay */}
                      <div
                        className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-ink rounded-xl px-2.5 py-1.5 shadow-xl"
                        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}
                      >
                        <div className="w-4 h-4 rounded-md bg-yellow-500 flex items-center justify-center flex-shrink-0">
                          <span className="font-display font-bold text-yellow-dark text-[9px]">d</span>
                        </div>
                        <span className="text-cream text-[9px] font-medium whitespace-nowrap">Pay with didii ↗</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="relative z-10 text-ink/50 text-sm text-center">The browser widget</p>
              </div>

              <p className="mt-3 text-ink/40 text-xs leading-relaxed px-1">
                ² Summon didii on any website. Paying a bill, at checkout, copying account numbers — tap, talk, done.
              </p>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
