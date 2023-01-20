import possibility from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className="Possibility px-8 mb-20">
            <div className="flex flex-col space-y-8 md:container mx-auto sm:flex-row sm:space-x-16">

                <div className="flex flex-1 justify-start items-center sm:w-1/2">
                    <img src={possibility} loading="lazy" alt="Very possible image" className='w-full h-full' />
                </div>

                <div className="flex flex-col space-y-7 sm:w-1/2 sm:pt-[25%]">
                    <h4 className="text-colorText text-[20px]">
                        Request Early Access and Get Started
                    </h4>

                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-[36px] sm:text-[46px] font-bold'>
                        The possibilities are beyond your imagination
                    </h1>
                    <p className='text-[16px] sm:text-[18px] text-colorText mt-6'>
                        Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <h4 className="text-colorSubtext text-[20px] font-medium">
                        Request Early Access and Get Started
                    </h4>
                </div>

            </div>
        </div>
    )
}

export default Possibility;