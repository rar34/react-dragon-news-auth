import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const navigate = useNavigate(null);
    const { signIn } = useContext(AuthContext)
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(form.get('email'))
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="">
            <Navbar></Navbar>
            <div className=" w-3/4 lg:w-1/2 my-6 bg-base-200 p-4 md:p-14 rounded-2xl mx-auto">
                <h2 className="text-4xl text-center font-semibold">Login your account</h2>
                <hr className="my-6" />
                <form onSubmit={handleLogin} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white font-semibold text-xl">Login</button>
                    </div>
                </form>
                <p className="my-8 font-semibold text-center">Do not Have An Account ? <Link className="text-[#FF8C47] font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;