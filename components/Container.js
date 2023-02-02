import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'

import Footer from './Footer'
import cn from '../lib/classNames'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props) {
  const [mounted, setMounted] = useState(false)

  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'Template name',
    description: 'Template description',
    image:
      'https://cdn.discordapp.com/attachments/797485737272541250/893912493255176192/UnicornVectorGradient_7.png',
    type: 'website',
    ...customMeta,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://template.cretu.dev/${router.asPath}`}
          />
          <link
            rel='canonical'
            href={`https://template.cretu.dev/${router.asPath}`}
          />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='Cristian Crețu' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@dun_yan_' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          <title>VoyagerAI</title>
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        <nav className='sticky w-full bg-gray-100/40 z-[1] filter-blur dark:bg-gray-1000/40 top-2 md:top-4 max-w-2xl px-4 py-2 rounded-md mx-auto flex justify-between items-center'>
          <div className='flex justify-between gap-4'>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/' legacyBehavior>
                <a className='transition-all cursor-pointer hover:text-primary'>
                  Home
                </a>
              </Link>
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/' legacyBehavior>
                <a className='transition-all cursor-pointer hover:text-primary'>
                  About
                </a>
              </Link>
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/' legacyBehavior>
                <a className='transition-all cursor-pointer hover:text-primary'>
                  Support Us
                </a>
              </Link>
            </div>
          </div>          
          <div className='flex flex-row items-center space-x-4'>
            {/*Empty container*/}
          </div>
        </nav>
        
        <div className="flex flex-col h-screen">
        <main
          className={cn(
            'px-4 mt-12',
            'max-w-2xl',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-200 dark:divide-gray-900',
            'rounded-lg' , 'flex-grow'
          )}
        >
          <div>{children}</div>
          <footer className='mt-40'>
            <Footer />
          </footer>
        </main>
        </div>
      </div>
    </>
  )
}
