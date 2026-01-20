import Link from 'next/link'
import React from 'react'
import { IoIosHome } from "react-icons/io";
import { BiCommentError } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
function NavBar() {
  return (
    <div>
        <nav className=' flex flex-col items-center gap-3 p-6 min-h-screen'>
            <Link href={'/'} className='border-b-2 border-slate-200 w-full py-2  hover:bg-slate-700 hover:rounded-md flex items-center justify-center gap-1'><span><IoIosHome size={20}/></span>HOME</Link>
            <Link href={'/about'} className='border-b-2 border-slate-200 w-full py-2  hover:bg-slate-700 hover:rounded-md flex items-center justify-center gap-1'><span><BiCommentError size={20}/></span>ABOUT</Link>
            <Link href={'/setting'} className='border-b-2 border-slate-200 w-full py-2  hover:bg-slate-700 hover:rounded-md flex items-center justify-center gap-1'><span><IoSettingsOutline size={20}/></span>SETTINGS</Link>
        </nav>
    </div>
  )
}

export default NavBar