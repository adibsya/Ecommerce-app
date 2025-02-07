import React from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisible] = React.useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={'/'}>
        <img src={assets.logo} alt='logo' className='w-36' />
        </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-blue-950'>
            <li>
                <NavLink to ='/' className='flex flex-col items-center' >
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-red-700 hidden'/>
                </NavLink>
            </li>
            <li>
                <NavLink to ='/collection' className='flex flex-col items-center' >
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-red-700 hidden'/>
                </NavLink>
            </li>
            <li>
                <NavLink to ='/about' className='flex flex-col items-center' >
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-red-700 hidden'/>
                </NavLink>
            </li>
            <li>
                <NavLink to ='/contact' className='flex flex-col items-center' >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-red-700 hidden'/>
                </NavLink>
            </li>
        </ul>
        <div className='flex items-center gap-4'>
            <img src={assets.search_icon} className='w-6 cursor-pointer' alt='search' />
            <div className='group relative'>
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500 rounded'>
                        <p className='cursor-pointer hover:text-blue-950'>My Profile</p>
                        <p className='cursor-pointer hover:text-blue-950'>Orders</p>
                        <p className='cursor-pointer hover:text-blue-950'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'> 
                <img src={assets.cart_icon} className='w-6 min-w-5' alt="cart" />
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

            {/* sidebar untuk layar kecil */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
    </div>
  )
}

export default Navbar