import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        // <div>
        <div className="navbar backdrop-blur-xl bg-white/30 fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-red-500' : 'text-black'}`}>Home</NavLink>
                        <NavLink to='/coffees' className={({isActive}) => `${isActive ? 'text-red-500' : 'text-black'}`}>Coffees</NavLink>
                        <NavLink to='/dashboard' className={({isActive}) => `${isActive ? 'text-red-500' : 'text-black'}`}>Dashboard</NavLink>
                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-xl">COFFEES_HOUSE_BOOKS</NavLink>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu menu-horizontal text-lg font-serif px-1 gap-8">
                    <NavLink to='/' className={({isActive}) => `${isActive ? 'text-red-500' : 'text-black'}`}>Home</NavLink>
                    <NavLink to='/coffees' className={({isActive}) => `${isActive ? 'text-red-500' : 'text-black'}`}>Coffees</NavLink>
                    <NavLink to='/dashboard' className={({isActive}) => `${isActive ? 'text-red-500' : 'text-black'}`}>Dashboard</NavLink>
                </ul>
            </div>
        </div>
        // </div>
    );
};

export default NavBar;