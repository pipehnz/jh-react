import React, { forwardRef, HTMLProps, Ref } from 'react';

import styles from './styles.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  type: 'text' | 'email' | 'password';
  error: string | undefined;
  idField: string;
}

function Input({ label, type, error, idField, ...props }: Props, ref: Ref<HTMLInputElement>) {
  return (
    <div className={styles.inputContent}>
      <label className={styles.formLabel} htmlFor={idField}>
        {label}
      </label>
      <input {...props} type={type} className={styles.formInput} ref={ref} id={idField} />
      {error && <small className={styles.formAlert}>{error}</small>}
    </div>
  );
}

export default forwardRef(Input);
