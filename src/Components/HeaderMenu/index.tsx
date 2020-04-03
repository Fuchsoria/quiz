import React from 'react';
import { Menu } from 'antd';
// import styles from './styles.module.scss';

export default function HeaderMenu() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2" disabled>
        Profile
      </Menu.Item>
    </Menu>
  );
}
