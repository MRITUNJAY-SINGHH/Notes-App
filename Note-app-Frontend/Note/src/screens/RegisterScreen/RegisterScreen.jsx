import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';

function RegisterScreen() {
   const navigate = useNavigate();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmpassword, setConfirmPassword] = useState('');
   const [name, setName] = useState('');
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const baseUrl = 'https://faithful-scrubs-duck.cyclic.app/';

   const registerHandler = async (e) => {
      e.preventDefault();

      if (password !== confirmpassword) {
         toast.error('Password and Confirm Password do not match', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
         });
         setMessage('Password and Confirm Password do not match');
      } else {
         setMessage(null);
         try {
            const config = {
               headers: {
                  'Content-type': 'application/json',
               },
            };

            setLoading(true);
            const { data } = await axios.post(
               `${baseUrl}api/users`,
               {
                  name,
                  email,
                  password,
               },
               config
            );

            setLoading(false);

            toast.success('Register Successfully', {
               position: toast.POSITION.TOP_RIGHT,
               autoClose: 300,
            });

            toast.success('Please Login', {
               position: toast.POSITION.TOP_RIGHT,
               autoClose: 1000,
            });

            navigate('/login');
         } catch (error) {
            setLoading(false);
            toast.error(error.response.data.message, {
               position: toast.POSITION.TOP_RIGHT,
               autoClose: 1000,
            });
            setError(error.response.data.message);
         }
      }
   };

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };

   return (
      <div className='Signup h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 mt-8'>
         <div className='w-full max-w-md p-6 bg-white rounded-md shadow-md mx-3'>
            <h3 className='text-3xl font-semibold text-center mb-6'>
               Create an account
            </h3>
            {loading && <Loading></Loading>}
            {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            <form onSubmit={registerHandler}>
               <label className='block mb-4'>
                  <span className='text-gray-700 mb-2'>Your Name</span>
                  <input
                     type='text'
                     value={name}
                     name='name'
                     id='name'
                     className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                     placeholder='Enter your Name'
                     onChange={(e) => setName(e.target.value)}
                     required
                  />
               </label>
               <label className='block mb-4'>
                  <span className='text-gray-700 mb-2'>Your Email</span>
                  <input
                     type='email'
                     name='email'
                     id='email'
                     className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                     placeholder='Enter your Email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
               </label>
               <div className='relative mb-4'>
                  <label className='text-gray-700'>Password</label>
                  <input
                     type={showPassword ? 'text' : 'password'}
                     name='password'
                     className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                     placeholder='Enter your Password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
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
               <div className='relative mb-4'>
                  <label className='text-gray-700'>Confirm Password</label>
                  <input
                     type={showConfirmPassword ? 'text' : 'password'}
                     name='confirmPassword'
                     className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                     placeholder='Confirm your Password'
                     value={confirmpassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     required
                  />
                  <div className='absolute inset-y-0 right-0 top-[40%] flex items-center pr-3'>
                     {showConfirmPassword ? (
                        <FiEye
                           className='text-gray-600 cursor-pointer'
                           onClick={toggleConfirmPasswordVisibility}
                        />
                     ) : (
                        <FiEyeOff
                           className='text-gray-600 cursor-pointer'
                           onClick={toggleConfirmPasswordVisibility}
                        />
                     )}
                  </div>
               </div>
               <button
                  className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md'
                  onClick={registerHandler}
                  type='submit'
               >
                  Register
               </button>
            </form>
            <p className='text-center mt-4'>
               Already have an account?{' '}
               <Link to='/login' className='text-blue-500'>
                  Login here
               </Link>
            </p>
            <ToastContainer />
         </div>
      </div>
   );
}

export default RegisterScreen;
