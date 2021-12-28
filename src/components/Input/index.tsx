import React, { forwardRef, LegacyRef } from 'react';

import styles from './styles.module.scss';

type Props = {
  name?: string;
  label: string;
  type: string;
  error: string | undefined;
};

function Input({ label, name, type, error }: Props, ref: LegacyRef<HTMLInputElement> | undefined) {
  return (
    <div className={styles.inputContent}>
      <label className={styles.formLabel}>{label}</label>
      <input name={name} type={type} className={styles.formInput} ref={ref} />
      {error && <small className={styles.formAlert}>{error}</small>}
    </div>
  );
}

export default forwardRef(Input);
