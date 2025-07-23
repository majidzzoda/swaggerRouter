import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppMode from '../components/switcher';
import useDarkSide from '../config/useDarkMode';
const Layout = () => {
    const [theme, toggleTheme] = useDarkSide();
    return (
        <>
            <div className='flex justify-center bg-gray-300 transition-all duration-[1s] dark:bg-gray-900 dark:text-white font-bold gap-[35px] lg:gap-[50px] items-center py-[25px]'>
                <AppMode toggleTheme={toggleTheme} />
                <Link to={'/'}>
                    <button>Home</button>
                </Link>
                <Link to={'/about'}>
                    <button>About</button>
                </Link>
                <Link to={'/todo'}>
                    <button>Users</button>
                </Link>
            </div>
            <div className='dark:bg-gray-950 transition-all duration-[1s] bg-gray-100 h-[738px] pb-[262px]'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout