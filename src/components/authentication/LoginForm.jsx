import { useState, useContext } from 'react';
import { AxiosError } from 'axios';

import Button from '../Button';
import Input from '../Input';
import validateLogin from './validators/validate-login';
import { AuthContext } from '../../contexts/AuthContext';

const initialInput = {
  email: '',
  password: ''
};

const initialInputError = {
  email: '',
  password: ''
};

export default function LoginForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useContext(AuthContext)

  const handleChangeInput = e => setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitForm = async e => {
    e.preventDefault();
    try {
      const error = validateLogin(input);

      if (error) return setInputError(error);

      setInputError(initialInputError);

      await login(input);
      
      onSuccess()

    } catch (err) {
      console.log(err);

      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? 'invalid email'
            : 'internal server error';

        // return toast.error(message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-8">
        <div>
          <Input
            label="Enter your email"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            error={inputError.email}
          />
        </div>
        <div>
          <Input
            label="Enter your password"
            type="password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            error={inputError.password}
          />
        </div>
        <div>
          <Button width="full" height="14" bg='white' color='black' >Sign In</Button>
        </div>
      </div>
    </form>
  );
}
