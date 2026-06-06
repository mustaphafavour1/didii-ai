import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'
import { TypeItOut } from '@/components/TypeItOut'

const SCENARIOS = [
  {
    emoji: '👨‍👩‍👦',
    title: 'Send money home',
    before: 'Searching contacts, opening banking app, finding account number, entering amount, checking PIN...',
    userMsg: 'abeg send 30k to iya for first bank',
    didiiReply: 'Send ₦30,000 to Iya — First Bank 3012345678. I do am?',
    tag: 'Family',
  },
  {
    emoji: '⚡',
    title: 'Pay light bill quick',
    before: 'Hunting for the meter token number, USSD code not working, searching the EEDC website...',
    userMsg: 'top up my EKEDC meter with 5k',
    didiiReply: 'Recharge EKEDC meter 04123456789 — ₦5,000. Oya?',
    tag: 'Bills',
  },
  {
    emoji: '📷',
    title: 'Pay from a screenshot',
    before: 'Switching apps, retyping account numbers by hand, praying you don\'t make an error...',
    userMsg: '[Photo of bank details]',
    didiiReply: 'GTBank · Olu Adeyemi · 0123456789. Pay ₦8,500?',
    tag: 'Snap to pay',
  },
  {
    emoji: '📱',
    title: 'Data & airtime, done',
    before: 'USSD code, app navigation, selecting network, picking bundle, entering number...',
    userMsg: 'MTN 10gb data for 08034567890',
    didiiReply: 'Top up MTN 10GB for 080····7890 — ₦3,000. I do am?',
    tag: 'Data',
  },
  {
    emoji: '₿',
    title: 'Cash out your crypto',
    before: 'P2P marketplace, trust scores, exchange rates, escrow, waiting for release...',
    userMsg: 'cash out 50 USDT to my GTBank',
    didiiReply: '50 USDT → ₦79,500 at ₦1,590. GTBank 0123456789. Sharp sharp?',
    tag: 'Crypto',
  },
  {
    emoji: '📺',
    title: 'Subscriptions on lock',
    before: 'Forgetting decoder number, missed deadline, going a week without TV...',
    userMsg: 'renew DSTV and GOtv at once',
    didiiReply: 'DSTV ₦13,500 + GOtv ₦6,100 = ₦19,600 total. I do am?',
    tag: 'Entertainment',
  },
]

function ScenarioCard({ scenario, delay }: { scenario: typeof SCENARIOS[0], delay: number }) {
  return (
    <StaggerReveal delay={delay}>
      <div className="rounded-modal border border-white/8 bg-white/4 p-6 flex flex-col gap-5 h-full hover:bg-white/6 transition-colors duration-200 group">

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{scenario.emoji}</span>
            <div>
              <span className="text-muted text-[10px] font-semibold uppercase tracking-widest">{scenario.tag}</span>
              <h3 className="text-cream font-semibold text-base leading-tight">{scenario.title}</h3>
            </div>
          </div>
        </div>

        {/* Before */}
        <div className="rounded-xl bg-white/4 border border-white/8 p-3.5">
          <p className="text-muted text-[10px] font-semibold uppercase tracking-wider mb-1.5">Before didii</p>
          <p className="text-muted/70 text-xs leading-relaxed">{scenario.before}</p>
        </div>

        {/* With didii */}
        <div className="flex flex-col gap-2.5">
          <p className="text-indigo-300 text-[10px] font-semibold uppercase tracking-wider">With didii</p>

          {/* User bubble */}
          <div className="flex justify-end">
            <div className="bg-indigo/80 text-white text-xs rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[85%]">
              {scenario.userMsg}
            </div>
          </div>

          {/* didii reply with typing effect on scroll */}
          <div className="flex items-end gap-2">
            <div className="w-5 h-5 rounded-full bg-lilac/20 border border-lilac/30 flex items-center justify-center text-lilac text-[8px] font-bold font-display flex-shrink-0">d</div>
            <div className="glass rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-xs text-cream leading-snug max-w-[85%]">
              <TypeItOut
                text={scenario.didiiReply}
                delay={200}
                typoRate={0.025}
              />
            </div>
          </div>
        </div>
      </div>
    </StaggerReveal>
  )
}

export function Scenarios() {
  return (
    <section id="scenarios" className="bg-ink py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-14 max-w-2xl">
          <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            REAL LIFE
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-cream leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Every money moment, covered.
          </FunHeadline>
          <p className="text-muted text-base mt-4 leading-relaxed">
            From family transfers to crypto cash-outs. From market to abroad.
            Just say what you need — no wahala.
          </p>
        </StaggerReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCENARIOS.map((s, i) => (
            <ScenarioCard key={s.title} scenario={s} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
