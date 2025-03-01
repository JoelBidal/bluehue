"use client";
import * as React from "react";
import Navigation from "./components/Navigation";
import HeroContent from "./components/HeroContent";
import HeroNotificationArea from "./components/HeroNotificationArea";

export default function Home() {
  return (
    <div className="max-w-[calc(100%-5%)] 2xl:max-w-[1440px] m-auto">
      <Navigation />
      <main className="min-h-[calc(100vh-90px)] flex flex-wrap items-stretch justify-center gap-[10px] pb-[10px] 2xl:flex-nowrap">
        <HeroContent />
        <div className="grow max-w-[100%] hidden md:block md:max-w-[10%]"></div>
        <HeroNotificationArea />
      </main>
    </div>
  );
}
