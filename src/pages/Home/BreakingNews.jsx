import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center">
            <button className="bg-[#D72050] text-white px-6 py-2">Latest</button>
            <Marquee speed={100} pauseOnHover={true}>
                <Link className="mr-6" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-6" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-6" to="/">I can be a React component, multiple React components.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;