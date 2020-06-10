const subjectList = [
  {
    subject: "Spanish",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    subject: "Geography",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    subject: "Mathematics",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    subject: "Psychology",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    subject: "Biology",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    subject: "Chemistry",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    subject: "Literature",
    tags: ["Curriculum", "Grade", "Subject"],
  },
];

const invoices = [
  {
    title: "Invoice #121321",
    status: "Sent",
    lessons: "2 Lessons",
    rate: "$50",
    date: "Today 12:40",
  },
  {
    title: "Invoice #121321",
    status: "Approved",
    lessons: "2 Lessons",
    rate: "$50",
    date: "Today 12:40",
  },
  {
    title: "Invoice #121321",
    status: "Approved",
    lessons: "2 Lessons",
    rate: "$50",
    date: "Today 12:40",
  },
];

const lessons = [
  {
    name: "lesson 1",
    type: "ONE-TO-One",
    userImage: require("../../assets/images/user-3.jpg"),
    duration: "Apr 18, 12:00AM - 1:00PM",
  },
];

const messages = [
  {
    name: "Theresa D.",
    userImage: require("../../assets/images/user-3.jpg"),
    message: "Hello. I would like to know how my son had passed the last test?",
    date: new Date(),
  },
  {
    name: "You",
    userImage: require("../../assets/images/user-2.jpg"),
    message:
      "Hello, Mrs. Danson. He had prepared pretty well for the test. And his grade is A+.",
    date: new Date(),
  },
  {
    name: "Theresa D.",
    userImage: require("../../assets/images/user-3.jpg"),
    message: "Nice to hear. Thank you. When would he have an exam?",
    date: new Date(),
  },
  {
    name: "You",
    userImage: require("../../assets/images/user-2.jpg"),
    message:
      "The exam will be next monday. Hope, William will prepare very good 😊",
    date: new Date(),
  },

  {
    name: "Theresa D.",
    userImage: require("../../assets/images/user-3.jpg"),
    message: "Hello. I would like to know how my son had passed the last test?",
    date: new Date(),
  },
  {
    name: "You",
    userImage: require("../../assets/images/user-2.jpg"),
    message:
      "Hello, Mrs. Danson. He had prepared pretty well for the test. And his grade is A+.",
    date: new Date(),
  },
  {
    name: "Theresa D.",
    userImage: require("../../assets/images/user-3.jpg"),
    message: "Nice to hear. Thank you. When would he have an exam?",
    date: new Date(),
  },
  {
    name: "You",
    userImage: require("../../assets/images/user-2.jpg"),
    message:
      "The exam will be next monday. Hope, William will prepare very good 😊",
    date: new Date(),
  },

  {
    name: "Theresa D.",
    userImage: require("../../assets/images/user-3.jpg"),
    message: "Hello. I would like to know how my son had passed the last test?",
    date: new Date(),
  },
  {
    name: "You",
    userImage: require("../../assets/images/user-2.jpg"),
    message:
      "Hello, Mrs. Danson. He had prepared pretty well for the test. And his grade is A+.",
    date: new Date(),
  },
  {
    name: "Theresa D.",
    userImage: require("../../assets/images/user-3.jpg"),
    message: "Nice to hear. Thank you. When would he have an exam?",
    date: new Date(),
  },
  {
    name: "You",
    userImage: require("../../assets/images/user-2.jpg"),
    message:
      "The exam will be next monday. Hope, William will prepare very good 😊",
    date: new Date(),
  },
];

const categories = [
  {
    title: "Grade",
    children: [
      {
        title: "Grade 1",
      },
      {
        title: "Grade 2",
      },
      {
        title: "Grade 3",
      },
      {
        title: "Grade 4",
      },
    ],
  },
  {
    title: "Curriculum",
    children: [
      {
        title: "Curriculum 1",
      },
      {
        title: "Curriculum 2",
      },
      {
        title: "Curriculum 3",
      },
      {
        title: "Curriculum 4",
      },
    ],
  },
  {
    title: "Subject",
    children: [
      {
        title: "Subject 1",
      },
      {
        title: "Subject 2",
      },
      {
        title: "Subject 3",
      },
      {
        title: "Subject 4",
      },
    ],
  },
];

export { subjectList, invoices, lessons, messages, categories };
