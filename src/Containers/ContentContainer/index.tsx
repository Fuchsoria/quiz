import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { ContentContainerProps } from '../../interfaces';
import Quiz from '../../Components/Quiz';
import QuizProgress from '../../Components/QuizProgress';
import QuizErrorMessage from '../../Components/QuizErrorMessage';
import { setLatestAnswer, clearLatestAnswer } from '../../Store/answersActions';
import styles from './styles.module.scss';

const { Content } = Layout;

class ContentContainer extends Component<ContentContainerProps> {
  private correctAnswerId: string;

  constructor(props: ContentContainerProps) {
    super(props);

    this.correctAnswerId = '';
  }

  unsetLatestAnswer = (id: string) => () => {
    this.props.dispatch(clearLatestAnswer(id));
  };

  handleCorrectAnswer = (id: string) => {
    this.props.dispatch(setLatestAnswer(id, true));
  };

  handleIncorrectAnswer = (id: string) => {
    this.props.dispatch(setLatestAnswer(id, false));
    setTimeout(this.unsetLatestAnswer(id), 2000);
  };

  handleAnswer = (id: string) => () => {
    if (id === this.correctAnswerId) {
      this.handleCorrectAnswer(id);
    } else {
      this.handleIncorrectAnswer(id);
    }
    console.log('Answer ID', id);
  };

  render() {
    const currentCategoryName = this.props.quizNavigation.current;
    const [currentCategory] = this.props.quizzes.filter(({ title }) => title === currentCategoryName);
    const allQuizzes = currentCategory && currentCategory.quizzes.length > 0 ? currentCategory.quizzes : [];
    const notDoneQuizzes = currentCategory
      ? currentCategory.quizzes.filter(({ id }) => !this.props.profile.doneIds.includes(id))
      : [];
    const currentQuiz = notDoneQuizzes.length ? notDoneQuizzes[0] : null;

    this.correctAnswerId = currentQuiz && currentQuiz.correctAnswerId ? currentQuiz.correctAnswerId : '';

    return (
      <Content className={styles.content}>
        {allQuizzes.length <= 0 && <QuizErrorMessage message="No quizzes in this category." />}
        {!currentQuiz && allQuizzes.length > 0 && (
          <>
            <QuizProgress done={allQuizzes.length - notDoneQuizzes.length} max={allQuizzes.length} />
            <QuizErrorMessage message="You have done all Quizzes!" />
          </>
        )}
        {currentQuiz && allQuizzes.length > 0 && (
          <>
            <QuizProgress done={allQuizzes.length - notDoneQuizzes.length} max={allQuizzes.length} />
            <Quiz current={currentQuiz} handleAnswer={this.handleAnswer} />
          </>
        )}
      </Content>
    );
  }
}

const mapStateToProps = (store: any) => {
  const { quizNavigation, quizzes, profile } = store;

  return { quizNavigation, quizzes, profile };
};

export default connect(mapStateToProps)(ContentContainer);
