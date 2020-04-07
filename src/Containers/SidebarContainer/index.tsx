import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { SidebarContainerProps } from '../../interfaces';
import SidebarMenu from '../../Components/SidebarMenu';
import { setCurrentCategory } from '../../Store/navigationActions';
import styles from './styles.module.scss';

const { Sider } = Layout;

class SidebarContainer extends Component<SidebarContainerProps> {
  handleCategoryClick = (category: string) => () => {
    this.props.dispatch(setCurrentCategory(category));
  };

  render() {
    return (
      <Sider className={styles.sider}>
        {this.props.quizNavigation.categories.length && (
          <SidebarMenu
            submenus={[
              {
                title: 'Categories',
                categories: this.props.quizNavigation.categories,
              },
            ]}
            handleCategoryClick={this.handleCategoryClick}
          />
        )}
      </Sider>
    );
  }
}

const mapStateToProps = (store: any) => {
  const { quizNavigation } = store;

  return { quizNavigation };
};

export default connect(mapStateToProps)(SidebarContainer);
