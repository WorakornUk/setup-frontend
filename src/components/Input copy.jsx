export default function Input({
  placeholder,
  type = 'text',
  error,
  value,
  onChange,
  name
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'
        }`}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </>
  );
}


// export default function Input({
//   placeholder,
//   type = 'text',
//   error,
//   value,
//   onChange,
//   name
// }) {
//   return (
//     <>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className={`placeholder-white w-full px-3 py-1.5 bg-transparent border-b-2 focus:outline-none transition duration-500 ${
//           error
//             ? 'border-red-500 focus:ring-red-700'
//             : 'border-gray-300 focus:border-setup-bright'
//         }`}
//         value={value}
//         onChange={onChange}
//         name={name}
//       />
//       {error ? <small className="text-red-500">{error}</small> : null}
//     </>
//   );
// }
