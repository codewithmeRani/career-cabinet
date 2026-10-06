// Career streams: description, sample careers and courses
module.exports = [
  {
    id: 'engineering',
    name: 'Engineering & Technology',
    icon: '💻',
    description: 'For people who like building things, solving logical problems and working with technology.',
    careers: [
      { title: 'Software Developer', description: 'Designs and builds software, websites and apps.' },
      { title: 'Data Scientist', description: 'Finds patterns in data and builds predictive models.' },
      { title: 'Mechanical / Civil / Electrical Engineer', description: 'Designs machines, structures and electrical systems.' },
      { title: 'Cyber Security Analyst', description: 'Protects systems and data from attacks.' }
    ],
    courses: ['B.Tech / B.E.', 'BCA / MCA', 'Diploma in Engineering', 'B.Sc. Computer Science']
  },
  {
    id: 'medical',
    name: 'Medical & Health Sciences',
    icon: '🩺',
    description: 'For people who care about helping others and are interested in biology and human health.',
    careers: [
      { title: 'Doctor (MBBS)', description: 'Diagnoses and treats patients.' },
      { title: 'Pharmacist', description: 'Prepares and advises on medicines.' },
      { title: 'Physiotherapist', description: 'Helps patients recover movement and strength.' },
      { title: 'Nurse / Public Health Professional', description: 'Provides patient care and runs health programmes.' }
    ],
    courses: ['MBBS', 'BDS', 'B.Pharm', 'B.Sc. Nursing', 'BPT']
  },
  {
    id: 'commerce',
    name: 'Commerce & Management',
    icon: '📊',
    description: 'For people who enjoy numbers, business, money and leading or organising others.',
    careers: [
      { title: 'Chartered Accountant', description: 'Handles auditing, tax and financial reporting.' },
      { title: 'Business Analyst', description: 'Uses data to improve how businesses work.' },
      { title: 'Investment Banker / Financial Analyst', description: 'Advises on investments and company finance.' },
      { title: 'Entrepreneur / Manager', description: 'Starts or runs a business or a team.' }
    ],
    courses: ['B.Com', 'BBA', 'CA / CS / CMA', 'MBA']
  },
  {
    id: 'science',
    name: 'Pure Science & Research',
    icon: '🔬',
    description: 'For curious people who like experiments, theories and finding out how the world works.',
    careers: [
      { title: 'Research Scientist', description: 'Carries out experiments to discover new knowledge.' },
      { title: 'Biotechnologist', description: 'Uses biology to develop medicines, crops and materials.' },
      { title: 'Mathematician / Statistician', description: 'Solves problems using mathematical models.' },
      { title: 'Environmental Scientist', description: 'Studies and protects the environment.' }
    ],
    courses: ['B.Sc. (Physics, Chemistry, Maths, Biology)', 'Integrated BS-MS', 'M.Sc.', 'Ph.D.']
  },
  {
    id: 'arts',
    name: 'Arts, Humanities & Media',
    icon: '🎭',
    description: 'For people who enjoy people, society, language, stories and communication.',
    careers: [
      { title: 'Journalist / Content Writer', description: 'Researches and tells stories in print, digital and broadcast media.' },
      { title: 'Psychologist / Counsellor', description: 'Helps people with their thoughts, feelings and behaviour.' },
      { title: 'Teacher / Professor', description: 'Educates and mentors students.' },
      { title: 'Social Worker / Historian', description: 'Works with communities or studies the past.' }
    ],
    courses: ['BA (various subjects)', 'BJMC (Journalism)', 'B.Ed.', 'MA']
  },
  {
    id: 'law',
    name: 'Law & Civil Services',
    icon: '⚖️',
    description: 'For people who like debate, justice, public service and understanding how rules and governments work.',
    careers: [
      { title: 'Lawyer / Advocate', description: 'Represents clients and gives legal advice.' },
      { title: 'Civil Servant (IAS / IPS etc.)', description: 'Helps run government administration and policy.' },
      { title: 'Judge / Judicial Officer', description: 'Hears cases and delivers judgements.' },
      { title: 'Corporate Legal Advisor', description: 'Guides companies on legal and compliance matters.' }
    ],
    courses: ['BA LL.B (5-year integrated)', 'LL.B', 'BA (Political Science / Public Administration)']
  },
  {
    id: 'design',
    name: 'Design & Creative Arts',
    icon: '🎨',
    description: 'For imaginative people who like drawing, designing, making and visual storytelling.',
    careers: [
      { title: 'UI / UX Designer', description: 'Designs how apps and websites look and feel.' },
      { title: 'Graphic / Animation Designer', description: 'Creates visuals, animation and branding.' },
      { title: 'Fashion / Interior Designer', description: 'Designs clothing or living spaces.' },
      { title: 'Architect', description: 'Plans and designs buildings.' }
    ],
    courses: ['B.Des', 'B.Arch', 'B.F.A.', 'Diploma in Animation / Fashion Design']
  }
];
