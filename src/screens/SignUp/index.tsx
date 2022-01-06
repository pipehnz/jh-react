import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <FormCard>
      <div className="content-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('firstName', { required: t('validations.required') as string })}
            label={t('signUp.firstName')}
            type="text"
            error={errors.firstName?.message}
          />

          <Input
            {...register('lastName', { required: t('validations.required') as string })}
            label={t('signUp.lastName')}
            type="text"
            error={errors.lastName?.message}
          />
          <Input
            {...register('email', {
              required: t('validations.required') as string,
              pattern: {
                value: regexEmail,
                message: t('validations.email') as string
              }
            })}
            label={t('signUp.email')}
            type="email"
            error={errors.email?.message}
          />
          <Input
            {...register('password', {
              required: t('validations.required') as string,
              pattern: {
                value: regexPassword,
                message: t('validations.password') as string
              }
            })}
            label={t('signUp.password')}
            type="password"
            error={errors.password?.message}
          />
          <Input
            {...register('passwordConfirmation', {
              required: t('validations.required') as string,
              validate: {
                match: v => v === getValues().password || (t('validations.matchPassword') as string)
              }
            })}
            label={t('signUp.passwordConfirmation')}
            type="password"
            error={errors.passwordConfirmation?.message}
          />

          <button className="btn-submit" type="submit">
            {t('buttons.signUp')}
          </button>
        </form>
      </div>
      <a className="btn-link" href=".">
        {t('buttons.login')}
      </a>
    </FormCard>
  );
}

export default SignUp;
