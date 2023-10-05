import { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email , password)
        signInUser(email , password)
        .then(() =>{
            navigate(location?.state ? location.state : '/' )
        })
        .catch(error=>{console.log(error)})
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" border-2 border-gray-300 rounded-sm bg-base-100 md:w-96  w-none ">

                    <form className="card-body space-y-10" onSubmit={handleSignIn}>

                        <p className="text-xl font-bold">Login</p>
                        <div className="form-control">
                            <input  type="email" name="email" placeholder="Username or Email" className="text-sm  outline-none border-b-2 placeholder-black border-gray-300" required />
                        </div>

                        <div className="form-control">
                            <input type="password" name="password" placeholder="Password" className="text-sm outline-none border-b-2 placeholder-black border-gray-300" required />

                            {/* <label className="label mt-3 flex gap-1">
                                <input type="checkbox" name="checked" id="" />
                                <p name="checked" className="text-sm">Remember Me</p>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning normal-case rounded-sm" type="submit" value="Login" />
                        </div>
                        <p>Don’t have an account? <Link className="link link-warning" to={'/register'}>Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;