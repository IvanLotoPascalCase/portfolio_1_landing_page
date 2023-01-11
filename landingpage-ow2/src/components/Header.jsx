import React, {useState} from 'react'
import logo from '../assets/logo.png'


// - IMPORT ICONS -
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import {AiFillGithub} from 'react-icons/ai'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <header className='flex items-center justify-between xl:justify-start w-full p-4 h-[10hv] z-50 shadow-lg'>
            <div className='xl:w-1/6 flex flex-col justify-end items-end'>
                <img src={logo} alt="logo" className='h-16 object-scale-down pt-2'/>
            </div>
            <nav className={`z-50 fixed bg-white backdrop-blur-3xl bg-opacity-50 w-[80%] md:w-[60%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all dur-500`}>
                {/* <button></button> */}
                <a className='hover:text-primary underline underline-offset-4' href="">Home</a>
                <a className='hover:text-primary underline underline-offset-4' href="">Juego</a>
                <a className='hover:text-primary underline underline-offset-4' href="">Heroes</a>
                <a className='hover:text-primary underline underline-offset-4' href="">Noticias</a>
                <a className='hover:text-primary underline underline-offset-4' href="">Sobre mi...</a>
            </nav>
            <a className='text-3xl mr-4' href='https://github.com/IvanLotoPascalCase?tab=repositories' target="_blank">
                <span>
                    <AiFillGithub></AiFillGithub>
                </span>
            </a>
            <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-2xl mr-3'>{showMenu ? <RxCross2 /> : <GiHamburgerMenu />}</button>
        </header>

    )
}

export default Header