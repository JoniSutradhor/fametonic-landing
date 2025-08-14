import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-screen bg-darkBg text-white flex flex-col">
      <div className="flex justify-center items-center py-2.5 h-11.5 bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] font-figtree font-semibold text-[22px] leading-[100%] tracking-[0] align-middle">
        <span className="text-[#00E7F9] font-figtree font-extrabold text-[22px] leading-[100%] tracking-[0] align-middle">
          🚀 FRESH BEGINNINGS SALE:{" "}
        </span>{" "}
        Extra 25% OFF, Limited Spots - start your journey today!
      </div>

      <header className="flex justify-between items-center h-18.5 px-[211px]">
        <div className="mt-[35px]">
          <Image
            src="/Logo.svg"
            alt="Fametonic App"
            width={173.12}
            height={74}
          />
        </div>
        <nav className="hidden md:flex gap-10 font-figtree font-semibold text-[18px] leading-[100%] tracking-[0] text-center align-middle text-[#A9A9A9]">
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="flex flex-col lg:flex-row items-center px-6 lg:px-[215px] relative">
        <div className="z-10 lg:absolute flex flex-col gap-7.5">
          <div className="flex flex-col gap-4 w-[516px]">
            <div>
              <div className="font-urbanist font-bold text-[35px] leading-[100%] tracking-[0] align-middle">
                Want to Turn Social Media Into a Profitable Career?
              </div>
              <div className="font-urbanist font-bold text-[35px] leading-[100%] tracking-[0] align-middle text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E]">
                Discover your way to success with Fametonic:
              </div>
            </div>

            <div className="">
              <p className="font-figtree font-semibold text-[16px] leading-[22px] tracking-[0] align-middle">
                ✨ Start growing your influence right away—no waiting required
              </p>
              <p className="font-figtree font-semibold text-[16px] leading-[22px] tracking-[0] align-middle">
                ✨ Create viral TikToks and Reels step-by-step with
                easy-to-follow lessons
              </p>
              <p className="font-figtree font-semibold text-[16px] leading-[22px] tracking-[0] align-middle">
                ✨ Use a Personal AI Worker to boost your content
              </p>
              <p className="font-figtree font-semibold text-[16px] leading-[22px] tracking-[0] align-middle">
                ✨ Learn from expert-led courses designed for aspiring
                influencers
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-2.5 w-[313px]">
            <button className="flex justify-center items-center gap-2.5 bg-[#FC004E] shadow-[2px_2px_10px_#00E7F9] h-10 rounded-[10px] py-2">
              <p className=" font-figtree font-bold text-[20px] leading-[100%] tracking-[0] align-middle ">
                GET STARTED{" "}
              </p>
              <Image
                src="/right_arrow.svg"
                alt="Fametonic App"
                width={11}
                height={6}
                className=""
              />
            </button>
            <div className="flex justify-center">
              <p className="font-figtree font-normal text-[12px] leading-[16px] tracking-[0] text-center align-middle">
                1-minute quiz for personalized insights
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-figtree font-medium text-[12px] leading-[100%] tracking-[0] align-middle">
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p className="font-figtree font-medium text-[10px] leading-[100%] tracking-[0] align-middle">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:ml-[496px] w-[666px] lg:-mt-2 h-[610px] !overflow-hidden -z-10">
          <Image
            src="/landing_page_banner_image.png"
            alt="Fametonic App"
            width={666}
            height={479}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
