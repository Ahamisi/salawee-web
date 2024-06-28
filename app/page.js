"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';

import { NextSeo } from 'next-seo';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDarkScheme);
    document.documentElement.classList.toggle('dark', prefersDarkScheme);
    setLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex flex-col items-center`}>
      <Head>
        <title>Salawee - Salary Management and Financial Intelligence for Everyone</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Salawee",
        "url": "https://www.salawee.com",
        "logo": "https://www.salawee.com/logo.svg",
        "sameAs": [
          "https://www.facebook.com/mysalawee",
          "https://www.twitter.com/mysalawee",
          "https://www.linkedin.com/company/mysalawee"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2348080957681",
          "contactType": "Customer Service",
          "areaServed": "Worldwide",
          "availableLanguage": "English"
        }
      })
    }}
  />
      </Head>
      <NextSeo
        title="Salawee - Salary Management and Financial Intelligence for Everyone"
        description="Salawee’s innovative AI-powered system automates salary disbursement, provides personalized spending tips, and offers intelligent financial planning. Easily manage your finances and achieve greater financial stability with Salawee."
        openGraph={{
          url: 'https://www.salawee.com',
          title: 'Salawee - Salary Management and Financial Intelligence for Everyone',
          description: 'Salawee’s innovative AI-powered system automates salary disbursement, provides personalized spending tips, and offers intelligent financial planning.',
          images: [
            {
              url: 'https://www.salawee.com/logo.svg',
              width: 800,
              height: 600,
              alt: 'Salawee Logo',
            },
          ],
          site_name: 'Salawee',
        }}
      />
      <header className="flex flex-wrap justify-between items-center w-full p-4 md:p-6">
        <div className="text-2xl md:text-3xl font-bold">
          <div className="h-[80px] lg:h-[100px] xl:h-[150px]">
            {darkMode ? <img src="/logo-dark.svg" alt="Salawee" className="h-full" /> : <img src="/logo-light.svg" alt="Salawee" className="h-full" />}
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4  md:mt-0">
          <button onClick={toggleDarkMode} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300">
            {darkMode ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              
            : 
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            }
          </button>
          <span className="hidden md:inline">contact@salawee.com</span>
          <button className="bg-black text-white py-2 px-3 md:px-4 rounded hover:bg-gray-800">Sign In</button>
        </div>
      </header>
      <main className="text-center mt-8 md:mt-16 flex-1 flex flex-col items-center px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
        AI-Powered Salary Management <br/> and Intelligent Financial Planning
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-4 lg:w-[70%]">
         With Salawee, your employees can easily manage their finances, optimize their budgets, and achieve enhanced financial stability.
        </p>
        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* <button className="bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-full flex items-center space-x-2 hover:bg-gray-800" data-tf-popup="01J0QMNVXNAJM9DXD86DPT2R35">
            <span>Join Waitlist</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z" clipRule="evenodd" />
            </svg>
          </button> */}
          <div data-tf-live="01J0QMNVXNAJM9DXD86DPT2R35"></div>
         

          {/* <button className="bg-brightYellow text-black py-2 px-4 md:py-3 md:px-6 rounded-full flex items-center space-x-2 hover:bg-yellow-400">
            <span>Contact Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z" clipRule="evenodd" />
            </svg>
          </button> */}
        </div>
      </main>
      <div className="relative w-full h-64 flex justify-center items-end mb-16 px-4">
        <div className="badges-container relative w-full h-full">
          <div className={`flex justify-center mt-4 ${loaded ? 'animate-drop-4' : 'opacity-0'}`}>
            <Badge text="Chinwe got paid ₦500k" bgColor="bg-black" textColor="text-white " rotate="-10deg" />
          </div>
          <div className={`flex justify-center space-x-1 md:space-x-2 lg:space-x-4 mt-4 ${loaded ? 'animate-drop-3' : 'opacity-0'}`}>
            <Badge text="Mwangi got paid 30KES" bgColor="bg-black" textColor="text-white " rotate="15deg" />
            <Badge text="Ade got paid ₦150k" bgColor="bg-lightGrayish" textColor="text-black " rotate="-5deg" />
          </div>
          <div className={`flex justify-center space-x-1 md:space-x-2 lg:space-x-4 mt-4 ${loaded ? 'animate-drop-2' : 'opacity-0'}`}>
            <Badge text="Ngozi got paid ₦300k" bgColor="bg-black" textColor="text-white " rotate="10deg" />
            <Badge text="Abena got paid  GH₵4654" bgColor="bg-brightYellow" textColor="text-black " rotate="-15deg" />
            <Badge text="Amaka got paid ₦450k" bgColor="bg-oliveGreen" textColor="text-white " rotate="15deg" />
          </div>
          <div className={`flex justify-center space-x-1 md:space-x-2 lg:space-x-4 mt-4  ${loaded ? 'animate-drop-1' : 'opacity-0'}`}>
            <Badge text="Thabo got paid ZAR 550k" bgColor="bg-brightYellow" textColor="text-black " rotate="-10deg" />
            <Badge text="Seyi got paid ₦250k" bgColor="bg-oliveGreen" textColor="text-white " rotate="15deg" />
            <Badge text="Kwame got paid  GH₵5000" bgColor="bg-black" textColor="text-white " rotate="-5deg" />
            <Badge text="Femi got paid ₦350k" bgColor="bg-lightGrayish" textColor="hidden md:flex text-black " rotate="10deg" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Badge = ({ text, bgColor, textColor, rotate }) => {
  return (
    <div className={`badge ${bgColor} ${textColor} py-1 px-2 md:py-2 md:px-3 lg:py-2 lg:px-4 my-2 rounded-lg shadow-lg opacity-0 text-[12px] md:text-[18px] lg:text[20px]`} style={{ transform: `rotate(${rotate})` }}>
      {text}
    </div>
  );
};

