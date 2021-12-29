import React from 'react';
import { useForm } from 'react-hook-form';

import FormCard from '../../components/FormCard';
import Input from '../../components/Input';
import { User } from '../../utils/types';

function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<User>();
  // eslint-disable-next-line no-console
  const onSubmit = (data: User) => console.log(data);

  return (
    <FormCard>
      <div className="content-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('firstName', { required: 'Campo requerido' })}
            label="Nombre"
            type="text"
            error={errors.firstName?.message}
          />

          <Input
            {...register('lastName', { required: 'Campo requerido' })}
            label="Apellido"
            type="text"
            error={errors.lastName?.message}
          />
          <Input
            {...register('email', {
              required: 'Campo requerido',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'El valor introducido no coincide con el formato del correo electrónico'
              }
            })}
            label="Email"
            type="email"
            error={errors.email?.message}
          />
          <Input
            {...register('password', {
              required: 'Campo requerido',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'La contraseña debe de tener mínimo 8 carácteres, al menos una letra y un número'
              }
            })}
            label="Password"
            type="password"
            error={errors.password?.message}
          />
          <Input
            {...register('passwordConfirmation', {
              required: 'Campo requerido',
              validate: {
                match: v => v === getValues().password || 'Las contraseñas no coinciden'
              }
            })}
            label="Confirmación de Password"
            type="password"
            error={errors.passwordConfirmation?.message}
          />

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
