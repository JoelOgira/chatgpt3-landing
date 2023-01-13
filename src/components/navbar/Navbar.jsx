import { useState } from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="Navbar bg-colorBg w-full top-0 px-8 py-6 md:px-8 lg:px-0 md:container md:mx-auto md:py-6">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <img src={logo} alt="" className='mt-3 w-[62.56px] h-[16.02px] mr-14'/>
                    </div>
                    <div className="hidden lg:flex space-x-8 align-top text-lg mt-2">
                        <a href="/#" className="hover:text-colorText">Home</a>
                        <a href="/#" className="hover:text-colorText">What Is GPT3?</a>
                        <a href="/#" className="hover:text-colorText">Open AI</a>
                        <a href="/#" className="hover:text-colorText">Case Studies</a>
                        <a href="/#" className="hover:text-colorText">Library</a>
                    </div>                               
                </div>
                <div className='font-medium text-[18px] flex flex-row space-x-5'>
                    <a href="/#" className=' hidden md:block py-[0.5rem] px-[1rem]'>Sign In</a>
                    <a href="/#"className=' hidden md:block bg-[#FF4820] py-[0.5rem] px-[1rem] rounded-lg '>Sign Up</a>
                    <button
                        className={`hamburger ${isOpen ? null : 'open'} block lg:hidden focus:outline-none mt-3`}
                        onClick={() => {
                            setIsOpen(!isOpen)
                            setIsHidden(!isHidden)
                        }}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </div>  

            <div className="lg:hidden">
                <div id="menu" className={`absolute flex-col ${isHidden ? 'hidden' : 'flex'} 
                text-right self-end py-8 mt-10 space-y-6 font-bold bg-colorFooter 
                left-30 right-8 md:right-16 drop-shadow-md rounded-md px-8 pl-20 z-30`}>
                    <a href="/#">Home</a>
                    <a href="/#">What Is GPT-3?</a>
                    <a href="/#">Open AI</a>
                    <a href="/#">Case Studies</a>
                    <a href="/#">Library</a>
                    <a href="/#" className='md:hidden'>Sign In</a>
                    <a href="/#"className='md:hidden text-center bg-[#FF4820] py-[0.5rem] px-[1rem] rounded-lg '>Sign Up</a>
                </div>
            </div>         
        </div>
    )
}

export default Navbar;