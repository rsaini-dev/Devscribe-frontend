import { useState, useEffect } from 'react'
import { quotes } from './quotesData'
import { motion, AnimatePresence } from 'framer-motion'
import ShinyText from './ShinyText'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import carousel1 from '../assets/images/carousel1.webp'
import carousel2 from '../assets/images/carousel2.webp'
import carousel3 from '../assets/images/carousel3.webp'
import carousel4 from '../assets/images/carousel5.webp'

const slides = [carousel1, carousel2, carousel3, carousel4]

const HeroSection = () => {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentQuote = quotes[quoteIndex]

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay: Quotes + Title */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <ShinyText
          text="Welcome to DevScribe!"
          disabled={false}
          speed={3}
          className="text-3xl md:text-4xl font-bold mb-4"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl"
          >
            <p className="italic text-xl">“{currentQuote.text}”</p>
            <p className="mt-2 text-sm text-gray-300">— {currentQuote.author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HeroSection
