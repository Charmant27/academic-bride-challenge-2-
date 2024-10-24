import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import {
  ArrowRight01Icon,
  SquareLock02Icon,
  ArrowDown01Icon,
  Link04Icon,
  TextCenterlineMiddleIcon,
  GridViewIcon
} from 'hugeicons-react'

const Overview = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <section className="flex md:justify-between items-center gap-10 px-7 py-5">
          {/* first row */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <a href="/" className="text-gray-400 font-light text-base">Workspace</a>
              <div>
                <ArrowRight01Icon
                  size={18}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
              </div>
              <a href="/" className="text-gray-400 font-light text-base">Creative</a>
              <div>
                <ArrowRight01Icon
                  size={18}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
              </div>
              <a href="/" className="text-base font-bold">Creative Website</a>
            </div>
            <h1 className="capitalize font-bold text-3xl">website design</h1>
            <div className="flex items-center gap-5 pt-2">
              {/* first part */}
              <div className="flex items-center gap-2">
                <SquareLock02Icon
                  size={18}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
                <h2 className="font-semibold">Limited access</h2>
                <ArrowDown01Icon
                  size={20}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
              </div>
              {/* second part */}
              <div className="w-0.5 h-8 bg-gray-300"></div>
              {/* third part */}
              <div className="flex">
                <img
                  src="/images/profile.jpg"
                  alt="profile"
                  className="w-8 h-8 rounded-[50%] border border-gray-200 object-cover"
                />
                <img
                  src="/images/profile2.jpg"
                  alt="profile"
                  className="w-8 h-8 rounded-[50%] border border-gray-200 ml-[-10px] object-cover"
                />
                <img
                  src="/images/profile3.jpg"
                  alt="profile"
                  className="w-8 h-8 rounded-[50%] border border-gray-200 ml-[-10px]  object-cover"
                />
                <img src="/images/profile4.jpg"
                  alt="profile"
                  className="w-8 h-8 rounded-[50%] border border-gray-200 ml-[-10px]  object-cover"
                />
                <button
                  className="w-8 h-8 bg-slate-400 rounded-[50%] border border-gray-200 ml-[-10px]  text-sm text-white"
                >
                  +2
                </button>
              </div>
              {/* fourth part */}
              <button className="bg-[#635ac8] h-8 w-8 rounded-[50%] text-lg text-white">+</button>
            </div>
          </div>

          {/* second row */}
          <div className="flex flex-col gap-3 items-end">
            <h2 className="font-bold">From 23 April</h2>
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-2 h-2 rounded-[50%]"></div>
              <p className="text-gray-400 font-light">Updated 12 min ago</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-[#635ac8]">
                <Link04Icon
                  size={18}
                  variant={"stroke"}
                />
              </button>
              <div className="w-0.5 h-8 bg-gray-300"></div>
              <button className="bg-[#635ac8] text-white p-2 rounded-lg">
                <TextCenterlineMiddleIcon
                  size={18}
                  variant={"stroke"}
                />
              </button>
              <button>
                <GridViewIcon
                  size={18}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
              </button>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Overview