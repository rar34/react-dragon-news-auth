import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import leftBanner1 from '../../../assets/1.png'
import leftBanner2 from '../../../assets/2.png'
import leftBanner3 from '../../../assets/3.png'
import { SlCalender } from "react-icons/sl";
import moment from "moment";



const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl font-semibold">All Category</h2>
            <h2 className="text-xl font-semibold my-3 text-center bg-[#E7E7E7] py-4 rounded-lg">National News</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className="block text-[#9F9F9F] pl-2 md:pl-14 text-xl mb-7" key={category.id}>{category.name}</Link>)
            }
            <div className="space-y-4">
                <div className="space-y-5">
                    <img src={leftBanner1} alt="" />
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <p className="flex items-center gap-5">Sports <span className="flex items-center gap-3"><SlCalender></SlCalender>{moment().format('MMMM D, YYYY')}</span></p>
                </div>
                <div className="space-y-5">
                    <img src={leftBanner2} alt="" />
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <p className="flex items-center gap-5">Sports <span className="flex items-center gap-3"><SlCalender></SlCalender>{moment().format('MMMM D, YYYY')}</span></p>
                </div>
                <div className="space-y-5">
                    <img src={leftBanner3} alt="" />
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <p className="flex items-center gap-5">Sports <span className="flex items-center gap-3"><SlCalender></SlCalender>{moment().format('MMMM D, YYYY')}</span></p>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;