import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import FormCard from 'components/FormCard';
import SignUpForm from 'components/SignUpForm';
import Loading from 'components/Spinner/components/loading';
import Wrapper from 'components/Wrapper';
import { signUp } from 'services/UsersService';
import { User } from 'utils/types';

function SignUp() {
  const { t } = useTranslation();
  const [errorMsg, setErrorMsg] = useState('');
  const { isLoading, isError, mutate } = useMutation((data: User) => signUp(data), {
    onSuccess: res => {
      // eslint-disable-next-line no-console
      console.log('res', res);
    },
    onError: () => {
      setErrorMsg(t('ErrorRequest:network'));
    }
  });
  const onSubmit = (user: User) => {
    mutate(user);
  };

  return (
    <FormCard>
      <Wrapper>
        <SignUpForm onSubmit={onSubmit} />
      </Wrapper>
      <a className="btn-link" href=".">
        {t('Buttons:login')}
      </a>

      {isError && <span className="form-alert">{errorMsg}</span>}
      {isLoading && (
        <div className="row full-width center">
          <Loading name="circle" />
        </div>
      )}
    </FormCard>
  );
}

export default SignUp;
