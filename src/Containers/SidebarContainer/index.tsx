import React from 'react';
import { Layout } from 'antd';
import SidebarMenu from '../../Components/SidebarMenu';
import styles from './styles.module.scss';

const { Sider } = Layout;

export default function SidebarContainer() {
  return (
    <Sider className={styles.sider}>
      <SidebarMenu />
    </Sider>
  );
}
