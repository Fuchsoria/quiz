import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LayoutContainer from './Containers/LayoutContainer';
import { initStore } from './Store';
import { quizzes, profile } from './testData';
import { setQuizzes } from './Store/quizzesActions';
import { setProfile } from './Store/userActions';
import { setQuizCategories, setCurrentCategory } from './Store/navigationActions';

const { store } = initStore();

export default class App extends Component {
  componentDidMount() {
    const categories = quizzes.map(({ title }) => ({ title }));
    
    store.dispatch(setQuizCategories(categories));
    store.dispatch(setCurrentCategory(categories[0].title));
    store.dispatch(setQuizzes(quizzes));
    store.dispatch(setProfile(profile));

    console.log(store.getState());
  }

  render() {
    return (
      <Provider store={store}>
        <LayoutContainer />
      </Provider>
    );
  }
}
