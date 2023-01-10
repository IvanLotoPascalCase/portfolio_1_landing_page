import React from 'react'
import logo from '../assets/logo.png'

// - IMPORT ICONS -
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'

const Header = () => {
    return(
        <header className='flex items-center justify-between xl:justify-start w-full p-4 h-[10hv]'>
            <div className='w-1/6 flex flex-col justify-end items-end'>
                <img src={logo} alt="logo" className='h-16 object-scale-down'/>
            </div>
            <nav className='fixed bg-white w-full h-full -left-full top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10'>
                {/* <button><RxCross2 /></button> */}
                <a href="">Home</a>
                <a href="">Heroes</a>
                <a href="">Noticias</a>
                <a href="">Contacto</a>
                <a href="">Sobre mi...</a>
            </nav>
            <button className='text-2xl p-2'><GiHamburgerMenu /></button>
        </header>

    )
}

export default Header