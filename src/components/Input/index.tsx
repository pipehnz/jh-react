import React, { forwardRef, HTMLProps, Ref } from 'react';

import styles from './styles.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  type: 'text' | 'email' | 'password';
  error: string | undefined;
}

function Input({ label, type, error, ...props }: Props, ref: Ref<HTMLInputElement>) {
  return (
    <div className={styles.inputContent}>
      <label className={styles.formLabel}>{label}</label>
      <input {...props} type={type} className={styles.formInput} ref={ref} />
      {error && <small className={styles.formAlert}>{error}</small>}
    </div>
  );
}

export default forwardRef(Input);
