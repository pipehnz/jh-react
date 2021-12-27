import React from 'react';

import styles from './styles.module.scss';

function FormCard(props: any) {
  return (
    <div className={styles.card}>
      <div className={styles.appLogo} />
      {props.children}
    </div>
  );
}

export default FormCard;
