const usersList = [
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Audrey W.",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Arlene F.",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "William D.",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Claire M.",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Darrell Mc.",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Gregory B.",
    tags: ["Curriculum", "Grade", "Subject"],
  },
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Nathan F.",
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

const selectOptions = [
  {
    value: "Option 1",
    title: "Option 1",
  },
  {
    value: "Option 2",
    title: "Option 2",
  },
  {
    value: "Option 3",
    title: "Option 3",
  },
  {
    value: "Option 4",
    title: "Option 4",
  },
];

export { usersList, invoices, messages, categories, selectOptions };
