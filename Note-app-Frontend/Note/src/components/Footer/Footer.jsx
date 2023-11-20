import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
   const instagramUrl = 'https://www.instagram.com/mritunjay_rajput_/';
   const linkedinUrl = 'https://www.linkedin.com/in/mritunjay-singh-022333282/';
   const githubUrl = 'https://github.com/MRITUNJAY-SINGHH';
   return (
      <div>
         <footer className='px-10 mt-8 text-gray-600 bg-white body-font'>
            <div className='flex flex-col items-center px-2 py-4 mx-auto sm:flex-row'>
               <span className='flex items-center justify-center font-medium text-gray-900 title-font md:justify-start'>
                  <span className='ml-3 text-xl'>My Notes</span>
               </span>
               <p className='text-sm text-center text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0'>
                  {new Date().getFullYear()} MRITUNJAY SINGH{''}
               </p>
               <span className='inline-flex justify-center gap-2 text-2xl sm:ml-auto sm:mt-0 sm:justify-start'>
                  <a
                     href={instagramUrl}
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <AiFillInstagram />
                  </a>
                  <a
                     href={linkedinUrl}
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <AiFillLinkedin />
                  </a>
                  <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                     <AiFillGithub />
                  </a>
               </span>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
