import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Credential } from 'utils/types';
import { regexEmail } from 'constants/forms';

import Input from '../Input';

interface Props {
  onSubmit: SubmitHandler<Credential>;
}

function LoginForm({ onSubmit }: Props) {
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Credential>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          required: t('Validations:required'),
          pattern: {
            value: regexEmail,
            message: t('Validations:email')
          }
        })}
        label={t('Login:email')}
        type="email"
        error={errors.email?.message}
        idField="email"
      />
      <Input
        {...register('password', { required: t('Validations:required') })}
        label={t('Login:password')}
        type="password"
        error={errors.password?.message}
        idField="password"
      />
      <button className="btn-submit" type="submit">
        {t('Buttons:login')}
      </button>
    </form>
  );
}

export default LoginForm;
