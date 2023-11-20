import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import './../../toastifyCustomStyles.css';

const EditNote = () => {
   const navigation = useNavigate();

   const params = useParams();

   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [category, setCategory] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const baseUrl = 'https://cyan-tough-bullfrog.cyclic.app/';

   // Firstly get the original note
   const getNote = async () => {
      try {
         const { data } = await axios.get(
            `${baseUrl}api/notes/getnote/${params.noteid}`
         );

         setTitle(data.title);
         setContent(data.content);
         setCategory(data.category);
      } catch (error) {
         setError(error.response.data.message);
      }
   };

   const formSubmitHandler = async (e) => {
      e.preventDefault();
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };

         setLoading(true);
         const { data } = await axios.put(
            `${baseUrl}api/notes/update/${params.noteid}`,
            {
               title,
               content,
               category,
            },
            config
         );
         setLoading(false);

         toast.success('Note Edited', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
         });
         navigation('/mynotes');
      } catch (error) {
         setLoading(false);
         setError(error.response.data.message);
      }
   };

   useEffect(() => {
      getNote();
   }, [params.noteid]);

   return (
      <>
         <div className='mx-8'>
            <div className='max-w-3xl mx-auto mt-24 p-4 bg-white shadow-md custom-shadow rounded-md'>
               {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
               {loading && <Loading></Loading>}
               <h3 className='mb-8 text-2xl font-semibold text-center'>
                  Edit Note....
               </h3>
               <form onSubmit={formSubmitHandler} className='space-y-4'>
                  <div className='responsive'>
                     <label
                        htmlFor='title'
                        className='block text-gray-700 text-sm font-bold mb-2'
                     >
                        Title
                     </label>
                     <input
                        required
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter a title for your note'
                        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                     />
                  </div>

                  <div>
                     <label
                        htmlFor='category'
                        className='block text-gray-700 text-sm font-bold mb-2'
                     >
                        Category
                     </label>
                     <input
                        required
                        type='text'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder='Enter a category for your note'
                        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                     />
                  </div>

                  <div>
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
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Write your note here'
                        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                     />
                  </div>

                  <div className='flex justify-end'>
                     <button
                        className='px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-500'
                        onClick={() => navigation('/mynotes')}
                     >
                        Cancel
                     </button>

                     <button
                        type='submit'
                        className='ml-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500'
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

export default EditNote;
