import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

function Wrapper({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
