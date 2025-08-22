"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's md breakpoint
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <main className="max-h-screen bg-darkBg text-white flex flex-col relative">
      {!isMobile ? (
        <div className="flex justify-center items-center py-2.5 h-11.5 bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] headerTitleDesktop">
          <span className="text-[#00E7F9] headerSpanDesktop">
            🚀 FRESH BEGINNINGS SALE:{" "}
          </span>{" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </div>
      ) : (
        <div className="p-5 h-19 bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] headerTitle text-[#00E7F9]">
          🚀 FRESH BEGINNINGS SALE:{" "}
          <span className="headerSpan text-white">
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>
      )}

      {!isMobile && (
        <header className="flex justify-between items-center h-18.5 px-[211px] mt-[18px] z-10">
          <div className="mt-[35px]">
            <Image
              src="/Logo.svg"
              alt="Fametonic App"
              width={173.12}
              height={74}
            />
          </div>
          <nav className="flex gap-10 menuDesktop text-[#A9A9A9]">
            <a href="#">About us</a>
            <a href="#">Contact</a>
          </nav>
        </header>
      )}
      <section className="flex flex-col-reverse lg:flex-row items-center px-5 lg:px-[215px] relative">
        {!isMobile && (
          <div className="z-10 flex flex-col gap-7.5 mt-[74px]">
            <div className="flex flex-col gap-4 w-[516px]">
              <div>
                <div className="heroBannerTitleDesktop">
                  Want to Turn Social Media Into a Profitable Career?
                </div>
                <div className="heroBannerTitleDesktop text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E]">
                  Discover your way to success with Fametonic:
                </div>
              </div>
              <div className="w-full flex flex-col gap-[13px]">
                <div className="heroBannerItemDesktop flex gap-2.5">
                  <p className="flex items-center">✨</p>
                  <p>
                    Start growing your influence right away—no waiting required!
                  </p>
                </div>
                <div className="heroBannerItemDesktop flex gap-2.5">
                  <p className="flex items-center">✨</p>
                  <p>
                    Create viral TikToks and Reels step by step with
                    easy-to-follow lessons
                  </p>
                </div>
                <div className="heroBannerItemDesktop flex gap-2.5">
                  <p className="flex items-center">✨</p>
                  <p>Use a Personal AI Worker to boost your content</p>
                </div>
                <div className="heroBannerItemDesktop flex gap-2.5">
                  <p className="flex items-center">✨</p>
                  <p>
                    Learn from expert-led courses designed for aspiring
                    influencers
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2.5 w-[313px]">
              <button className="flex justify-center items-center gap-2.5 bg-[#FC004E] shadow-[2px_2px_10px_#00E7F9] h-10 rounded-[10px]">
                <p className="getStartedButtonTextDesktop">GET STARTED </p>
                <img
                  src="/right_arrow.svg"
                  alt="Fametonic App"
                  width={11}
                  height={6}
                  className=""
                />
              </button>
              <div className="flex justify-center">
                <p className="getStartedButtonHelperTextDesktop">
                  1-minute quiz for personalized insights
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="tncTextDesktop">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p className="copyRightTextDesktop">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        )}
        {isMobile && (
          <div className="z-10 w-full flex flex-col items-center -mt-20 gap-5.5 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.7)] via-[84.86%] to-[rgba(0,0,0,0)]">
            <div className="w-[350px]">
              <div className="heroTitle">
                Want to Turn Social Media Into a Profitable Career?
              </div>
              <div className="heroTitle text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E]">
                Discover your way to success with Fametonic:
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-2.5">
              <div className="heroItem flex gap-2.5">
                <p className="flex items-center">✨</p>{" "}
                <p>
                  Start growing your influence right away—no waiting required
                </p>
              </div>
              <div className="heroItem flex gap-2.5">
                <p className="flex items-center">✨</p>{" "}
                <p>
                  Create viral TikToks and Reels step-by-step with
                  easy-to-follow lessons
                </p>
              </div>
              <div className="heroItem flex gap-2.5">
                <p className="flex items-center">✨</p>{" "}
                <p>Use a Personal AI Worker to boost your content</p>
              </div>
              <div className="heroItem flex gap-2.5">
                <p className="flex items-center">✨</p>{" "}
                <p>Learn from expert-led courses designed for aspiring influencers</p>
              </div>
            </div>
            <div className="w-full flex justify-center text-[#ABABAB]">
              <div className="w-[281px] flex flex-col items-center justify-center gap-[19px]">
                <p className="privacyPolicy">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="copyRightText">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2.5 w-full pt-3 pb-10">
              <button className="flex justify-center items-center gap-2.5 bg-[#FC004E] shadow-[2px_2px_10px_#00E7F9] h-10 rounded-[10px] py-2">
                <p className="getStartedButtonText">GET STARTED </p>
                <img
                  src="/right_arrow.svg"
                  alt="Fametonic App"
                  // width={11}
                  // height={6}
                  // className=""
                />
              </button>
              <div className="flex justify-center">
                <p className="buttonHelperText">
                  1-minute quiz for personalized insights
                </p>
              </div>
            </div>
          </div>
        )}
        {!isMobile && (
          <div
            className={`absolute right-[101px] -top-[17px] flex justify-center w-[666px] h-[679px] `}
          >
            <img
              src="/landing_page_banner_image.png"
              alt="Fametonic App"
              width={666}
              height={679}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {isMobile && (
          <div
            className={`flex justify-center w-full !overflow-hidden -z-10 -mt-4 relative px-5`}
          >
            <img src="/landing_page_banner_image.png" alt="Fametonic App" />
            <header className="absolute flex justify-center items-center w-full pt-8">
              <div className="flex justify-between items-center">
                <div className="">
                  <Image
                    src="/Logo.svg"
                    alt="Fametonic App"
                    width={107.78369140625}
                    height={46.07194900512695}
                  />
                </div>
                <div className="absolute right-2">
                  <Image
                    src="/Menu_Icon.svg"
                    alt="Fametonic App"
                    width={20}
                    height={12}
                  />
                </div>
              </div>
            </header>
          </div>
        )}
      </section>
    </main>
  );
}
