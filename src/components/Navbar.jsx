import {
    Search02Icon,
    Moon02Icon,
    Notification02Icon,
    UserIcon
} from 'hugeicons-react';

const Navbar = () => {
    return (
        <nav className='bg-white flex items-center gap-9 md:justify-between px-7 py-4'>
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
            <div className='flex gap-3'>
                <button className='p-2 bg-gray-100 rounded-lg'>
                    <Moon02Icon
                        size={18}
                        color={"#6b7280"}
                        variant={"stroke"}
                    />
                </button>
                <button className='p-2 bg-gray-100 rounded-lg'>
                    <Notification02Icon
                        size={18}
                        color={"#6b7280"}
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
        </nav>
    )
}

export default Navbar