import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
    return (
        <div className="mb-20">
            <div className="Header px-8 flex flex-col lg:items-center mx-auto space-y-6 justify-between lg:flex-row md:container lg:space-x-16">
                <div className='flex flex-col lg:w-1/2 lg:pt-16'>
                    <h1 className='text-[36px] md:text-[56px] font-bold'>
                        Let's Build Something amazing with GPT-3 OpenAI
                    </h1>
                    <p className='text-[16px] md:text-[18px] text-colorText mt-6'>
                        Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <div className="flex flex-wrap space-x-0 lg:w-l-12 flex-row mt-9">
                        <input 
                            type="text"
                            className="flex-1 rounded-l-md px-6 text-[16px]
                            py-3 focus:outline-none mb-3 bg-colorFooter  md:text-[20px]"
                            placeholder="Your Email Address"
                        />
                        <button type="submit" className="px-6 py-3 rounded-r-md text-white bg-[#FF4820] focus:outline-none md:px-5 lg:px-7 mb-3 text-[16px] md:text-[20px]">
                            Get Started
                        </button>
                    </div>

                    <div className="flex flex-col space-y-1 mt-9 md:flex-row md:space-y-0 md:space-x-4">
                        <img src={people} alt="People visiting the site" className='w-[181.79px] h-[38px] mx-auto md:m-0'/>
                        
                        <p className='mx-auto text-sm text-center md:text-[12px] md:pt-3'>
                            1,600 people requested access a visit in last 24 hours
                        </p>
                    </div>
                    
                </div>
                <div className='lg:w-1/2'>
                    <img src={ai} loading="lazy" alt="Dooms Day AI" className='w-full h-full'/>
                </div>
        </div>
        </div>
    )
}

export default Header;