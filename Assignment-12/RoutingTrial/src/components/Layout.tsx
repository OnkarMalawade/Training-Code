import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
          <nav className="p-4 bg-blue-600 text-white shadow-md">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link to="/user/123" className="hover:underline">User 123</Link>
              </li>
            </ul>
          </nav>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      );
}

export default Layout