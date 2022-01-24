import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { User } from 'utils/types';
import { regexEmail, regexPassword } from 'constants/forms';

import Input from '../Input';

type Props = {
  onSubmit: SubmitHandler<User>;
};

function SignUpForm({ onSubmit }: Props) {
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors }
  } = useForm<User>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('firstName', { required: t('Validations:required') })}
        label={t('SignUp:firstName')}
        type="text"
        error={errors.firstName?.message}
        idField="firstName"
      />

      <Input
        {...register('lastName', { required: t('Validations:required') })}
        label={t('SignUp:lastName')}
        type="text"
        error={errors.lastName?.message}
        idField="lastName"
      />
      <Input
        {...register('email', {
          required: t('Validations:required'),
          pattern: {
            value: regexEmail,
            message: t('Validations:email')
          }
        })}
        label={t('SignUp:email')}
        type="email"
        error={errors.email?.message}
        idField="email"
      />
      <Input
        {...register('password', {
          required: t('Validations:required'),
          pattern: {
            value: regexPassword,
            message: t('Validations:password')
          }
        })}
        label={t('SignUp:password')}
        type="password"
        error={errors.password?.message}
        idField="password"
      />
      <Input
        {...register('passwordConfirmation', {
          required: t('Validations:required'),
          validate: {
            match: v => v === getValues().password || t('Validations:matchPassword')
          }
        })}
        label={t('SignUp:passwordConfirmation')}
        type="password"
        error={errors.passwordConfirmation?.message}
        idField="passwordConfirmation"
      />

      <button className="btn-submit" type="submit">
        {t('Buttons:signUp')}
      </button>
    </form>
  );
}

export default SignUpForm;
