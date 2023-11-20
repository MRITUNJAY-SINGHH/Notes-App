import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './../../toastifyCustomStyles.css';

const LoginScreen = () => {
   const navigate = useNavigate();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const baseUrl = 'https://cyan-tough-bullfrog.cyclic.app/';

   const submitHandler = async (e) => {
      e.preventDefault();
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         setLoading(true);
         const { data } = await axios.post(
            `${baseUrl}api/users/login`,
            {
               email,
               password,
            },
            config
         );

         localStorage.setItem('userLogin', JSON.stringify(data));
         setLoading(false);
         setError(null);

         toast.success('Login Successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
         });

         navigate('/mynotes');
      } catch (error) {
         setLoading(false);
         toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
         });
         setError(error.response.data.message);
      }
   };
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   return (
      <>
         <div className='flex items-center h-screen justify-center bg-gradient-to-r from-blue-500 to-purple-600'>
            <div className='w-full max-w-md p-6 bg-white rounded-md shadow-md mx-3'>
               {loading && <Loading style={{ height: '100px' }} />}{' '}
               {/* Adjust the height as needed */}
               {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
               <form className='w-full max-w-md' onSubmit={submitHandler}>
                  <h3 className='text-3xl font-semibold text-center mb-6'>
                     Login to your account
                  </h3>
                  <label className='block mb-4'>
                     <span className='text-gray-700 mb-2'>Your Email</span>
                     <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        name='email'
                        id='email'
                        className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Enter your Email'
                        required
                     />
                  </label>
                  <div className='relative mb-4'>
                     <label className='text-gray-700'>Password</label>
                     <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Enter your Password'
                        required
                        type={showPassword ? 'text' : 'password'}
                     />
                     <div className='absolute inset-y-0 right-0 top-[40%] flex items-center pr-3'>
                        {showPassword ? (
                           <FiEye
                              className='text-gray-600 cursor-pointer'
                              onClick={togglePasswordVisibility}
                           />
                        ) : (
                           <FiEyeOff
                              className='text-gray-600 cursor-pointer'
                              onClick={togglePasswordVisibility}
                           />
                        )}
                     </div>
                  </div>

                  <button
                     className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md'
                     type='submit'
                  >
                     Login
                  </button>
                  <p className='text-center mt-4'>
                     New user?{' '}
                     <Link to='/register' className='text-blue-500'>
                        Create an account here
                     </Link>
                  </p>
               </form>
            </div>
         </div>
      </>
   );
};

export default LoginScreen;
