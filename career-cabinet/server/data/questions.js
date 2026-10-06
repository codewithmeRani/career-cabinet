// Each option adds points to one or more streams.
const q = (id, text, options) => ({ id, text, options });

module.exports = [
  q(1, 'Which school subject do you enjoy the most?', [
    { text: 'Maths or Computer Science', scores: { engineering: 3, science: 1 } },
    { text: 'Biology', scores: { medical: 3, science: 1 } },
    { text: 'Economics or Business Studies', scores: { commerce: 3 } },
    { text: 'Languages, History or Civics', scores: { arts: 2, law: 2 } }
  ]),
  q(2, 'What would you most like to do in your free time?', [
    { text: 'Build or fix gadgets, or write code', scores: { engineering: 3 } },
    { text: 'Draw, design or make videos', scores: { design: 3, arts: 1 } },
    { text: 'Read about science discoveries', scores: { science: 3, medical: 1 } },
    { text: 'Debate, write or follow the news', scores: { law: 2, arts: 2 } }
  ]),
  q(3, 'Which kind of problem sounds most interesting?', [
    { text: 'Designing an app that thousands of people can use', scores: { engineering: 3, design: 1 } },
    { text: 'Finding a cure or treatment for a disease', scores: { medical: 3, science: 2 } },
    { text: 'Helping a business make more profit', scores: { commerce: 3 } },
    { text: 'Making society fairer through rules and policy', scores: { law: 3, arts: 1 } }
  ]),
  q(4, 'How do you prefer to work?', [
    { text: 'Alone, focused on a technical problem', scores: { engineering: 2, science: 2 } },
    { text: 'With people, helping them directly', scores: { medical: 3, arts: 1 } },
    { text: 'Leading a team and making decisions', scores: { commerce: 3, law: 1 } },
    { text: 'Creatively, with freedom to express ideas', scores: { design: 3, arts: 2 } }
  ]),
  q(5, 'Which of these sounds like your dream workplace?', [
    { text: 'A tech company or start-up', scores: { engineering: 3, commerce: 1 } },
    { text: 'A hospital or clinic', scores: { medical: 3 } },
    { text: 'A research lab or university', scores: { science: 3, arts: 1 } },
    { text: 'A court, government office or newsroom', scores: { law: 3, arts: 1 } }
  ]),
  q(6, 'How comfortable are you with numbers and data?', [
    { text: 'Very comfortable, I enjoy them', scores: { engineering: 2, commerce: 2, science: 2 } },
    { text: 'Comfortable if there is a clear purpose', scores: { medical: 1, commerce: 1, engineering: 1 } },
    { text: 'I prefer words and ideas to numbers', scores: { arts: 3, law: 2 } },
    { text: 'I prefer visuals and shapes to numbers', scores: { design: 3 } }
  ]),
  q(7, 'What motivates you most in a career?', [
    { text: 'Creating something new', scores: { engineering: 2, design: 3 } },
    { text: 'Helping people stay healthy', scores: { medical: 3 } },
    { text: 'Earning well and growing in business', scores: { commerce: 3 } },
    { text: 'Serving society and the country', scores: { law: 3, arts: 1 } }
  ]),
  q(8, 'Pick an activity for a weekend project.', [
    { text: 'Build a small website or robot', scores: { engineering: 3 } },
    { text: 'Run an experiment at home', scores: { science: 3 } },
    { text: 'Plan a small business or fundraiser', scores: { commerce: 3, arts: 1 } },
    { text: 'Make a poster, short film or story', scores: { design: 2, arts: 3 } }
  ]),
  q(9, 'How do you handle pressure and long study hours?', [
    { text: 'I can handle long, intense study for a big goal', scores: { medical: 3, law: 2, science: 1 } },
    { text: 'I do best with projects and practical work', scores: { engineering: 2, design: 2 } },
    { text: 'I like a mix of study and real-world practice', scores: { commerce: 2, arts: 1 } },
    { text: 'I prefer flexible schedules and creative work', scores: { design: 2, arts: 2 } }
  ]),
  q(10, 'Which statement sounds most like you?', [
    { text: 'I like to figure out how things work', scores: { engineering: 2, science: 3 } },
    { text: 'I like to understand and help people', scores: { medical: 2, arts: 3 } },
    { text: 'I like to organise, plan and negotiate', scores: { commerce: 3, law: 2 } },
    { text: 'I like to imagine and create new things', scores: { design: 3, engineering: 1 } }
  ])
];
