import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    console.log(news);
    return (
        <div className="card bg-base-100 p-5 space-y-5 mb-8 border">
            <h3 className='text-xl font-bold'>{title}</h3>
            <figure><img src={image_url} alt="" /></figure>
            {
                details.length > 200 ? <p>{details.slice(0, 200)} <br /> <Link to={`/news/${_id}`} className='font-bold text-orange-600'>Read More</Link></p>:
                <p>{details}</p>
            }
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;