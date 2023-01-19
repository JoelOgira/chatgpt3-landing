const Article = ( { imgUrl, date, text }) => {
    return (
        <div className="Article  flex flex-col space-y-6 overflow-hidden w-full h-full bg-colorFooter">
            <div className="w-full h-full bg-colorBg">
                <img src={imgUrl} alt="blog image" className="w-full h-full" loading="lazy"/>
            </div>
            <div className="flex flex-col justify-between space-y-12 h-full px-6 pb-12">
                <div>
                    <p className="text-[11.65px] font-bold pb-3">{date}</p>
                    <h3 className="text-[18px] font-extrabold ss:text-[25.11px]">{text}</h3>
                </div>
                <p className="text-[11.65px] font-bold">Read Full Article</p>
            </div>           
        </div>
    )
}

export default Article;