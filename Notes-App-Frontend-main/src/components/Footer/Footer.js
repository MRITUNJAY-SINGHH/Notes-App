import './Footer.css';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
   const instagramUrl = 'https://www.instagram.com/mritunjay_rajput_/';
   const linkedinUrl = 'https://www.linkedin.com/in/mritunjay-singh-022333282/';
   const githubUrl = 'https://github.com/MRITUNJAY-SINGHH';
   return (
      <footer className='bg-light py-4'>
         <div className='container'>
            <div className='row justify-content-center align-items-center'>
               <div className='col-md-4 text-center'>
                  <span className='font-weight-bold text-dark'>My Notes</span>
               </div>
               <div className='col-md-4 text-center'>
                  <p className='text-muted'>
                     {new Date().getFullYear()} MRITUNJAY SINGH
                  </p>
               </div>
               <div className='col-md-4 text-center'>
                  <span className='social-icons gap-3'>
                     <a
                        href={instagramUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-dark'
                     >
                        <AiFillInstagram size={30} />
                     </a>
                     <a
                        href={linkedinUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-dark'
                     >
                        <AiFillLinkedin size={30} />
                     </a>
                     <a
                        href={githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-dark'
                     >
                        <AiFillGithub size={30} />
                     </a>
                  </span>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
