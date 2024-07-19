import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import validateRegister from './validators/validate-register';
import authApi from '../../apis/auth';
import { AxiosError } from 'axios';

 
const initialInput = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const initialInputError = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInputError });

      await authApi.register(input);
      setSuccessMessage('Registered successfully');
      setInput(initialInput);
      
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        if (err.response.data.field === 'email')
          console.log(err.response.data)
          setInputError(prev => ({
            ...prev,
            email: 'This email has been registered'
          }));
      }
      setSuccessMessage('')
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Input
            label="First name"
            value={input.first_name}
            name="first_name"
            onChange={handleChangeInput}
            error={inputError.first_name}
          />
        </div>
        <div>
          <Input
            label="Last name"
            value={input.last_name}
            name="last_name"
            onChange={handleChangeInput}
            error={inputError.last_name}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Email address"
            value={input.email}
            name="email"
            onChange={handleChangeInput}
            error={inputError.email}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Password"
            type="password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            error={inputError.password}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Confirm password"
            type="password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            error={inputError.confirmPassword}
          />
        </div>
        <div className="col-span-2 text-center ">
          <Button bg='white' color='black' width="full" height="14">
            Sign up
          </Button>
        </div>
      </div>
    {successMessage && (
      <div className="mt-4 p-2 bg-setup-bright text-black text-center rounded">
        {successMessage}
      </div>
    )}
    </form>
  );
}
