import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../src/assets/images/icons/Frame.png'
import logo2 from '../../src/assets/images/icons/logo.png'
import { AuthContext } from "./AuthProvider";


const Header = () => {

    const location = useLocation()
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const links =  <>
        <li><Link className={` ${location.pathname === '/' ? 'text-yellow-400' : ''}`} to="/">News</Link></li>
        <li><Link className={` ${location.pathname === '/destination' ? 'text-yellow-400' : ''}`} to="/destination">Destination</Link></li>
        <li><Link className={` ${location.pathname === '/blog' ? 'text-yellow-400' : ''}`} to="/blog">Blog</Link></li>
        <li><Link className={` ${location.pathname === '/contact' ? 'text-yellow-400' : ''}`} to="/contact">Contact</Link></li>
    </>
    
    const search = <>
        <div className="form-control">
            <input type="text" placeholder="Search your Destination..." className="bg-white bg-opacity-10 input border-2 border-white w-96" />
        </div>
    </>
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
    }
    return (
        

        <div className={`navbar absolute ${location.pathname !== '/'  ? 'text-black' : 'text-white'} top-0`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className="hidden">
                        {search}
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className={'w-28'} src={location.pathname !== '/' ? logo2 : logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className={`${location.pathname !== '/' ? 'hidden' : 'mr-5'}`}>
                    {search}
                </div>
                <ul className={`${location.pathname !== '/' ? 'flex gap-6 px-1 ml-96' : 'flex gap-6 px-1'}`}>
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <p>{user.email} <span className="btn btn-warning text-black ml-5 px-8 rounded-[3px] text-base normal-case" onClick={handleSignOut}>Logout</span></p>
                        : <Link to="/login" className="btn btn-warning text-black px-8 rounded-[3px] text-base normal-case">Login</Link>
                }

            </div>


        </div>
    );
};

export default Header;