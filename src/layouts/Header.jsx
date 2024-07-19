import { Link } from 'react-router-dom'
import { SetupIcon } from '../icons'
import NavL from './NavL'
import NavR from './NavR'

export default function Header() {

  return (
    <header className='grid grid-cols-11 h-[85px] px-20 items-center'>
      <div className='col-span-2 h-[36px] w-[135px] '>
        <Link to="/" className='inline-block'>
          <SetupIcon />
        </Link>
      </div>
      <div className='col-span-6'>
        <NavL />
      </div>
      <div className='col-span-3 justify-self-end'>
        <NavR />
      </div>
    </header>
  )
}