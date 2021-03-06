export interface AnswerProps {
  answer: string;
  id: string;
  isCorrect?: boolean;
  isLatest?: boolean;
  isDisabled?: boolean;
  handleAnswer: (id: string) => () => void;
}
export interface HeaderLogoProps {
  logo: string;
}

export interface HeaderMenuProps {
  menuItems: {
    name: string;
    link: string;
    disabled: boolean;
  }[];
}

export interface QuestionProps {
  question: string;
}

export interface QuestionImageProps {
  source: string;
}

export interface AnswersListProps {
  answers: {
    id: string;
    name: string;
  }[];
  handleAnswer: (id: string) => () => void;
  answersStore: { latestAnswer: string; isCorrect: boolean };
  isDisabled: boolean;
}

export interface SidebarMenuProps {
  submenus: {
    title: string;
    categories: {
      title: string;
    }[];
  }[];
  handleCategoryClick: (category: string) => () => void;
}

export interface QuizProgressProps {
  done: number;
  max: number;
}

export interface SidebarContainerProps {
  quizNavigation: { categories: [] };
  dispatch(action: any): void;
}

export interface ContentContainerProps {
  quizNavigation: any;
  quizzes: {
    title: string;
    quizzes: {
      id: number;
      question: string;
      questionImage: string;
      correctAnswerId: string;
      answers: { id: string; name: string }[];
    }[];
  }[];
  profile: { doneIds: number[]; failures: { [propName: string]: number } };
  dispatch(action: any): void;
}

export interface QuizProps {
  current: {
    id: number;
    question: string;
    questionImage: string;
    correctAnswerId: string;
    answers: { id: string; name: string }[];
  };
  handleAnswer: (id: string) => () => void;
}

export interface QuizErrorMessageProps {
  message: string;
}

export interface LayoutContainerProps {
  quizNavigation: {
    current: string;
  };
}

export interface QuizBreadcrumbProps {
  quizNavigation: {
    current: string;
  };
}
