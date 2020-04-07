import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import classNames from 'classnames';
import HeaderContainer from '../HeaderContainer';
import SidebarContainer from '../SidebarContainer';
import ContentContainer from '../ContentContainer';
import QuizBreadcrumb from '../../Components/QuizBreadcrumb';
import { LayoutContainerProps } from '../../interfaces';
import styles from './styles.module.scss';

function LayoutContainer({ quizNavigation }: LayoutContainerProps) {
  return (
    <Layout className={styles.layout}>
      <HeaderContainer />
      <Layout className={classNames([styles.container, styles.container_flex])}>
        <SidebarContainer />
        <Layout className={styles['content-layout']}>
          <QuizBreadcrumb quizNavigation={quizNavigation} />
          <ContentContainer />
        </Layout>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (store: any) => {
  const { quizNavigation } = store;

  return { quizNavigation };
};

export default connect(mapStateToProps)(LayoutContainer);
