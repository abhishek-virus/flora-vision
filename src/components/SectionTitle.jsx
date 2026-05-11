export default function SectionTitle(props){

  const { children } = props

  return (

    <div className="flex justify-center items-center">

      <div className="relative inline-block px-4 sm:px-6 lg:px-10 py-2">

        {/* left shape */}
        <span
          className="
            absolute
            left-1 sm:left-3 lg:left-7
            bottom-0
            w-7 sm:w-9 lg:w-12
            h-7 sm:h-9 lg:h-12
            border-l-[3px] sm:border-l-[4px]
            border-b-[3px] sm:border-b-[4px]
            border-[#7CFC00]/50
            rounded-bl-[12px] sm:rounded-bl-[18px]
          "
        />

        {/* right shape */}
        <span
          className="
            absolute
            right-1 sm:right-3 lg:right-7
            top-2
            w-7 sm:w-9 lg:w-12
            h-7 sm:h-9 lg:h-12
            border-r-[3px] sm:border-r-[4px]
            border-t-[3px] sm:border-t-[4px]
            border-[#7CFC00]/50
            rounded-tr-[12px] sm:rounded-tr-[18px]
          "
        />

        {/* title */}
        <h2
          className="
            text-white
            text-[28px] sm:text-[38px] lg:text-[46px]
            font-semibold
            tracking-tight
            leading-tight lg:leading-none
          "
        >
          {children}
        </h2>

      </div>

    </div>

  )

}