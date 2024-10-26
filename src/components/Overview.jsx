import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import {
  ArrowRight01Icon,
  SquareLock02Icon,
  ArrowDown01Icon,
  Link04Icon,
  TextCenterlineMiddleIcon,
  GridViewIcon,
  FilterHorizontalIcon,
  PlusSignIcon
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

        <section className="bg-white rounded-lg flex items-center md:justify-between gap-10 mx-7 my-5 px-4 py-4">
          <div className="flex items-center gap-8">
            <button
              className="text-gray-500 hover:text-[#635ac8] text-base transition ease-in-out transform delay-150"
            >
              All Tasks <span className="bg-gray-200 px-2 py-1 rounded-lg">23</span>
            </button>
            <button
              className="text-gray-500 hover:text-[#635ac8] text-base transition ease-in-out transform delay-150"
            >
              To do <span className="bg-gray-200 px-2 py-1 rounded-lg">3</span>
            </button>
            <button
              className="text-gray-500 hover:text-[#635ac8] text-base transition ease-in-out transform delay-150"
            >
              In Progress <span className="bg-gray-200 px-2 py-1 rounded-lg">6</span>
            </button>
            <button
              className="text-gray-500 hover:text-[#635ac8] text-base transition ease-in-out transform delay-150"
            >
              Completed <span className="bg-gray-200 px-2 py-1 rounded-lg">14</span>
            </button>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-gray-500 text-base font-light flex items-center gap-1 border border-gray-300 p-2 rounded-lg">
              <span>
                <FilterHorizontalIcon
                  size={18}
                  variant={"stroke"}
                />
              </span>
              Filter & Sort
            </button>
            <button className="text-gray-500 text-base font-light flex items-center gap-1 border border-gray-300 p-2 rounded-lg">
              <span>
                <PlusSignIcon
                  size={18}
                  variant={"stroke"}
                />
              </span>
              New Task
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Overview