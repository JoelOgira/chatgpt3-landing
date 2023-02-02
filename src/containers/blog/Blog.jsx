import Article from "../../components/article/Article";
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'


const Blog = () => {



    return (
        <div className="Blog mb-20 px-8 scroll-smooth">

            <div className="w-3/4 text-left  sm:w-4/6 md:container md:mx-auto">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] font-extrabold pt-5 pb-8 mb-5 text-[34px] sm:text-[64px]">
                    A lot is happening, <br />
                    We are blogging about it.
                </h1>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:space-x-6 sm:space-y-0 mx-auto md:container">
                <div className="flex-1 h-full sm:max-w-none my-8 sm:my-0">
                    <Article 
                        imgUrl = {blog1}
                        date = 'Jan 01, 2023'
                        text = 'GPT-3 and Open AI is the future. Let us explore how it is?'
                    />
                </div>
                <div className="flex-1 grid grid-cols-1 ss:grid-cols-2 gap-8">
                    <div>
                        <Article 
                            imgUrl = {blog2}
                            date = 'Jan 01, 2023'
                            text = 'GPT-3 and Open AI is the future. Let us explore how it is?'
                        />
                    </div>
                    <div>
                        <Article 
                            imgUrl = {blog3}
                            date = 'Jan 01, 2023'
                            text = 'GPT-3 and Open AI is the future. Let us explore how it is?'
                        />
                    </div>
                    <div>
                        <Article 
                            imgUrl = {blog4}
                            date = 'Jan 01, 2023'
                            text = 'GPT-3 and Open AI is the future. Let us explore how it is?'
                        />
                    </div>
                    <div>
                        <Article 
                            imgUrl = {blog5}
                            date = 'Jan 01, 2023'
                            text = 'GPT-3 and Open AI is the future. Let us explore how it is?'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;