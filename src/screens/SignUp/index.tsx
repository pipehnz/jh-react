import React from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import FormCard from '../../components/FormCard';
import Input from '../../components/Input';
import { User } from '../../utils/types';
import { regexEmail, regexPassword } from '../../constants/forms';

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
            {...register('firstName', { required: i18next.t('Validations:required') as string })}
            label={i18next.t('SignUp:firstName')}
            type="text"
            error={errors.firstName?.message}
          />

          <Input
            {...register('lastName', { required: i18next.t('Validations:required') as string })}
            label={i18next.t('SignUp:lastName')}
            type="text"
            error={errors.lastName?.message}
          />
          <Input
            {...register('email', {
              required: i18next.t('Validations:required') as string,
              pattern: {
                value: regexEmail,
                message: i18next.t('Validations:email') as string
              }
            })}
            label={i18next.t('SignUp:email')}
            type="email"
            error={errors.email?.message}
          />
          <Input
            {...register('password', {
              required: i18next.t('Validations:required') as string,
              pattern: {
                value: regexPassword,
                message: i18next.t('Validations:password') as string
              }
            })}
            label={i18next.t('SignUp:password')}
            type="password"
            error={errors.password?.message}
          />
          <Input
            {...register('passwordConfirmation', {
              required: i18next.t('Validations:required') as string,
              validate: {
                match: v =>
                  v === getValues().password || (i18next.t('Validations:passwordConfirmation') as string)
              }
            })}
            label={i18next.t('SignUp:passwordConfirmation')}
            type="password"
            error={errors.passwordConfirmation?.message}
          />

          <button className="btn-submit" type="submit">
            {i18next.t('Buttons:signUp')}
          </button>
        </form>
      </div>
      <a className="btn-link" href=".">
        {i18next.t('Buttons:login')}
      </a>
    </FormCard>
  );
}

export default SignUp;
