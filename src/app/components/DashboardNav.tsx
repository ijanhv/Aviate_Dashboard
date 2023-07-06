import { Link } from 'lucide-react'
import React from 'react'

const DashboardNav = () => {
  return (
    <nav className="py-4 shadow-sm bg-[#22506C] h-[1439.25px] w-full">
      <div className="container flex items-center justify-between space-x-5">
        <Link href="/">
          <h1 className="font-poppins text-lg text-secondary-600">
            <span className="text-primary-600 font-[800] text-[36px] font-noto text-[#116EFF]">
              JobsPortal
            </span>
          </h1>
        </Link>

        <div className="flex text-[20px] text-[#338573] items-center space-x-7 text-center text-secondary-600 font-noto ">
          <Link href="/login">Login</Link>

          <button className="bg-[#136EF7] text-white text-[24px] rounded-[10px]  px-4 py-2 w-[187px] h-[72px] font-noto">
            Post a Job
          </button>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNav