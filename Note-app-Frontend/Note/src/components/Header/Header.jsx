import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../../toastifyCustomStyles.css';

const Header = () => {
   const [menu, setMenu] = useState(true);

   const navigate = useNavigate();

   const loginInfo = window.localStorage.getItem('userLogin');
   // converting string data to JSON
   const userData = loginInfo ? JSON.parse(loginInfo) : null;

   const logoutHandler = () => {
      // Delete userLogin from local storage and then navigate to root
      localStorage.removeItem('userLogin');

      toast.success('Logout Successfully', {
         position: toast.POSITION.TOP_RIGHT,
         autoClose: 1000,
      });

      navigate('/');
   };

   return (
      <div className='navbar'>
         <div className='fixed top-0 z-10 w-full bg-white border-b border-grey-light'>
            <div className='flex flex-wrap items-center justify-center w-full py-2 mt-0 lg:justify-between'>
               <div className='flex items-center px-0 mx-0 lg:pl-4 lg:mx-4'>
                  <span className='px-8 text-xl font-bold text-purple-800 no-underline hover:no-underline'>
                     <Link to='/'>My Notes</Link>
                  </span>
               </div>
               <div className='absolute pt-3 pr-4 top-1 right-1'>
                  <button
                     className='flex items-center px-3 py-2 border rounded appearance-none lg:hidden text-grey border-grey-dark hover:text-black hover:border-purple focus:outline-none'
                     onClick={() => {
                        setMenu(!menu);
                     }}
                  >
                     <svg
                        className='w-3 h-3 fill-current'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
                     </svg>
                  </button>
               </div>
               <div
                  className={
                     menu
                        ? 'z-20 flex-grow w-full h-0 mt-2 overflow-hidden transition-all lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto lg:h-auto lg:mt-0 '
                        : 'z-20 flex-grow w-full h-52 mt-2 overflow-hidden transition-all lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto lg:h-auto lg:mt-0 '
                  }
                  id='nav-content'
               >
                  <ul className='flex flex-col items-center lg:flex-row'>
                     <li className='mx-2 my-2'>
                        <Link to='/'>Home</Link>
                     </li>
                     {userData && (
                        <li className='mx-2 my-2'>
                           <Link to='/mynotes'>My Notes</Link>
                        </li>
                     )}
                  </ul>
                  <div className='px-4 my-2 text-center'>
                     {!userData ? (
                        <div>
                           <Link
                              id='login'
                              className='inline-flex items-center px-3 py-2 mx-1 text-sm font-medium text-center text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:ring-purple-300'
                              to='/login'
                           >
                              Login
                           </Link>
                           <Link
                              id='signup'
                              className='inline-flex items-center px-3 py-2 mx-1 text-sm font-medium text-center text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:ring-purple-300'
                              to='/register'
                           >
                              Register
                           </Link>
                        </div>
                     ) : (
                        <button
                           id='logout'
                           className='inline-flex items-center px-3 py-2 mx-1 text-sm font-medium text-center text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:ring-purple-300'
                           onClick={logoutHandler}
                        >
                           Logout
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
         <div className='mx-auto my-1'></div>
      </div>
   );
};

export default Header;
