import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface FormCardProps {
  children: ReactNode;
}

function FormCard({ children }: FormCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.appLogo} />
      {children}
    </div>
  );
}

export default FormCard;
