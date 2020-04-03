import React from 'react';
import { Layout } from 'antd';
import styles from './styles.module.scss';
import classNames from 'classnames';
import HeaderContainer from '../HeaderContainer';
import SidebarContainer from '../SidebarContainer';
import ContentContainer from '../ContentContainer';
import QuizBreadcrumb from '../../Components/QuizBreadcrumb';

export default function LayoutContainer() {
  return (
    <Layout className={styles.layout}>
      <HeaderContainer />
      <Layout className={classNames([styles.container, styles.container_flex])}>
        <SidebarContainer />
        <Layout className={styles['content-layout']}>
          <QuizBreadcrumb />
          <ContentContainer />
        </Layout>
      </Layout>
    </Layout>
  );
}
