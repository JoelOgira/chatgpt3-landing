const Feature = ({ title, text }) => {
    return (
        <div className="Feature flex flex-col pb-8 space-y-3 justify-between ss:flex-row ss:space-y-0 ">
            <div className="flex-1">
                <div className="mb-1 w-[38px] h-[3px] bg-gradient-to-r from-[#AE67FA] to-[#F49867]">

                </div> 
                <h1 className="text-[16px] ss:text-[18px] font-bold">
                    {title}
                </h1>
            </div>
            <div className="flex-1">
                <p className="text-colorText text-left font-medium text-[12px] ss:text-[14px]">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Feature;