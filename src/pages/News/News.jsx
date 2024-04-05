import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-xl font-semibold">Dragon News {id}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="md:col-span-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo at animi natus ab ratione, deserunt optio deleniti iusto mollitia illo nihil iste excepturi labore saepe rem architecto ad aspernatur.</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;