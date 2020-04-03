import React from 'react';
import { Layout } from 'antd';
import HeaderLogo from '../../Components/HeaderLogo';
import HeaderMenu from '../../Components/HeaderMenu';
import styles from './styles.module.scss';

const { Header } = Layout;

export default function HeaderContainer() {
  return (
    <Header className={styles.header}>
      <HeaderLogo />
      <HeaderMenu />
    </Header>
  );
}
