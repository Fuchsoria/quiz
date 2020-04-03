import React from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { SidebarMenuProps } from '../../interfaces';
import styles from './styles.module.scss';

const { SubMenu, Item } = Menu;
const createTitle = (title: string): JSX.Element => (
  <span>
    <UserOutlined /> {title}
  </span>
);

export default function SidebarMenu({ submenus }: SidebarMenuProps) {
  const firstMenu = submenus[0];
  const firstMenuItem = firstMenu.categories[0];

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[firstMenuItem.title]}
      defaultOpenKeys={[firstMenu.title]}
      className={styles.menu}
    >
      {submenus.map(({ title, categories }) => (
        <SubMenu key={title} title={createTitle(title)}>
          {categories.map(category => (
            <Item key={category.title}>{category.title}</Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
}
