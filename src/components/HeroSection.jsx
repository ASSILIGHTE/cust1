import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { coupleData } from '../data/romanticData';
import { CuteMascots } from './CuteMascots';
import { Heart, Sparkles, Calendar, Camera } from 'lucide-react';
import { useSound } from '../context/SoundContext';

export const HeroSection = ({ onTriggerPetals }) => {
  const { playPopSound } = useSound();
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);

  // Countdown to Birthday at Midnight Tonight
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Target: Jam 12 Malam Ini (00:00:00 besok hari)
      const target = new Date();
      target.setHours(24, 0, 0, 0);

      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Subtle Sparkle Decor */}
      <div className="absolute top-20 left-10 text-3xl animate-float-slow opacity-80">🌸</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-float-medium opacity-80">🧸</div>
      <div className="absolute top-1/3 right-12 text-2xl animate-spin-slow opacity-60">✨</div>

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center z-10">

        {/* Main Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pink shadow-sm mb-4 border border-white"
        >
          <Sparkles className="w-4 h-4 text-cute-rose animate-spin-slow" />
          <span className="text-xs sm:text-sm font-bold text-cute-rose dark:text-pink-300 tracking-wide uppercase">
            A Special Digital Birthday Gift For Eileena 🎂
          </span>
          <Heart className="w-4 h-4 text-cute-rose fill-current animate-pulse" />
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script text-4xl sm:text-7xl font-bold text-cute-rose dark:text-pink-300 drop-shadow-sm mb-3"
        >
          Happy Birthday Eileena! 🎉🎂
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl text-gray-600 dark:text-pink-200 font-medium max-w-xl mb-8"
        >
          "Selamat bertambah usia untuk Eileena Eka Prastyaningrum! Semoga harimu penuh tawa, kebahagiaan, dan senyuman paling manis."
        </motion.p>

        {/* Center Polaroid / Scrapbook Frame with Parallax */}
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative group my-4 max-w-sm sm:max-w-md w-full"
        >
          {/* Scrapbook Decorative Tape */}
          <div className="tape-top-left" />
          <div className="tape-top-right" />

          {/* Polaroid Frame Card */}
          <div className="relative bg-white dark:bg-pink-950 p-4 sm:p-5 rounded-2xl shadow-cute-lg border-2 border-pink-100 dark:border-pink-900/50 transform transition-transform duration-500 group-hover:rotate-0 group-hover:scale-102">

            {/* Main Couple Photo */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-pink-100">
              <img
                src="/customer/1.jpeg"
                alt="Our Favorite Photo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Polaroid Bottom Handwriting Caption & Ribbon */}
            <div className="pt-4 pb-2 flex items-center justify-between px-2">
              <span className="font-body text-lg sm:text-xl text-cute-rose dark:text-pink-300 font-bold">
                Happy Birthday Eileena 🎀
              </span>
              <span className="text-xs bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-full font-semibold">
                Special Day 🍰
              </span>
            </div>

            {/* Sticker Badges Overlay */}
            <div className="absolute -bottom-4 -left-3 z-30 bg-white dark:bg-pink-900 px-3.5 py-1.5 rounded-full shadow-lg text-xs font-bold text-cute-rose dark:text-pink-200 border-2 border-white dark:border-pink-800 flex items-center gap-1 animate-bounce">
              <span>🎂</span> Birthday Star
            </div>

            <div className="absolute -top-4 -right-3 z-30 bg-white dark:bg-pink-900 px-3.5 py-1.5 rounded-full shadow-lg text-xs font-bold text-yellow-600 dark:text-yellow-300 border-2 border-white dark:border-pink-800 flex items-center gap-1">
              <span>✨</span> Favorite Person
            </div>
          </div>
        </motion.div>

        {/* Birthday Midnight Countdown Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 p-6 rounded-3xl glass-pink shadow-cute max-w-lg w-full border border-white/80 dark:border-pink-300/20"
        >
          <div className="flex items-center justify-center gap-2 text-cute-rose dark:text-pink-300 font-bold mb-3">
            <Calendar className="w-5 h-5 text-cute-rose" />
            <span className="font-body font-bold text-xl sm:text-2xl">🎂 Saatnya Membuka Babak Baru</span>
          </div>

          {timeLeft.isFinished ? (
            <div className="py-4 text-center">
              <span className="font-script text-3xl font-bold text-cute-rose dark:text-pink-300 animate-bounce block">
                🎉 SELAMAT ULANG TAHUN EILEENA! 🎂🎉
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="bg-white/80 dark:bg-pink-950/80 p-3 rounded-2xl shadow-sm border border-pink-100">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cute-rose dark:text-pink-300">
                  {timeLeft.days}
                </span>
                <span className="text-xs text-gray-500 dark:text-pink-200 font-medium">Hari</span>
              </div>

              <div className="bg-white/80 dark:bg-pink-950/80 p-3 rounded-2xl shadow-sm border border-pink-100">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cute-rose dark:text-pink-300">
                  {timeLeft.hours}
                </span>
                <span className="text-xs text-gray-500 dark:text-pink-200 font-medium">Jam</span>
              </div>

              <div className="bg-white/80 dark:bg-pink-950/80 p-3 rounded-2xl shadow-sm border border-pink-100">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cute-rose dark:text-pink-300">
                  {timeLeft.minutes}
                </span>
                <span className="text-xs text-gray-500 dark:text-pink-200 font-medium">Menit</span>
              </div>

              <div className="bg-white/80 dark:bg-pink-950/80 p-3 rounded-2xl shadow-sm border border-pink-100">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cute-rose dark:text-pink-300 animate-pulse">
                  {timeLeft.seconds}
                </span>
                <span className="text-xs text-gray-500 dark:text-pink-200 font-medium">Detik</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Cute Mascot Interaction Bar */}
        <div className="mt-6">
          <p className="text-xs font-semibold text-gray-500 dark:text-pink-300 mb-2 uppercase tracking-wider">
            Klik elemen lucu di bawah ini! 💗
          </p>
          <CuteMascots onFlowerShower={onTriggerPetals} />
        </div>

      </div>
    </section>
  );
};
