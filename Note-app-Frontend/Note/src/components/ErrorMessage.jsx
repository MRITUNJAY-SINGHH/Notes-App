const ErrorMessage = ({ variant = 'info', children }) => {
   let alertClass = 'bg-blue-100';
   let textClass = 'text-blue-800';

   // Determine Tailwind classes based on the variant
   if (variant === 'danger') {
      alertClass = 'bg-red-100';
      textClass = 'text-red-800';
   } else if (variant === 'success') {
      alertClass = 'bg-green-100';
      textClass = 'text-green-800';
   }

   return (
      <div
         className={`rounded-md p-4 mb-4 ${alertClass} text-center ${textClass}`}
      >
         {children}
      </div>
   );
};

export default ErrorMessage;
