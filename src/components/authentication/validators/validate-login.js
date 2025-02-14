import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});

const validateLogin = input => {
  // console.log(input)
  const { error } = loginSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
};

export default validateLogin;
