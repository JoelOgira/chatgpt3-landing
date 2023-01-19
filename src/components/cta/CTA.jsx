const CTA = () => {
    return (
        <div className="CTA px-8 mb-20">
            <div className="flex flex-col mx-auto bg-gradient-to-r from-[#AE67FA] to-[#F49867] px-8 py-4 rounded-2xl md:container">
                <div className="flex flex-col py-6 space-y-6 justify-between ss:flex-row ss:items-center ss:space-x-1 ss:space-y-0">
                    <div className="flex flex-col space-y-2 font-semibold text-[12px] w-full ss:w-3/4">
                        <p>
                            Request Early Access to Get Started
                        </p>
                        <h1 className="text-[22px] font-bold ss:text-[28px] ">
                            Register today & start exploring the endless possibilities.
                        </h1>
                    </div>
                    
                    <div className="flex mx-auto md:mx-0">                        
                        <button className="bg-black rounded-full py-3 px-6 cursor-pointer sm:mb-2">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA;