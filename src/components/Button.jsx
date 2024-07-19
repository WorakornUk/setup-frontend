const bgMap = {
  "setup-normal" : "bg-setup-normal border-white",
  "setup-dark" : "bg-setup-dark",
  "setup-bright" : "bg-setup-bright",
  white : "bg-white border-setup-dark hover:text-setup-dark",
  black : "bg-black border border-white",
  red : "bg-red-900 border-none hover:bg-red-700",
  green : "bg-green-900 border-none hover:bg-green-700"
}

const colorMap = {
  "setup-normal" : "text-setup-normal",
  "setup-dark" : "text-setup-dark",
  "setup-bright" : "text-setup-bright",
  white : "text-white",
  black : "text-black "
}

const widthMap = {
  full : 'w-full',
  40: 'w-40',
  20: 'w-20'
}

const heightMap = {
  none: '',
  full : 'h-full',
  11: 'h-11',
  14: 'h-14'
}

export default function Button({ children, bg='setup-dark', color='white', height=11, width, disabled, onClick}) {


  return (
    <button
      className={` transition duration-500 font-bold hover:border-4 px-4 min-w-[119px] rounded-md ${heightMap[height]} ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}