import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import FormCard from '../../components/FormCard';
import { User } from '../../utils/types';

function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<User>();
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<User> = () => console.log(getValues());

  return (
    <FormCard>
      <div className="content-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-label">Nombre</label>
          <div className="input-content">
            <input
              className="form-input"
              name="firstName"
              type="text"
              ref={register({ required: 'Field required' })}
            />
            {errors.firstName && <small className="form-alert">{errors.firstName.message}</small>}
          </div>

          <label className="form-label">Apellido</label>
          <div className="input-content">
            <input
              className="form-input"
              name="lastName"
              type="text"
              ref={register({ required: 'Field required' })}
            />
            {errors.lastName && <small className="form-alert">{errors.lastName.message}</small>}
          </div>

          <label className="form-label">Email</label>
          <div className="input-content">
            <input
              className="form-input"
              name="email"
              type="email"
              ref={register({
                required: 'Field required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format'
                }
              })}
            />
            {errors.email && <small className="form-alert">{errors.email.message}</small>}
          </div>

          <label className="form-label">Password</label>
          <div className="input-content">
            <input
              className="form-input"
              name="password"
              type="password"
              ref={register({
                required: 'Field required'
              })}
            />
            {errors.password && <small className="form-alert">{errors.password.message}</small>}
          </div>

          <label className="form-label">Confirmación de Password</label>
          <div className="input-content">
            <input
              className="form-input"
              name="passwordConfirmation"
              type="password"
              ref={register({
                required: 'Field required',
                validate: {
                  match: v => v === getValues().password || 'Passwords do not match'
                }
              })}
            />
            {errors.passwordConfirmation && (
              <small className="form-alert">{errors.passwordConfirmation.message}</small>
            )}
          </div>

          <button className="btn-submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <a className="btn-link" href=".">
        Login
      </a>
    </FormCard>
  );
}

export default SignUp;
