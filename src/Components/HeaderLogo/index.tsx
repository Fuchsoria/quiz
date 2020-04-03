import React from 'react';
import { HeaderLogoProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function HeaderLogo({ logo }: HeaderLogoProps) {
  return <div className={styles.logo}>{logo}</div>;
}
