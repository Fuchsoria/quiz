import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { ContentContainerProps } from '../../interfaces';
import Quiz from '../../Components/Quiz';
import QuizProgress from '../../Components/QuizProgress';
import QuizErrorMessage from '../../Components/QuizErrorMessage';
import styles from './styles.module.scss';

const { Content } = Layout;

class ContentContainer extends Component<ContentContainerProps> {
  private correctAnswerId: string;

  constructor(props: ContentContainerProps) {
    super(props);

    this.correctAnswerId = '';
  }

  handleAnswer = (id: string) => () => {
    console.log(id === this.correctAnswerId ? 'Answer is Correct!' : 'Answer is not correct');
    console.log('Answer ID', id);
  };

  render() {
    console.log(this.props);
    const currentCategoryName = this.props.quizNavigation.current;
    const [currentCategory] = this.props.quizzes.filter(({ title }) => title === currentCategoryName);
    const allQuizzes = currentCategory && currentCategory.quizzes.length > 0 ? currentCategory.quizzes : [];
    const notDoneQuizzes = currentCategory
      ? currentCategory.quizzes.filter(({ id }) => !this.props.profile.doneIds.includes(id))
      : [];
    const currentQuiz = notDoneQuizzes.length ? notDoneQuizzes[0] : null;
    console.log(currentQuiz);
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
