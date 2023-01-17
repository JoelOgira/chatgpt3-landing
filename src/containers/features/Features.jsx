import Feature from "../../components/feature/Feature";

const Features = () => {

    const featuresData = [
        {
            title: "Improving end distrusts instantly",
            text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        },
        {
            title: "Become the tended active",
            text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        },
        {
            title: "Really boy law county",
            text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        },
        {
            title: "The Rudimentals",
            text: "I hope someday we'll sit down together and laugh with each other about these days these days. All our problems we'll lay to rest and we will tell each other about these days"
        }
    ]

    return (
        <div className="px-8 mb-20">
            <div className="Features mx-auto flex flex-col space-y-8 justify-between md:flex-row md:space-x-28 md:container">
                <div className="flex flex-col space-y-6 md:w-1/3 md:pt-8">
                    <h1 className="text-[28px] sm:text-[34px] font-extrabold">
                        The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.
                    </h1>

                    <p className="text-colorSubtext">
                        Request Early Access to Get Started
                    </p>
                </div>

                <div className="md:w-2/3 flex flex-[1.5] flex-row justify-between flex-wrap ">
                    {(featuresData || []).map((data, index) => (
                        <div className="flex flex-row space-y-6 pb-3 space-x-8" key={data + index}>
                            <div className="w-1/3  flex-1 pt-6 md:pt-6 ">
                                <div className="mb-1 w-[38px] h-[3px] bg-white">

                                </div> 
                                <h1 className="text-[16px] ss:text-[18px] font-bold">
                                    {data?.title}
                                </h1>
                            </div>
                            <div className="w-2/3 flex-1">
                                <p className="text-colorText text-left font-medium text-[12px] ss:text-[14px]">
                                    {data?.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;