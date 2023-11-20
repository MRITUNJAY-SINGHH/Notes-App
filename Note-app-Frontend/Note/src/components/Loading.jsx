function Loading({ size = 16 }) {
   return (
      <div className='flex justify-center items-center w-full h-full'>
         <div
            className={`animate-spin border-t-4 border-blue-500 h-${size} w-${size}`}
         ></div>
      </div>
   );
}

export default Loading;
