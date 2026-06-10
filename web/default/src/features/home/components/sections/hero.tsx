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
import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Boxes, CreditCard, KeyRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useStatus } from '@/hooks/use-status'
import { Button } from '@/components/ui/button'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

const TRUST_ITEMS = [
  { icon: Boxes, label: 'Model token packs' },
  { icon: KeyRound, label: 'API keys' },
  { icon: CreditCard, label: 'Checkout-ready' },
] as const

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const docsUrl =
    (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  const renderDocsButton = () => {
    const isExternal = docsUrl.startsWith('http')
    if (isExternal) {
      return (
        <Button
          variant='outline'
          className='group inline-flex h-11 items-center gap-1.5 rounded-full border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-slate-100 hover:border-cyan-300/40 hover:bg-white/[0.07]'
          render={
            <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
          }
        >
          <BookOpen className='size-4 text-cyan-200 transition-colors duration-200 group-hover:text-cyan-100' />
          <span>{t('Docs')}</span>
        </Button>
      )
    }
    return (
      <Button
        variant='outline'
        className='group inline-flex h-11 items-center gap-1.5 rounded-full border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-slate-100 hover:border-cyan-300/40 hover:bg-white/[0.07]'
        render={<Link to={docsUrl} />}
      >
        <BookOpen className='size-4 text-cyan-200 transition-colors duration-200 group-hover:text-cyan-100' />
        <span>{t('Docs')}</span>
      </Button>
    )
  }

  return (
    <section className='relative z-10 overflow-hidden px-6 pt-24 pb-16 text-white md:pt-32 md:pb-24 lg:pt-36 lg:pb-28'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] opacity-80'
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.06), transparent 72%)',
        }}
      />
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_68%_52%_at_50%_30%,black_25%,transparent_100%)] bg-[size:3rem_3rem] opacity-60'
      />

      <div className='mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8'>
        {/* Left Column: Title, description, action buttons and application support */}
        <div className='flex flex-col items-start text-left lg:col-span-6'>
          {/* Top Pill Badge */}
          <div
            className='landing-animate-fade-up tokens-forge-chip mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium text-cyan-100 opacity-0'
            style={{ animationDelay: '0ms' }}
          >
            <span className='relative flex size-1.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75' />
              <span className='relative inline-flex size-1.5 rounded-full bg-teal-500 dark:bg-teal-300' />
            </span>
            <span>{t('Official model access, routed through one account')}</span>
          </div>

          <h1
            className='landing-animate-fade-up text-4xl leading-[1.15] font-bold tracking-normal sm:text-5xl lg:text-[3.25rem]'
            style={{ animationDelay: '60ms' }}
          >
            {t('Forge token packages for')}
            <br />
            <span className='bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent'>
              {t('ChatGPT, Claude, and Gemini')}
            </span>
          </h1>
          <p
            className='landing-animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-slate-300 opacity-0 md:text-[15px]'
            style={{ animationDelay: '120ms' }}
          >
            {t(
              'Tokens Forge combines model access, prepaid token packages, routing controls, and usage visibility in one OpenAI-compatible gateway.'
            )}
          </p>

          <div
            className='landing-animate-fade-up mt-8 flex flex-wrap items-center gap-3 opacity-0'
            style={{ animationDelay: '180ms' }}
          >
            {props.isAuthenticated ? (
              <>
                <Button
                  className='group h-11 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-200'
                  render={<Link to='/dashboard' />}
                >
                  {t('Go to Dashboard')}
                  <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
                </Button>
                {renderDocsButton()}
              </>
            ) : (
              <>
                <Button
                  className='group h-11 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-200'
                  render={<Link to='/sign-up' />}
                >
                  {t('Create account')}
                  <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
                </Button>
                <Button
                  variant='outline'
                  className='h-11 rounded-full border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-slate-100 hover:border-cyan-300/40 hover:bg-white/[0.07]'
                  render={<Link to='/pricing' />}
                >
                  {t('View token packs')}
                </Button>
                {renderDocsButton()}
              </>
            )}
          </div>

          <div
            className='landing-animate-fade-up mt-10 w-full max-w-xl opacity-0'
            style={{ animationDelay: '240ms' }}
          >
            <div className='mb-4 flex flex-col gap-1'>
              <span className='text-[10px] font-bold tracking-normal text-cyan-200/70 uppercase'>
                {t('Built for repeat usage')}
              </span>
              <p className='text-xs leading-relaxed text-slate-400'>
                {t(
                  'Buy a package, generate a key, and route requests through the models your workflow depends on.'
                )}
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className='tokens-forge-chip group flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/35'
                  >
                    <Icon className='size-4 text-teal-500 dark:text-teal-300' />
                    <span>{t(item.label)}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div
          className='landing-animate-fade-up flex w-full justify-center opacity-0 lg:col-span-6'
          style={{ animationDelay: '320ms' }}
        >
          <div className='relative mt-8 flex w-full max-w-xl items-center justify-center lg:mt-0'>
            <div className='tokens-forge-panel relative w-full overflow-hidden rounded-3xl p-6 md:p-8'>
              <div className='-mx-6 -mt-6 mb-6 flex items-center justify-between border-b border-white/10 px-6 py-4 md:-mx-8 md:-mt-8 md:px-8'>
                <div>
                  <p className='text-sm font-semibold text-white'>
                    {t('Tokens Forge Route')}
                  </p>
                  <p className='mt-1 text-xs text-slate-400'>
                    {t('Package balance and model routing preview')}
                  </p>
                </div>
                <span className='rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300'>
                  {t('Live')}
                </span>
              </div>
              <img
                src='/token-forge-hero.png'
                alt=''
                className='mx-auto h-auto w-[min(20rem,80vw)] object-contain'
              />
              <div className='mt-6 grid gap-3 sm:grid-cols-3'>
                {['GPT', 'Claude', 'Gemini'].map((label) => (
                  <div
                    key={label}
                    className='rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-2 text-center text-xs font-medium text-slate-200'
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
