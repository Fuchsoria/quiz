const quizzes = [
  {
    title: 'Animals',
    quizzes: [
      {
        id: 100,
        question: 'What is this animal?',
        questionImage:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
        correctAnswerId: 'FG4fghfg3VB',
        answers: [
          { id: 'FG4Hj3R7d3VB', name: 'Cat' },
          { id: 'FG4fghfg3VB', name: 'Dog' },
          { id: 'FGrrty7d3VB', name: 'Whale' },
          { id: 'FG4HjklklsB', name: 'Eagle' },
        ],
      },
      {
        id: 101,
        question: 'What is this animal? 101',
        questionImage:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
        correctAnswerId: 'FG4fghfg3VB',
        answers: [
          { id: 'FG4Hj3R7d3VB', name: 'Cat' },
          { id: 'FG4fghfg3VB', name: 'Dog' },
          { id: 'FGrrty7d3VB', name: 'Whale' },
          { id: 'FG4HjklklsB', name: 'Eagle' },
        ],
      },
      {
        id: 102,
        question: 'What is this animal? 102',
        questionImage:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
        correctAnswerId: 'FG4fghfg3VB',
        answers: [
          { id: 'FG4Hj3R7d3VB', name: 'Cat' },
          { id: 'FG4fghfg3VB', name: 'Dog' },
          { id: 'FGrrty7d3VB', name: 'Whale' },
          { id: 'FG4HjklklsB', name: 'Eagle' },
        ],
      },
      {
        id: 103,
        question: 'What is this animal? 103',
        questionImage:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
        correctAnswerId: 'FG4fghfg3VB',
        answers: [
          { id: 'FG4Hj3R7d3VB', name: 'Cat' },
          { id: 'FG4fghfg3VB', name: 'Dog' },
          { id: 'FGrrty7d3VB', name: 'Whale' },
          { id: 'FG4HjklklsB', name: 'Eagle' },
        ],
      },
      {
        id: 104,
        question: 'What is this animal? 104',
        questionImage:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
        correctAnswerId: 'FG4fghfg3VB',
        answers: [
          { id: 'FG4Hj3R7d3VB', name: 'Cat' },
          { id: 'FG4fghfg3VB', name: 'Dog' },
          { id: 'FGrrty7d3VB', name: 'Whale' },
          { id: 'FG4HjklklsB', name: 'Eagle' },
        ],
      },
    ],
  },
  {
    title: 'Logos',
    quizzes: [],
  },
  {
    title: 'Series',
    quizzes: [],
  },
  {
    title: 'Anime',
    quizzes: [],
  },
];

const profile = { name: 'Kokoro', quizzesDone: 0, doneIds: [], failures: {} };

export { quizzes, profile };
