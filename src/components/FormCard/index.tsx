import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

function FormCard({ children }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.appLogo} />
      {children}
    </div>
  );
}

export default FormCard;
