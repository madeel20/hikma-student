const lessons = [
    {
        id: 1,
        week: 'Week 1',
        name: 'English',
        tags: ['Curriculum', 'Grade', 'Subject'],
        q1: 'How to write an article?',
        q2: 'Lorem ipsum',
        q3: 'Urna quam scelerisque risus senectus.',
    },
    {
        id: 1,
        week: 'Week 1',
        name: 'Spanish',
        tags: ['Curriculum', 'Grade', 'Subject'],
        q1: 'How to write an article?',
        q2: 'Lorem ipsum',
        q3: 'Urna quam scelerisque risus senectus.',
    },
    {
        id: 4,
        week: 'Week 1',
        name: 'Spanish',
        tags: ['Curriculum', 'Grade', 'Subject'],
        q1: 'How to write an article?',
        q2: 'Lorem ipsum',
        q3: 'Urna quam scelerisque risus senectus.',
    },
    {
        id: 8,
        week: 'Week 8',
        name: 'Spanish',
        tags: ['Curriculum', 'Grade', 'Subject'],
        q1: 'How to write an article?',
        q2: 'Lorem ipsum',
        q3: 'Urna quam scelerisque risus senectus.',
    }
];

export {
    lessons
}
/**
let weeks = [
 {_id: 1},
 {_id: 2},
 ...
]
 [1,2,3,4]
 const idsData = lessons.map(l => l._id);
 weeks = weeks.filter((w,i) => {
    if(idsData.includes(w._id)) {
        w.data = w.data ? [];
        w.data.push(lessons[i])
        return w;
    }
 })
 **/
