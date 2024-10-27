import { useGlobalContext } from '../context/Context';
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Tasks from "./Tasks"
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
  const { mode } = useGlobalContext()

  return (
    <div className="flex h-screen overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className="w-full overflow-y-auto">
        <Navbar />
        <section className="flex flex-col md:flex-row md:justify-between items-center gap-10 px-7 py-5">
          {/* first row */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1 md:gap-3">
              <a href="/" className="text-gray-400 font-light text-sm md:text-base">Workspace</a>
              <div>
                <ArrowRight01Icon
                  size={18}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
              </div>
              <a href="/" className="text-gray-400 font-light text-sm md:text-base">Creative</a>
              <div>
                <ArrowRight01Icon
                  size={18}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
              </div>
              <a href="/" className="text-sm md:text-base font-bold">Creative Website</a>
            </div>
            <h1 className="capitalize font-bold text-3xl">website design</h1>
            <div className="flex items-center gap-2 md:gap-5 pt-2">
              {/* first part */}
              <div className="flex items-center gap-2">
                <SquareLock02Icon
                  size={18}
                  color={"#9ca3af"}
                  variant={"stroke"}
                />
                <h2 className="font-semibold text-sm md:text-base">Limited access</h2>
                <div className='md:block hidden'>
                  <ArrowDown01Icon
                    size={20}
                    color={"#9ca3af"}
                    variant={"stroke"}
                  />
                </div>
              </div>
              {/* second part */}
              <div className="w-0.5 h-8 bg-gray-300"></div>
              {/* third part */}
              <div className="flex">
                <img
                  src="/images/profile.jpg"
                  alt="profile"
                  className={`${mode === 'light' ? 'border-gray-200' : 'border-gray-900'} w-8 h-8 rounded-[50%] border object-cover transition ease-in-out transform delay-150`}
                />
                <img
                  src="/images/profile2.jpg"
                  alt="profile"
                  className={`${mode === 'light' ? 'border-gray-200' : 'border-gray-900'} w-8 h-8 rounded-[50%] border object-cover ml-[-10px] transition ease-in-out transform delay-150`}
                />
                <img
                  src="/images/profile3.jpg"
                  alt="profile"
                  className={`${mode === 'light' ? 'border-gray-200' : 'border-gray-900'} w-8 h-8 rounded-[50%] border object-cover ml-[-10px] transition ease-in-out transform delay-150`}
                />
                <img src="/images/profile4.jpg"
                  alt="profile"
                  className={`${mode === 'light' ? 'border-gray-200' : 'border-gray-900'} w-8 h-8 rounded-[50%] border object-cover ml-[-10px] transition ease-in-out transform delay-150`}
                />
                <button
                  className={`${mode === 'light' ? 'border-gray-200' : 'border-gray-900'} w-8 h-8 rounded-[50%] border object-cover bg-slate-400 ml-[-10px] transition ease-in-out transform delay-150`}
                >
                  +2
                </button>
              </div>
              {/* fourth part */}
              <button className="bg-[#635ac8] h-8 w-8 rounded-[50%] text-lg text-white">+</button>
            </div>
          </div>

          {/* second row */}
          <div className="hidden md:flex flex-col gap-3 items-end">
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

        <section
          className={`${mode === 'light' ? 'bg-white' : 'bg-black'} rounded-lg flex flex-col md:flex-row items-start md:items-center md:justify-between gap-10 mx-7 my-5 px-4 py-4 transition ease-in-out transform delay-150`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8">
            <button
              className={`${mode === 'light' ? 'text-gray-500' : 'text-white'} hover:text-[#635ac8] text-sm md:text-base transition ease-in-out transform delay-150`}
            >
              All Tasks <span className={`${mode === 'light' ? 'bg-gray-200' : 'bg-gray-900'} px-2 py-1 rounded-lg transition ease-in-out transform delay-150`}>23</span>
            </button>
            <button
              className={`${mode === 'light' ? 'text-gray-500' : 'text-white'} hover:text-[#635ac8] text-sm md:text-base transition ease-in-out transform delay-150`}
            >
              To do <span className={`${mode === 'light' ? 'bg-gray-200' : 'bg-gray-900'} px-2 py-1 rounded-lg transition ease-in-out transform delay-150`}>3</span>
            </button>
            <button
              className={`${mode === 'light' ? 'text-gray-500' : 'text-white'} hover:text-[#635ac8] text-sm md:text-base transition ease-in-out transform delay-150`}
            >
              In Progress <span className={`${mode === 'light' ? 'bg-gray-200' : 'bg-gray-900'} px-2 py-1 rounded-lg transition ease-in-out transform delay-150`}>6</span>
            </button>
            <button
              className={`${mode === 'light' ? 'text-gray-500' : 'text-white'} hover:text-[#635ac8] text-sm md:text-base transition ease-in-out transform delay-150`}
            >
              Completed <span className={`${mode === 'light' ? 'bg-gray-200' : 'bg-gray-900'} px-2 py-1 rounded-lg transition ease-in-out transform delay-150`}>14</span>
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

        <section className="px-7 py-5">
          <Tasks />
        </section>
      </div>
    </div>
  )
}

export default Overview