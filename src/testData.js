const quizzes = [
  {
    title: 'Animals',
    quizzes: [
      {
        id: 0,
        question: 'What is this animal?',
        questionImage:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
        correctAnswerId: 'FG4fghfg3VB',
        answers: [
          { id: 'FG4Hj3R7d3VB', name: 'Cat' },
          { id: 'FG4fghfg3VB', name: 'Dog' },
          { id: 'FGrrty7d3VB', name: 'Whale' },
          { id: 'FG4HjklklsB', name: 'Eagle' }
        ]
      }
    ]
  },
  {
    title: 'Logos',
    quizzes: []
  },
  {
    title: 'Series',
    quizzes: []
  },
  {
    title: 'Anime',
    quizzes: []
  }
];

const profile = { name: 'Kokoro', quizzesDone: 150, doneIds: [0] };

export { quizzes, profile };
