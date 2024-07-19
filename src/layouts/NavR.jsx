import { useState, useContext } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal'
import RegisterForm from '../components/authentication/RegisterForm';
import LoginForm from '../components/authentication/LoginForm';
import { AuthContext } from '../contexts/AuthContext';

export default function NavR() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => logout()

  return (
    
    <nav className='flex font-semibold text-lg gap-4'>
      {user ? (
        <Button bg="white" color="black" onClick={handleLogout}>Sign Out</Button>
      ) : (
        <>
          <Button bg="setup-dark" color="white" onClick={() => setOpenSignUp(true)}>
            SIGN UP
          </Button>
          <Button bg="white" color="black" onClick={() => setOpenSignIn(true)}>
            SIGN IN
          </Button>
          
          <Modal title="Sign Up" open={openSignUp} onClose={() => setOpenSignUp(false)}>
            <RegisterForm onSuccess={() => setOpenSignUp(false)} />
          </Modal>

          <Modal title="Sign In" open={openSignIn} onClose={() => setOpenSignIn(false)}>
            <LoginForm onSuccess={() => setOpenSignIn(false)} />
          </Modal>
        </>
      )  
    }
    </nav>
  )
}