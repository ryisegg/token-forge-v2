/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import {
  Zap,
  Shield,
  Globe,
  Code,
  Gauge,
  DollarSign,
  Users,
  HeartHandshake,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'fast',
      num: '01',
      title: t('Token packages'),
      desc: t(
        'Sell model-specific prepaid packages for ChatGPT, Claude, and Gemini.'
      ),
      span: 'md:col-span-2',
      icon: <Zap className='size-4 text-cyan-300' />,
      visual: (
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Llama'].map(
            (name) => (
              <div
                key={name}
                className='flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-2 text-xs text-slate-300 transition-colors duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/5'
              >
                {name}
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'secure',
      num: '02',
      title: t('Gateway keys'),
      desc: t(
        'Issue API keys with quota controls and account-level access rules.'
      ),
      span: 'md:col-span-1',
      icon: <Shield className='size-4 text-emerald-400' />,
      visual: (
        <div className='mt-4 flex items-center justify-center'>
          <div className='relative'>
            <div className='flex size-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5'>
              <Shield
                className='size-7 text-emerald-500/70'
                strokeWidth={1.5}
              />
            </div>
            <div className='absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-emerald-500'>
              <svg
                className='size-2.5 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 12.75 6 6 9-13.5'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      num: '03',
      title: t('Model routing'),
      desc: t('Route traffic across configured upstream channels with fallback.'),
      span: 'md:col-span-1',
      icon: <Globe className='size-4 text-violet-400' />,
      visual: (
        <div className='mt-4 space-y-2'>
          {[t('Load Balancing'), t('Rate Limiting'), t('Cost Tracking')].map(
            (step, i) => (
              <div key={step} className='flex items-center gap-2'>
                <div
                  className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    i === 1
                      ? 'border border-cyan-300/30 bg-cyan-300/15 text-cyan-200'
                      : 'border border-white/10 bg-white/[0.045] text-slate-400'
                  }`}
                >
                  {i + 1}
                </div>
                <div className='h-px flex-1 bg-white/10' />
                <span className='text-xs text-slate-400'>{step}</span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'developer',
      num: '04',
      title: t('OpenAI compatible'),
      desc: t('Connect existing apps without rewriting their API integration.'),
      span: 'md:col-span-2',
      icon: <Code className='size-4 text-amber-400' />,
      visual: (
        <div className='mt-4 flex items-center gap-3'>
          <div className='flex -space-x-2'>
            {['API', 'SDK', 'CLI', 'Docs'].map((n) => (
              <div
                key={n}
                className='flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-[9px] font-bold text-slate-300'
              >
                {n}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-1.5 text-xs text-slate-400'>
            <Code className='size-3.5 text-cyan-300' />
            {t('One endpoint for common AI clients')}
          </div>
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Gauge className='size-5' strokeWidth={1.5} />,
      title: t('Usage ledger'),
      desc: t('Track requests, token burn, and remaining balance.'),
    },
    {
      icon: <DollarSign className='size-5' strokeWidth={1.5} />,
      title: t('Stripe-ready'),
      desc: t('Keep checkout and recharge flows ready for production billing.'),
    },
    {
      icon: <Users className='size-5' strokeWidth={1.5} />,
      title: t('User accounts'),
      desc: t('Manage signups, balances, keys, and access from the console.'),
    },
    {
      icon: <HeartHandshake className='size-5' strokeWidth={1.5} />,
      title: t('Operator control'),
      desc: t('Own the gateway, pricing, model list, and customer experience.'),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 text-white md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-lg'>
          <p className='mb-3 text-xs font-semibold tracking-normal text-cyan-300 uppercase'>
            {t('Core Features')}
          </p>
          <h2 className='text-2xl leading-tight font-bold tracking-normal md:text-3xl'>
            {t('Built for developers,')}
            <br />
            {t('designed for scale')}
          </h2>
        </AnimateInView>

        {/* Bento grid */}
        <div className='grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={`group bg-[#0d1018]/95 p-7 transition-colors duration-300 hover:bg-[#121722] md:p-8 ${f.span}`}
            >
              <div className='mb-3 flex items-center gap-3'>
                <span className='flex size-7 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-[10px] font-semibold text-cyan-200 tabular-nums'>
                  {f.num}
                </span>
                <h3 className='text-sm font-semibold'>{f.title}</h3>
              </div>
              <p className='text-sm leading-relaxed text-slate-400'>
                {f.desc}
              </p>
              {f.visual}
            </AnimateInView>
          ))}
        </div>

        {/* Additional features row */}
        <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 100}
              animation='fade-up'
              className='flex flex-col items-center text-center'
            >
              <div className='mb-3 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-cyan-200 transition-colors'>
                {f.icon}
              </div>
              <h3 className='mb-1.5 text-sm font-semibold'>{f.title}</h3>
              <p className='max-w-[200px] text-xs leading-relaxed text-slate-400'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
