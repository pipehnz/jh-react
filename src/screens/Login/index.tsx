import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

import FormCard from 'components/FormCard';
import LoginForm from 'components/LoginForm';
import Loading from 'components/Spinner/components/loading';
import ToggleLanguage from 'components/ToggleLanguage';
import Wrapper from 'components/Wrapper';
import LocalStorageService from 'services/LocalStorageService';
import { signIn } from 'services/UsersService';
import { Credential } from 'utils/types';
import api from 'config/api';

function Login() {
  const { t } = useTranslation();
  const history = useHistory();

  const [errorMsg, setErrorMsg] = useState('');
  const { isLoading, isError, mutate } = useMutation((credential: Credential) => signIn(credential), {
    onSuccess: ({ headers }) => {
      const token = headers!['access-token'] || '';
      const client = headers?.client || '';
      const uid = headers?.uid || '';
      LocalStorageService.setValue('access-token', token);
      LocalStorageService.setValue('client', client);
      LocalStorageService.setValue('uid', uid);
      api.setHeader('access-token', token);
      api.setHeader('client', client);
      api.setHeader('uid', uid);
      history.push('/home');
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
