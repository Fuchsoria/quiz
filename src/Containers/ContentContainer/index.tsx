import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { ContentContainerProps } from '../../interfaces';
import { DELAY_AFTER_ANSWER } from '../../Configurations/config';
import Quiz from '../../Components/Quiz';
import QuizProgress from '../../Components/QuizProgress';
import QuizErrorMessage from '../../Components/QuizErrorMessage';
import { setLatestAnswer, clearLatestAnswer } from '../../Store/answersActions';
import { addDoneQuiz, addFailure } from '../../Store/userActions';
import styles from './styles.module.scss';

const { Content } = Layout;

class ContentContainer extends Component<ContentContainerProps> {
  private correctAnswerId: string;
  private currentCategoryName: string;
  private quizId: number;

  constructor(props: ContentContainerProps) {
    super(props);

    this.correctAnswerId = '';
    this.currentCategoryName = '';
    this.quizId = 0;
  }

  unsetLatestAnswer = (id: string) => {
    this.props.dispatch(clearLatestAnswer(id));
  };

  addDoneQuizToProfile = (answerId: string, quizId: number) => {
    this.unsetLatestAnswer(answerId);
    this.props.dispatch(addDoneQuiz(quizId));
  };

  handleCorrectAnswer = (id: string) => {
    this.props.dispatch(setLatestAnswer(id, true));
    setTimeout(() => this.addDoneQuizToProfile(id, this.quizId), DELAY_AFTER_ANSWER);
  };

  handleIncorrectAnswer = (id: string) => {
    this.props.dispatch(setLatestAnswer(id, false));
    this.props.dispatch(addFailure(this.currentCategoryName));
    setTimeout(() => this.unsetLatestAnswer(id), DELAY_AFTER_ANSWER);
  };

  handleAnswer = (id: string) => () => {
    if (id === this.correctAnswerId) {
      this.handleCorrectAnswer(id);
    } else {
      this.handleIncorrectAnswer(id);
    }
  };

  render() {
    if (!this.props.quizNavigation.current || !this.props.quizzes.length) {
      return null;
    }

    const currentCategoryName = this.props.quizNavigation.current;
    const [currentCategory] = this.props.quizzes.filter(({ title }) => title === currentCategoryName);
    const allQuizzes = currentCategory.quizzes;
    const notDoneQuizzes = currentCategory.quizzes.filter(({ id }) => !this.props.profile.doneIds.includes(id));
    const currentQuiz = notDoneQuizzes[0];
    const currentFailures = this.props.profile.failures[currentCategoryName] || 0;

    this.correctAnswerId = currentQuiz && currentQuiz.correctAnswerId;
    this.currentCategoryName = currentCategoryName;
    this.quizId = currentQuiz && currentQuiz.id;

    if (allQuizzes.length <= 0) {
      return (
        <Content className={styles.content}>
          <QuizErrorMessage message="No quizzes in this category." />
        </Content>
      );
    } else if (!currentQuiz && allQuizzes.length > 0) {
      return (
        <Content className={styles.content}>
          <QuizProgress done={allQuizzes.length - notDoneQuizzes.length} max={allQuizzes.length} />
          <QuizErrorMessage message={`You have done all Quizzes! With ${currentFailures} failures`} />
        </Content>
      );
    } else if (currentQuiz && allQuizzes.length > 0) {
      return (
        <Content className={styles.content}>
          <div className={styles['content__infos']}>
            <p>Failures: {currentFailures}</p>
            <QuizProgress done={allQuizzes.length - notDoneQuizzes.length} max={allQuizzes.length} />
          </div>
          <Quiz current={currentQuiz} handleAnswer={this.handleAnswer} />
        </Content>
      );
    }
  }
}

const mapStateToProps = (store: any) => {
  const { quizNavigation, quizzes, profile } = store;

  return { quizNavigation, quizzes, profile };
};

export default connect(mapStateToProps)(ContentContainer);
