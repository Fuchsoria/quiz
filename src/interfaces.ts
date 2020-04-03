export interface AnswerProps {
  answer: string;
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
}

export interface SidebarMenuProps {
  submenus: {
    title: string;
    categories: {
      title: string;
    }[];
  }[];
}

export interface QuizProgressProps {
  done: number;
  max: number;
}
