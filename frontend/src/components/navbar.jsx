'use client'
import { usePathname } from 'next/navigation'

import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '@/app/context_login_notif';
import Button from './button';

export default function Navbar() {
    const pathname = usePathname()
    const { checkLoginStatus } = useContext(Context)
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        checkLoginStatus()
    }
    return (
        <>
            <div className="navbar bg-white px-24 shadow-md flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                    </div>
                    <div className="text-xl text-red font-bold w-full">Timesheet Management</div>
                </div>
                {pathname !== '/login' &&
                    <div className="">
                        <Button click={handleLogout} text='Keluar' color='red' />
                    </div>
                }
            </div>
            {pathname !== '/login' &&
                <div className=" px-24 bg-white shadow-md flex flex-col mb-0.5">
                    <div className="">
                        <div className="text-xl text-black font-bold my-4">HH Timesheet</div>
                    </div>
                    <div className="pb-2">
                        <Link href='/' className={pathname === '/' ? 'hover:text-blue hover:underline text-lg mr-4 text-blue font-bold underline' : 'text-grey font-bold hover:text-blue hover:underline text-lg mr-4'}>Daftar Kegiatan</Link>
                        <Link href='/pengaturan' className={pathname === '/pengaturan' ? 'hover:text-blue hover:underline text-lg mr-4 text-blue font-bold underline' : 'text-grey hover:text-blue hover:underline text-lg mr-4'}>Pengaturan</Link>
                    </div>
                </div>
            }
        </>

    )
}