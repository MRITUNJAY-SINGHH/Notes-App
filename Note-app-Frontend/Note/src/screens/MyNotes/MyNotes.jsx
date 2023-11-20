import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../toastifyCustomStyles.css';
import ErrorMessage from '../../components/ErrorMessage';

const MyNotes = () => {
   const [notes, setNotes] = useState([]);
   const [error, setError] = useState(false);

   const baseUrl = 'https://cyan-tough-bullfrog.cyclic.app/';

   const deleteHandler = async (id) => {
      try {
         await axios.delete(`${baseUrl}api/notes/delete/${id}`);
         toast.success('Note Deleted', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
         });
         // Fetch notes after deletion
         fetchNotes();
      } catch (error) {
         setError(error.response.data.message);
      }
   };

   const loginInfo = window.localStorage.getItem('userLogin');
   // converting string data to JSON
   const userData = JSON.parse(loginInfo);

   const fetchNotes = async () => {
      try {
         const { data } = await axios.get(
            `${baseUrl}api/notes/${userData._id}`
         );
         setNotes(data);
      } catch (error) {
         setError(error.response.data.message);
      }
   };

   useEffect(() => {
      fetchNotes();
   }, [notes]);

   return (
      <div className='mt-24 mx-8'>
         <h3 className='mb-8 text-2xl font-semibold xl:text-3xl'>
            Welcome to Notes App, {userData.name}
         </h3>

         <Link to='/mynotes/createNote'>
            <button className='bg-black flex items-center justify-center mb-3   text-white font-bold py-3 px-4 rounded-md '>
               <FaPlus className='mr-2' />
               <span>Create Notes</span>
            </button>
         </Link>

         {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}

         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {notes.map((note) => (
               <div
                  key={note._id}
                  className='bg-white p-6 custom-shadow rounded-md flex flex-col justify-between'
               >
                  <div>
                     <h4 className='text-xl font-semibold mb-2'>
                        {note.title}
                     </h4>
                     <p className='text-gray-600 mb-4'>{note.category}</p>
                     <p className='text-gray-800'>{note.content}</p>
                  </div>
                  <div className='flex mt-8 justify-around items-center'>
                     <Link
                        to={`/mynotes/editNote/${note._id}`}
                        className='flex items-center text-blue-600 hover:text-blue-800 cursor-pointer'
                     >
                        <FaEdit className='mr-2' />
                        <span>Edit</span>
                     </Link>
                     <button
                        className='ml-4 flex items-center text-red-600 hover:text-red-800 cursor-pointer'
                        onClick={() => deleteHandler(note._id)}
                     >
                        <FaTrash className='mr-2' />
                        <span>Delete</span>
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MyNotes;
