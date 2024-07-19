import { useLocation } from 'react-router-dom'
import NavItem from './NavItem';

const NavList = [
  { id:1, page: 'HOME', to: '/' },
  { id:2, page: 'WRESTLERS', to: '/wrestlers' },
  { id:3, page: 'CHAMPIONSHIPS', to: '/championships' },
  { id:4, page: 'SHOP', to: '/shop' },
  { id:5, page: 'TICKETS', to: '/tickets' }
]

export default function NavL() {
  const { pathname } = useLocation();

  return (
    <nav className='flex font-medium text-lg justify-around'>
      {NavList.map(el => (
        <NavItem 
          key={el.id}
          page={el.page}
          to={el.to}
          active={pathname === el.to}
        />
      ))}
    </nav>
  )
}