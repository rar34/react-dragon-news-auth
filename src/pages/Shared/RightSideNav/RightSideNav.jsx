import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import background from '../../../assets/bg.png'

const RightSideNav = () => {
    return (
        <div>
            {/* login with zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-semibold mb-2">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>
            {/* social media zone */}
            <div className="p-4 mb-6">
                <h2 className="text-xl font-semibold mb-2">Find Us On</h2>
                <a className="flex items-center p-4 gap-2 border-2 rounded-t-md font-medium" href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="flex items-center p-4 gap-2 border-x-2 font-medium" href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className="flex items-center p-4 gap-2 border-2 rounded-b-md font-medium" href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q Zone */}
            <div className="p-4 bg-[#F3F3F3] space-y-3 mb-6">
                <h2 className="text-xl font-semibold mb-2">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <div className="my-5 text-center space-y-4" style={{backgroundImage: 'url(../../../assets/bg.png)'}}>
                <h2 className="text-3xl font-bold px-7">Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="bg-[#D72050] p-5 text-xl text-white font-semibold">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;