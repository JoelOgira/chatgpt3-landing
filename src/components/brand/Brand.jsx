import google from '../../assets/google.png';
import atlassian from '../../assets/atlassian.png';
import slack from '../../assets/slack.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

const Brand = () => {
    return (
        <div className="Brand flex grow overflow-y-auto flex-wrap justify-center items-center px-20 my-16">
            <div className='flex flex-1 justify-center items-center m-4 max-w-[150px] min-w-[120px]'>
                <img src={google} />
            </div>
            <div className='flex flex-1 justify-center items-center m-4 max-w-[150px] min-w-[120px]'>
                <img src={slack} />
            </div>
            <div className='flex flex-1 justify-center items-center m-4 max-w-[150px] min-w-[120px]'>
                <img src={atlassian} />
            </div>
            <div className='flex flex-1 justify-center items-center m-4 max-w-[150px] min-w-[120px]'>
                <img src={dropbox} />
            </div>
            <div className='flex flex-1 justify-center items-center m-4 max-w-[150px] min-w-[120px]'>
                <img src={shopify} />
            </div>
        </div>
    )
}

export default Brand;