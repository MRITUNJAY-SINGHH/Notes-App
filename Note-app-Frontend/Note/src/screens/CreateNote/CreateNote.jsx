import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import './../../toastifyCustomStyles.css';

const CreateNote = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [category, setCategory] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const baseUrl = 'https://cyan-tough-bullfrog.cyclic.app/';

   const navigation = useNavigate();

   const formSubmitHandler = async (e) => {
      e.preventDefault();
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };

         const loginInfo = window.localStorage.getItem('userLogin');
         // converting string data to JSON
         const userData = JSON.parse(loginInfo);

         setLoading(true);

         const { data } = await axios.post(
            `${baseUrl}api/notes/create/${userData._id}`,
            {
               title,
               content,
               category,
            },
            config
         );

         setLoading(false);
         toast.success('Note Created', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
         });
         navigation('/mynotes');
      } catch (error) {
         setLoading(false);
         setError(error.response.data.message);
      }
   };

   return (
      <>
         <div className='container mx-auto mt-16 md:mt-20 mb-12'>
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {loading && <Loading></Loading>}
            <h3 className='mb-8 text-2xl font-semibold text-center'>
               Create New Note
            </h3>
            <div className='mx-8'>
               <form
                  onSubmit={formSubmitHandler}
                  className='w-full max-w-lg mx-auto bg-white rounded-lg custom-shadow p-8'
               >
                  <div className='mb-4 responsive'>
                     <label
                        htmlFor='title'
                        className='block text-gray-700 text-sm font-bold mb-2'
                     >
                        Title
                     </label>
                     <input
                        required
                        type='text'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter a title for your note'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-visible-sm'
                     />
                  </div>

                  <div className='mb-4 responsive'>
                     <label
                        htmlFor='category'
                        className='block text-gray-700 text-sm font-bold mb-2'
                     >
                        Category
                     </label>
                     <input
                        required
                        type='text'
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder='Enter a category for your note'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                     />
                  </div>

                  <div className='mb-4 responsive'>
                     <label
                        htmlFor='content'
                        className='block text-gray-700 text-sm font-bold mb-2'
                     >
                        Content
                     </label>
                     <textarea
                        rows={7}
                        required
                        type='text'
                        id='content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Write your note here'
                        className='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-visible-sm'
                     />
                  </div>

                  <div className='flex flex-col md:flex-row md:justify-between'>
                     <button
                        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 focus:outline-none focus:shadow-outline'
                        onClick={() => navigation('/mynotes')}
                     >
                        Cancel
                     </button>
                     <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                     >
                        Done
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};

export default CreateNote;
