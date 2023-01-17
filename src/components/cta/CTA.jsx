const CTA = () => {
    return (
        <div className="CTA px-8 mb-20">
            <div className="flex flex-col mx-auto bg-white px-8 py-4 rounded-2xl md:container text-colorBlog">
                <div className="flex flex-wrap flex-col py-6 space-y-8 justify-between sm:flex-row sm:items-center ">
                    <div className="flex flex-col space-y-2 font-semibold text-[12px]">
                        <p>
                            Request Early Access to Get Started
                        </p>
                        <h1 className="text-[22px] font-bold ss:text-[34px]">
                            Register today & start exploring the endless possibilities.
                        </h1>
                    </div>
                    <div className="flex mx-auto md:mx-0">
                        <p className="text-white">
                            <button className="bg-black rounded-full py-2 px-4 cursor-pointer sm:mb-2">
                                Get Started
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA;