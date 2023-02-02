import React, { useState } from 'react'

import { useInterval } from 'react-use'

import classNames from '../lib/classNames';

export default function BigText({ slides }) {
  const [currentSlide, setSlide] = useState(0);

  const totalSlides = slides.length

  useInterval(() => {
    if (totalSlides - 1 === currentSlide) {
      setSlide(0)
    } else {
      setSlide(currentSlide + 1)
    }
  }, 2000)

  return (
    <div className='flex flex-col items-center text-6xl font-extrabold tracking-tight md:text-9xl'>
      <div className='flex flex-col items-center'>        
        {slides.map((text, index) => {
          return (
            <span key={text} className='relative block text-center'>
              <span
                className={classNames(
                  'absolute transition duration-1000',
                  currentSlide !== index ? 'opacity-100' : 'opacity-0'
                )}
                aria-hidden={true}
              >
                {text}
              </span>

              <span
                className={classNames(
                  'decoration-clone bg-clip-text text-transparent bg-gradient-to-r',
                  index === 0 ? 'from-yellow-400 via-red-500 to-pink-500' : '',
                  index === 1 ? 'from-purple-400 via-pink-500 to-red-500' : '',
                  index === 2 ? 'from-green-400 to-blue-500' : ''
                )}
              >
                {text}
              </span>
            </span>
          )
        })}
        <button className='mt-14 text-2xl tracking-normal sm:text-3xl border rounded-2xl py-2 px-5 border-gray-600 hover:bg-gray-600'>
          Explore AI 👈
        </button>
        <p className='mt-6 text-lg font-medium tracking-normal text-tertiary text-center'>
          Discovering the AI Future with Young Adults. 
        </p>
      </div>
    </div>
  )
}
