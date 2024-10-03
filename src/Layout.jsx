import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { context } from './MainContex';

const Layout = () => {
    const { user } = useContext(context)
    const { logout } = useContext(context)
    return (
        <div className="bg-gray-100 max-w-[1000px] mx-auto">
            <header className="flex items-center justify-between p-4 bg-white shadow">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <a href="#">YourLogo</a>
                </div>
                {/* Navigation Links */}
                <nav className="space-x-4">
                    <Link to={'/'} className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>

                    {
                        user != null ? <>
                            <Link to={'login'} className="text-gray-700 hover:text-blue-600">
                                Hello user
                            </Link>
                            <Link to={'addquiz'} className="text-gray-700 hover:text-blue-600">
                                Add Quiz
                            </Link>
                            <Link to={'viewquiz'} className="text-gray-700 hover:text-blue-600">
                                View Quiz
                            </Link>
                            <Link onClick={logout} to={''} className="text-gray-700 hover:text-blue-600">
                                log out
                            </Link>
                        </> : <>
                            <Link to={'/login'} className="text-gray-700 hover:text-blue-600">
                                Log In
                            </Link>
                            <Link to={'register'} className="text-gray-700 hover:text-blue-600">
                                Register
                            </Link>
                        </>
                    }

                </nav>
            </header>

            <Outlet />
        </div>
    );
}

export default Layout;
