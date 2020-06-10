const lessons = [
  {
    title: "Lesson title 1",
    date: "Today 12:00AM - 1:00PM",
    type: "One-to-One",
    typeClass: "one-to-one",
    users: [require("../../assets/images/user-2.jpg")],
  },
  {
    title: "Lesson title 2",
    date: "Today 12:00AM - 1:00PM",
    type: "Group lesson",
    users: [
      require("../../assets/images/user-2.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
    ],
  },
  {
    title: "Lesson title 3",
    date: "Today 12:00AM - 1:00PM",
    type: "Group lesson",
    users: [
      require("../../assets/images/user-2.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-4.jpg"),
    ],
  },
  {
    title: "Lesson title 4",
    date: "Today 12:00AM - 1:00PM",
    type: "Group lesson",
    users: [
      require("../../assets/images/user.jpg"),
      require("../../assets/images/user-2.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-4.jpg"),
    ],
  },
];
const multipleUsers = [
  {
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Caleb O",
    role: "Teacher",
  },
  {
    imageUrl: require("../../assets/images/user-3.jpg"),
    name: "Tesha O",
    role: "Parent",
  },
];
const events = [
  {
    title: "Lesson title 1",
    date: "Today 12:00AM - 1:00PM",
    users: [require("../../assets/images/user-2.jpg")],
    createdAt: new Date("2020-05-12T21:23:52.001Z").getTime(),
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Caleb O",
    role: "Parent",
  },
  {
    title: "Lesson title 1",
    date: "Today 12:00AM - 1:00PM",
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Caleb O",
    role: "Parent",
    users: [
      require("../../assets/images/user-2.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-3.jpg"),
    ],
    createdAt: new Date("2020-05-12T21:23:52.001Z").getTime(),
  },
  {
    title: "Lesson title 1",
    date: "Today 12:00AM - 1:00PM",
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Caleb O",
    role: "Parent",
    users: [
      require("../../assets/images/user-2.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-4.jpg"),
    ],
    createdAt: new Date("2020-05-12T21:23:52.001Z").getTime(),
  },
  {
    title: "Lesson title 1",
    date: "Today 12:00AM - 1:00PM",
    imageUrl: require("../../assets/images/user-2.jpg"),
    name: "Caleb O",
    role: "Parent",
    users: [
      require("../../assets/images/user.jpg"),
      require("../../assets/images/user-2.jpg"),
      require("../../assets/images/user-3.jpg"),
      require("../../assets/images/user-4.jpg"),
    ],
    createdAt: new Date("2020-05-12T21:23:52.001Z").getTime(),
  },
];

const notifications = [
  {
    title: "Alex T. paid invoice #121321",
    date: "Today 12:40",
  },
  {
    title: "Alex T. paid invoice #121321",
    date: "Today 12:40",
  },
  {
    title: "Alex T. paid invoice #121321",
    date: "Today 12:40",
  },
];

const tutors = [
  {
    name: "Alex T.",
    imageUrl: require("../../assets/images/user-2.jpg"),
  },
  {
    name: "Victor Y.",
    imageUrl: require("../../assets/images/user-2.jpg"),
  },
  {
    name: "Marta Y.",
    imageUrl: require("../../assets/images/user-2.jpg"),
  },
  {
    name: "Caleb O.",
    imageUrl: require("../../assets/images/user-2.jpg"),
  },
  {
    name: "Manol G.",
    imageUrl: require("../../assets/images/user-2.jpg"),
  },
  {
    name: "Tesha B.",
    imageUrl: require("../../assets/images/user-2.jpg"),
  },
];

const hoursLeft = [
  { subject: "Math", hours: "3hrs", postTime: "1h" },
  { subject: "Math", hours: "3hrs", postTime: "1h" },
  { subject: "Math", hours: "3hrs", postTime: "1h" },
];

const announcement = [
  {
    title: "Your request for changing of personal info is approved by admin",
    postTime: "1h",
  },
  {
    title: "Your request for changing of personal info is approved by admin",
    postTime: "1h",
  },
  {
    title: "Your request for changing of personal info is approved by admin",
    postTime: "1h",
  },
];

export {
  lessons,
  events,
  notifications,
  tutors,
  hoursLeft,
  announcement,
  multipleUsers,
};

export const managerData = [99, 78, 86, 89, 90, 94, 98];
export const studentChartData = [10, 5, 6, 7, 4, 7, 9];
export const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
