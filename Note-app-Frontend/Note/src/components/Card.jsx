/* eslint-disable react/no-unescaped-entities */
import myNotes1 from '../assets/register.jpg';
import myNotes2 from '../assets/make note.jpg';
import myNotes3 from '../assets/secure.png';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
   const navigation = useNavigate();

   const login = () => {
      navigation('/login');
   };

   const register = () => {
      navigation('/register');
   };

   const Home = () => {
      navigation('/');
   };

   return (
      <>
         <div className='flex flex-col items-center justify-center gap-20 p-4 mt-4 lg:gap-28 lg:flex-row'>
            <div className='max-w-sm bg-white rounded-lg shadow-lg custom-height'>
               <img
                  className='rounded-t-lg'
                  src={myNotes1}
                  alt='note1'
                  loading='lazy'
               />
               <div className='p-6'>
                  <h5 className='mb-2 text-xl font-medium text-gray-900'>
                     Register{' '}
                  </h5>
                  <p className='mb-4 text-base text-gray-700'>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </p>
                  <button
                     type='button'
                     className=' inline-block px-6 py-2.5 bg-purple-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                     onClick={register}
                  >
                     Register
                  </button>
               </div>
            </div>
            <div className='max-w-sm bg-white rounded-lg shadow-lg custom-height'>
               <img
                  className='rounded-t-lg'
                  src={myNotes2}
                  alt='note1'
                  loading='lazy'
               />
               <div className='p-6'>
                  <h5 className='mb-2 text-xl font-medium text-gray-900'>
                     Make Notes
                  </h5>
                  <p className='mb-4 text-base text-gray-700'>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </p>
                  <button
                     type='button'
                     className=' inline-block px-6 py-2.5 bg-purple-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                     onClick={login}
                  >
                     Login
                  </button>
               </div>
            </div>
            <div className='max-w-sm bg-white rounded-lg shadow-lg custom-height'>
               <img
                  className='rounded-t-lg'
                  src={myNotes3}
                  alt='note1'
                  loading='lazy'
               />
               <div className='p-6'>
                  <h5 className='mb-2 text-xl font-medium text-gray-900'>
                     Your Notes is fully secure
                  </h5>
                  <p className='mb-4 text-base text-gray-700'>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </p>
                  <button
                     type='button'
                     className=' inline-block px-6 py-2.5 bg-purple-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                     onClick={Home}
                  >
                     Home
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Cards;
