import { useGlobalContext } from '../context/Context';

import {
    Search02Icon,
    Moon02Icon,
    Notification02Icon,
    UserIcon,
    Menu04Icon
} from 'hugeicons-react';

const Navbar = () => {
    const { toggle, mode } = useGlobalContext()

    return (
        <nav className={
            `${mode === 'light' ? 'bg-white' : 'bg-black text-white'} flex items-center gap-3 md:justify-between px-7 py-4 transition ease-in-out transform delay-150`
        }>
            <div>
                <form>
                    <div className='relative'>
                        <input
                            type="text"
                            className='bg-gray-200 font-light px-3 py-1 rounded-lg'
                            placeholder='search' />
                        <Search02Icon
                            size={18}
                            color={"#6b7280"}
                            variant={"stroke"}
                            className='absolute right-2 top-2'
                        />

                    </div>
                </form>
            </div>
            <div className='hidden md:flex gap-3'>
                <button
                    onClick={toggle}
                    className={`${mode === 'light' ? 'bg-gray-100 text-[#6b7280]' : 'bg-gray-700 text-gray-200'} p-2 rounded-lg transition ease-in-out transform delay-150`}>
                    <Moon02Icon
                        size={18}
                        variant={"stroke"}
                    />
                </button>
                <button
                    className={`${mode === 'light' ? 'bg-gray-100 text-[#6b7280]' : 'bg-gray-700 text-gray-200'} p-2 rounded-lg transition ease-in-out transform delay-150`}
                >
                    <Notification02Icon
                        size={18}
                        variant={"stroke"}
                    />
                </button>
                <div className='p-2 border border-gray-200 rounded-[50%]'>
                    <UserIcon
                        size={18}
                        color={"#6b7280"}
                        variant={"stroke"}
                    />
                </div>
            </div>
            {/* mobile */}
            <div className='md:hidden'>
                <button
                    onClick={toggle}
                    className={`${mode === 'light' ? 'bg-gray-100 text-[#6b7280]' : 'bg-gray-700 text-gray-200'} p-2 rounded-lg transition ease-in-out transform delay-150`}>
                    <Moon02Icon
                        size={18}
                        variant={"stroke"}
                    />
                </button>
            </div>
            <div className='md:hidden'>
                <button className={`${mode === 'light' ? 'text-[#6b7280]' : 'text-gray-200'} rounded-lg transition ease-in-out transform delay-150`}>
                    <Menu04Icon
                        size={24}
                        variant={"stroke"}
                    />
                </button>
            </div>
        </nav>
    )
}

export default Navbar