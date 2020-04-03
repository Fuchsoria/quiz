import React from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const { SubMenu, Item } = Menu;
const title: JSX.Element = (
  <span>
    <UserOutlined /> Categories
  </span>
);

export default function SidebarMenu() {
  return (
    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} className={styles.menu}>
      <SubMenu key="sub1" title={title}>
        <Item key="1">Animals</Item>
        <Item key="2">Logos</Item>
        <Item key="4">Series</Item>
        <Item key="3">Anime</Item>
      </SubMenu>
    </Menu>
  );
}
