"use client";
import * as React from "react";
import { Notification } from "./components/Notification";

import Image from "next/image";
import Link from "next/link";

import PixelTrail from "./components/PixelTrail";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="max-w-[calc(100%-100px)] m-auto">
      <Navigation />
      <main className="min-h-[calc(100vh-90px)] flex items-stretch justify-center gap-[10px] pb-[10px]">
        <div className="grow max-w-[50%] rounded-sm flex flex-col justify-between py-[40px]">
          <h1 className="text-mainBlue text-5xl font-medium tracking-tighter leading-[120%]">
            <span className="text-secondaryBlue">Discover Bluehue:</span> A Creative Research Lab Exploring New Ideas from New York
            <span
              className="inner-image inline-flex items-center justify-center relative overflow-hidden w-[94px] h-[50px] rounded-sm transition-width duration-300 ease-in-out"
            >
              <svg width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="path-left" d="M31.9444 16.4996C31.9444 25.3208 24.7934 32.4718 15.9722 32.4718C7.15101 32.4718 0 25.3208 0 16.4996C0 7.67835 7.15101 0.527344 15.9722 0.527344C24.7934 0.527344 31.9444 7.67835 31.9444 16.4996Z" fill="#CDAFFF"/>
                <path className="path-right" d="M50 16.4996C50 25.3208 42.849 32.4718 34.0278 32.4718C25.2066 32.4718 18.0556 25.3208 18.0556 16.4996C18.0556 7.67835 25.2066 0.527344 34.0278 0.527344C42.849 0.527344 50 7.67835 50 16.4996Z" fill="#30017A"/>
              </svg>
            </span>
          </h1>

          <div className="text-mainBlue text-sm tracking-tight leading-[140%] font-medium">
            <div className="max-w-[450px] mb-[40px]">
              <p className="mb-2">
                Bluehue is an experimental research practice dedicated to exploring new ways of thinking and creating.
              </p>
              <p>
                <strong>Join us today and connect with like-minded individuals</strong> who are redefining the limits of
                knowledge and creativity.
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <Link href="https://joelbidal.com.ar/" target="_blank" className="button secondary">
                Request Access
              </Link>
              <Link href="https://joelbidal.com.ar/" target="_blank" className="button tertiary">
                Learn More about Bluehue
              </Link> 
            </div>
          </div>
        </div>

        <div className="grow max-w-[10%]"></div>

        <div className="relative grow max-w-[40%] max-h-[calc(100vh-100px)] bg-mainBlue rounded-sm overflow-hidden flex items-end justify-center py-[70px]">
          <div className="z-10">
            <Notification />
          </div>
          
          <Image src="/hero-image-2.jpg" alt="Hero Image" fill style={{ objectFit: "cover", objectPosition: "center top" }} />

          <PixelTrail pixelSize={10} delay={400} fadeDuration={0.5} pixelClassName="bg-white" />
        </div> 
      </main>
    </div>
  );
}
