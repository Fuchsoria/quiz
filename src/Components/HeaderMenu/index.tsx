import React from 'react';
import { Menu } from 'antd';
import { HeaderMenuProps } from '../../interfaces';
// import styles from './styles.module.scss';

export default function HeaderMenu({ menuItems = [] }: HeaderMenuProps) {
  const firstItem = menuItems[0].name;

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[firstItem]}>
      {menuItems.map(item => (
        <Menu.Item key={item.name} disabled={item.disabled}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
}
