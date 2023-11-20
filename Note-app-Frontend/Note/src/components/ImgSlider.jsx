import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import myNotes1 from '../assets/undraw_typewriter2.svg';
import myNotes2 from '../assets/undraw_typewriter2.svg';
import myNotes3 from '../assets/undraw_typewriter2.svg';
const ImgSlider = () => {
   return (
      <>
         <div className='flex mx-auto bg-white lg:my-20 h-96 lg:p-4'>
            <div className='flex items-center px-2 text-center lg:text-left md:px-12 lg:w-1/2'>
               <div className='lg:text-left'>
                  <h2 className='text-3xl font-semibold text-gray-800 md:text-4xl'>
                     Welcome to{' '}
                     <span className='text-indigo-600'> My Notes</span>
                  </h2>
                  <p className='mt-2 text-sm text-gray-500 md:text-base lg:text-left'>
                     This Project is based on MERN Stack, basically this is an
                     Note taking app where an individual can take there notes
                     and keep it safely, if they want then thye can edit and
                     delete too which ever note they want.{' '}
                     <span className='text-indigo-600'>
                        MERN stands for Mongo DB Express JS React JS Node JS{' '}
                     </span>
                     For designing, I have used Tailwind CSS.
                  </p>
               </div>
            </div>
            <div
               className='hidden lg:block lg:w-1/2'
               style={{
                  clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)',
               }}
            >
               <div className='object-cover h-full '>
                  <Carousel
                     autoPlay={true}
                     infiniteLoop={true}
                     showStatus={false}
                     showThumbs={false}
                     showIndicators={false}
                     showArrows={false}
                  >
                     <div>
                        <img
                           src={myNotes1}
                           alt=' myNotes '
                           className='h-96'
                           loading='lazy'
                        />
                     </div>
                     <div>
                        <img
                           src={myNotes2}
                           alt=' ground'
                           className='h-96'
                           loading='lazy'
                        />
                     </div>
                     <div>
                        <img
                           src={myNotes3}
                           alt=' students'
                           className='h-96'
                           loading='lazy'
                        />
                     </div>
                  </Carousel>
                  <div className='h-full bg-black opacity-25'></div>
               </div>
               <div className='h-full bg-black opacity-25'></div>
            </div>
         </div>
      </>
   );
};

export default ImgSlider;
