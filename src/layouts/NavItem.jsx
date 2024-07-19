import { Link } from 'react-router-dom'

export default function Navpage({ active, to, page }) {

  return(
    <Link
      to={to}
      className={`${
        active ? 
        'text-setup-bright' : 'hover:text-setup-bright'}`}
    >
      {page}
    </Link>
  )
}