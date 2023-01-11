import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="Navbar w-full z-30 sticky top-0 px-12 py-12 md:px-0 md:container md:mx-auto">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <img src={logo} alt="" className='mt-1 w-[62.56px] h-[16.02px] mr-14'/>
                    </div>
                    <div className="hidden lg:flex space-x-8 align-top text-lg">
                        <a href="/#" className="hover:text-darkGrayishBlueLight">Home</a>
                        <a href="/#" className="hover:text-darkGrayishBlueLight">What Is GPT3?</a>
                        <a href="/#" className="hover:text-darkGrayishBlueLight">Open AI</a>
                        <a href="/#" className="hover:text-darkGrayishBlueLight">Case Studies</a>
                        <a href="/#" className="hover:text-darkGrayishBlueLight">Library</a>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Navbar;