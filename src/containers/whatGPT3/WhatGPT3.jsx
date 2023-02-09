import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
    return (
        <div className="mt-16 px-8 mb-20">
            <div className="WhatGPT flex flex-col mx-auto flex-wrap md:container bg-colorBlog p-8">
                <Feature
                    title="What is GPT-3"
                    text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
                />

                <div className="flex flex-col py-6 space-y-5 justify-between sm:flex-row sm:items-center ">
                    <div className="flex">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-[28px] font-bold ss:text-[38px] max-w-[510px]">
                            The possibilities are beyond your imagination
                        </h1>
                    </div>
                    <div className="flex">
                        <p className="text-colorSubtext">
                            Explore the library
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between pt-8 px-4 lg:grid lg:grid-cols-3 lg:gap-12 xl:gap-24">
                    <Feature
                        title="Chatbots"
                        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
                    />
                    <Feature
                        title="Knowledgebase"
                        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
                    />
                    <Feature
                        title="Education"
                        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
                    />                      
                </div>

            </div>
        </div>
    )
}

export default WhatGPT3;