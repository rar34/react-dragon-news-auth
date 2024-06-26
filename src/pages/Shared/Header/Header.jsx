import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center space-y-4 my-6'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-[18px] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;