import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import FormCard from '../../components/FormCard';
import Input from '../../components/Input';
import { User } from '../../utils/types';
import { regexEmail, regexPassword } from '../../constants/forms';
import { signUp } from '../../services/UsersService';
import Loading from '../../components/Spinner/components/loading';

function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<User>();
  const { t } = useTranslation();
  const [errorMsg, setErrorMsg] = useState('');
  const { isLoading, isError, mutate } = useMutation((data: User) => signUp(data), {
    onSuccess: res => {
      // eslint-disable-next-line no-console
      console.log('res', res);
    },
    onError: () => {
      setErrorMsg(t('errorRequest.network'));
    }
  });
  const onSubmit = () => {
    mutate(getValues());
  };

  return (
    <FormCard>
      <div className="content-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('firstName', { required: t('Validations:required') })}
            label={t('SignUp:firstName')}
            type="text"
            error={errors.firstName?.message}
          />

          <Input
            {...register('lastName', { required: t('Validations:required') })}
            label={t('SignUp:lastName')}
            type="text"
            error={errors.lastName?.message}
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
          />

          {isError && <span className="form-alert">{errorMsg}</span>}

          {isLoading && (
            <div className="row full-width center">
              <Loading name="circle" />
            </div>
          )}

          <button className="btn-submit" type="submit">
            {t('Buttons:signUp')}
          </button>
        </form>
      </div>
      <a className="btn-link" href=".">
        {t('Buttons:login')}
      </a>
    </FormCard>
  );
}

export default SignUp;
