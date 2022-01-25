/* eslint-disable no-console */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import FormCard from 'components/FormCard';
import LoginForm from 'components/LoginForm';
import Loading from 'components/Spinner/components/loading';
import ToggleLanguage from 'components/ToggleLanguage';
import Wrapper from 'components/Wrapper';
import { signIn } from 'services/UsersService';
import { Credential } from 'utils/types';

function Login() {
  const { t } = useTranslation();
  const [errorMsg, setErrorMsg] = useState('');
  const { isLoading, isError, mutate } = useMutation((credential: Credential) => signIn(credential), {
    onSuccess: res => {
      console.log('access-token', res.headers!['access-token']);
      console.log('uid', res.headers?.uid);
      console.log('client', res.headers?.client);
    },
    onError: () => {
      setErrorMsg(t('ErrorRequest:notFound'));
    }
  });
  const onSubmit = (credential: Credential) => {
    mutate(credential);
  };

  return (
    <>
      <ToggleLanguage />
      <Wrapper>
        <FormCard>
          <LoginForm onSubmit={onSubmit} />
          <a className="btn-link" href="/sign_up">
            {t('Buttons:signUp')}
          </a>

          {isError && <span className="form-alert">{errorMsg}</span>}
          {isLoading && (
            <div className="row full-width center">
              <Loading name="circle" />
            </div>
          )}
        </FormCard>
      </Wrapper>
    </>
  );
}

export default Login;
