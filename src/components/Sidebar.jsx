import {
    Home03Icon,
    Mail01Icon,
    File02Icon,
    FolderMinusIcon,
    Analytics01Icon,
    PlusSignIcon,
    Settings02Icon,
    UserIcon
} from 'hugeicons-react';

const Sidebar = () => {
    return (
        <section
            className='bg-white h-screen border-r border-r-gray-300 flex flex-col gap-12 scroll-smooth'
        >
            {/* logo */}
            <div className='px-7 pt-4'>
                <img
                    src="/logo.jpg"
                    alt="logo"
                    className='w-10 h-10 rounded-[50%] object-cover'
                />
            </div>

            {/* icons */}
            <div
                className='flex flex-col gap-5 px-7'
            >
                <a href='/' className='text-gray-500'>
                    <Home03Icon
                        size={20}
                        variant={"stroke"}
                    />
                </a>
                <a href='/' className='text-gray-500'>
                    <Mail01Icon
                        size={20}
                        variant={"stroke"}
                    />
                </a>
                <a href='/' className='text-gray-500'>
                    <File02Icon
                        size={20}
                        variant={"stroke"}
                    />
                </a>
                <a href='/' className='text-gray-500'>
                    <FolderMinusIcon
                        size={20}
                        variant={"stroke"}
                    />
                </a>
                <a href='/' className='text-gray-500'>
                    <Analytics01Icon
                        size={20}
                        variant={"stroke"}
                    />
                </a>
            </div>

            <div className='bg-gray-300 w-full h-[0.5px]'></div>

            {/* users */}
            <div className='px-7 flex flex-col gap-8'>
                <img
                    src='/images/profile.jpg'
                    alt='profile'
                    className='rounded-[50%] w-8 h-8 object-cover'
                />
                <img
                    src='/images/profile2.jpg'
                    alt='profile'
                    className='rounded-[50%] w-8 h-8 object-cover'
                />
                <img
                    src='/images/profile3.jpg'
                    alt='profile'
                    className='rounded-[50%] w-8 h-8 object-cover   '
                />
                <button
                    className='text-gray-500 border border-dashed border-gray-300 w-8 h-8 text-center flex justify-center place-items-center rounded-[50%]'>
                    <PlusSignIcon
                        size={20}
                        variant={"stroke"}
                    />
                </button>
            </div>

            <div className='bg-gray-300 w-full h-[0.5px]'></div>

            <div
                className='px-7 pt-8 flex flex-col gap-5'
            >
                <button className='text-gray-500'>
                    <Settings02Icon
                        size={20}
                        variant={"stroke"}
                    />
                </button>
                <a href='/' className='text-gray-500'>
                    <UserIcon
                        size={20}
                        variant={"stroke"}
                    />
                </a>
            </div>

        </section>
    )
}

export default Sidebar