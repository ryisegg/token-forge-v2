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
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  return (
    <section className='relative z-10 overflow-hidden px-6 py-24 text-white md:py-32'>
      <div
        aria-hidden
        className='absolute inset-x-0 top-0 -z-10 h-full opacity-60'
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(34,211,238,0.08) 45%, transparent)',
        }}
      />

      <AnimateInView
        className='tokens-forge-panel mx-auto max-w-2xl rounded-3xl px-6 py-12 text-center md:px-10'
        animation='scale-in'
      >
        <h2 className='text-2xl leading-tight font-bold tracking-normal md:text-4xl'>
          {t('Ready to use')}
          <br />
          <span className='bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent'>
            {t('Tokens Forge?')}
          </span>
        </h2>
        <p className='mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-300 md:text-base'>
          {t(
            'Create an account, choose a token package, and connect your apps through one gateway key.'
          )}
        </p>
        <div className='mt-8 flex items-center justify-center gap-3'>
          <Button
            className='group rounded-full bg-cyan-300 text-slate-950 hover:bg-cyan-200'
            render={<Link to='/sign-up' />}
          >
            {t('Create account')}
            <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
          </Button>
          <Button
            variant='outline'
            className='rounded-full border-white/10 bg-white/[0.04] text-slate-100 hover:border-cyan-300/40 hover:bg-white/[0.07]'
            render={<Link to='/pricing' />}
          >
            {t('View token packs')}
          </Button>
        </div>
      </AnimateInView>
    </section>
  )
}
