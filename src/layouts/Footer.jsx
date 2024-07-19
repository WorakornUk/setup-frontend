import { Link } from 'react-router-dom'
import { SetupIcon } from '../icons'

export default function Header() {

  return (
    <footer className='grid grid-cols-5 h-20 px-20 items-center mt-52 pb-52'>
      <div className='col-span-1 h-[36px] '>
        <div className='grid grid-rows gap-5'>
          <div className='font-semibold'>CORPORATE</div>
          <div>Careers</div>
          <div>Impact</div>
          <div>Contact</div>
        </div>
      </div>
      <div className='col-span-1 h-[36px] '>
        <div className='grid grid-rows gap-5'>
          <div className='font-semibold'>ABOUT</div>
          <div>Privacy Policy</div>
          <div>Copyright</div>
          <div>Terms of Use</div>
        </div>
      </div>
      <div className='col-span-1 h-[36px] '>
        <div className='grid grid-rows gap-5'>
          <div className='font-semibold'>HELP</div>
          <div>Security</div>
          <div>Help Center</div>
          <div>Cookie Policy</div>
        </div>
      </div>
      <div className='col-span-1 h-[36px] '>
          <div className='font-semibold mb-5'>FOLLOW US</div>
        <div className='grid grid-cols-5 gap-3 w-[100px]'>
          <Link to="https://www.facebook.com/setupth/" className='hover:text-blue-500 transition' target="_blank">
            <i className="fa-brands fa-facebook-f" />
          </Link>
          <Link to="https://www.tiktok.com/@setupth.official" className='hover:text-fuchsia-400 transition' target="_blank">
            <i className="fa-brands fa-tiktok" />
          </Link>
          <Link to="https://www.youtube.com/@SETUPTHAILANDPROWRESTLING" className='hover:text-red-500 transition' target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </Link>
          <Link to="https://x.com/setupth" className='hover:text-blue-300 transition' target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com/setupth.official/" className='hover:text-rose-400 transition' target="_blank">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
      </div>
      <div className='col-span-1 h-[36px] '>
        <SetupIcon />
      </div>
    </footer>
  )
}