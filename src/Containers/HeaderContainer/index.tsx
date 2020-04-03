import React from 'react';
import { Layout } from 'antd';
import HeaderLogo from '../../Components/HeaderLogo';
import HeaderMenu from '../../Components/HeaderMenu';
import styles from './styles.module.scss';

const { Header } = Layout;

export default function HeaderContainer() {
  return (
    <Header>
      <header className={styles.header}>
        <HeaderLogo logo={'Quiz'} />
        <HeaderMenu
          menuItems={[
            { name: 'Home', link: 'home', disabled: false },
            { name: 'Profile', link: 'profile', disabled: true }
          ]}
        />
      </header>
    </Header>
  );
}
