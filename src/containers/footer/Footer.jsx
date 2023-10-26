import logo from '../../assets/logo.svg'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/Fa';

const Footer = () => {

    const thisYear = new Date().getFullYear();

    return (
        <div className="Footer top-full sticky bg-colorFooter py-10 px-8">
            <div className="flex flex-col mx-auto space-y-6 md:container">
                <div className="flex flex-col w-full text-center space-y-12">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] font-extrabold text-[27px] ss:text-[34px] sm:text-[58px] ">
                        Do you want to step into this amazing possibility that is coming in the future before others?
                    </h1>
                    <button className="border-2 px-3 py-4 mx-auto cursor-pointer">
                        Request Early Access
                    </button>
                </div>
                
                <div className="flex flex-col justify-between items-start py-6 mx-auto space-y-6 sm:flex-row sm:space-x-4 sm:mx-0">
                    <div className='flex flex-col flex-wrap space-y-4 pt-8'>
                        <img src={logo} alt="" className='w-[118px] h-[30px]'/>       
                        <p>Crechterwoord K12 182 DK <br /> All Rights Reserved</p>                
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <h4 className='font-bold underline pb-2'>
                            Links
                        </h4>
                        <p>About Us</p>
                        <p>Social Media</p>
                        <p>Counters</p> 
                    </div>

                    <div className='flex flex-col space-y-1'>
                    <h4 className='font-bold underline pb-2'>
                    Company
                        </h4>
                        <p>Terms & Conditions </p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>  
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <h4 className='font-bold underline pb-2'>
                            Social Links
                        </h4>
                        <div className="flex flex-row space-x-2">
                            <a target='_blank' href="https://www.facebook.com/"><AiFillFacebook/></a>
                            <a target='_blank' href="https://www.twitter.com/"><AiFillTwitterSquare/></a>
                            <a target='_blank' href="https://www.pinterest.com/"><FaPinterest/></a>
                            <a target='_blank' href="https://www.google.com/"><AiFillFacebook/></a>
                        </div>
                        <p>Crechterwoord K12 182 DK</p>
                        <p>085-132567</p>
                        <p>info@payme.net</p>  
                    </div>
                    
                </div>

                <div className="mx-auto py-4 text-center">
                    Copyright &copy; {thisYear} GPT-3. All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer;