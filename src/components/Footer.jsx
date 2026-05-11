import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-flora-green/0 pt-[20px] pb-[70px] px-4 sm:px-8 lg:px-[55px] text-white overflow-x-hidden">

      <div className="max-w-[1450px] mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-14 lg:gap-0">

          <div className="w-full lg:w-[34%]">

            <div className="flex items-center gap-3 mb-8">

              <img
                src={logo}
                alt="logo"
                className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] lg:w-[85px] lg:h-[85px] object-contain"
              />

              <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold tracking-tight">
                FloraVision.
              </h2>

            </div>

            <p className="text-[15px] sm:text-[16px] lg:text-[17.3px] leading-[1.55] text-gray-200 font-medium max-w-[360px]">
              "From lush indoor greens to vibrant outdoor blooms,
              our plants are crafted to thrive and elevate your living environment."
            </p>

            <div className="flex gap-10 sm:gap-14 mt-10 lg:mt-17 text-[16px] sm:text-[18px] font-semibold">
              <span>FB</span>
              <span>TW</span>
              <span>LI</span>
            </div>

          </div>

          <div className="w-full sm:w-[50%] lg:w-[18%]">

            <h3 className="text-[18px] font-semibold mb-8">
              Quick Link's
            </h3>

            <div className="flex flex-col gap-5 text-[15px] font-medium underline underline-offset-4">

              <a href="#">Home</a>

              <a href="#">Type's Of plant's</a>

              <a href="#">Contact</a>

              <a href="#">Privacy</a>

            </div>

          </div>

          <div className="w-full lg:w-[34%]">

            <h3 className="text-[18px] font-semibold mb-8">
              For Every Update.
            </h3>

            <div className="flex h-[48px] border border-white/40 rounded-[8px] overflow-hidden">

              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent px-5 text-[14px] outline-none text-white placeholder:text-gray-400"
              />

              <button className="bg-white text-black px-6 text-[13px] font-semibold tracking-wide">
                SUBSCRIBE
              </button>

            </div>

            <p className="mt-12 lg:mt-38 text-[15px] sm:text-[16px] lg:text-[18px] text-gray-200 font-medium">
              FloraVision © all right reserve
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}