const posts = [
    {
        id: 1,
        username: "John Doe",
        handle: "@johndoe",
        avatar: "https://i.pravatar.cc/150?img=1",
        content: "Just built my first React dashboard 🚀",
        likes: 12,
        commentsCount: 3,
        comments: [],
        shares: 1,
    },
    {
        id: 2,
        username: "Sarah Smith",
        handle: "@sarahdev",
        avatar: "https://i.pravatar.cc/150?img=2",
        content: "Frontend development is actually fun once you understand components!",
        likes: 25,
        commentsCount: 8,
        comments: [],
        shares: 4,
    },
    {
        id: 3,
        username: "Alex Johnson",
        handle: "@alexcodes",
        avatar: "https://i.pravatar.cc/150?img=3",
        content: "Working on a Twitter clone UI today 💻🔥",
        likes: 40,
        commentsCount: 10,
        comments: [
            {
                id: 8,
                username: "Alice",
                text: "Well done!"
            },
        ],
        shares: 6,
    },
    {
        id: 4,
        username: "Fatima Bello",
        handle: "@fatimacodes",
        avatar: "https://i.pravatar.cc/150?img=4",
        content: "Tailwind CSS is making styling 10x faster for me.",
        likes: 18,
        commentsCount: 5,
        comments: [
            {
                id: 4,
                username: "Sodiq",
                text: "Same here bro!"
            },
        ],
        shares: 2,
    },
    {
        id: 5,
        username: "David Brown",
        handle: "@devdavid",
        avatar: "https://i.pravatar.cc/150?img=5",
        content: "State management finally clicked for me today!",
        likes: 33,
        commentsCount: 7,
        comments: [
            {
                id: 5,
                username: "Sosibina",
                text: "Keep up the good work!"
            },
        ],
        shares: 3,
    },
    {
        id: 6,
        username: "Aisha Musa",
        handle: "@aishatech",
        avatar: "https://i.pravatar.cc/150?img=6",
        content: "Building projects > watching tutorials. Practice really matters.",
        likes: 52,
        commentsCount: 12,
        comments: [
            {
                id: 6,
                username: "Charles",
                text: "Nice work!"
            },
        ],
        shares: 9,
    },
    {
        id: 7,
        username: "Michael Lee",
        handle: "@michaellee",
        avatar: "https://i.pravatar.cc/150?img=7",
        content: "Responsive design is harder than it looks 😅",
        likes: 21,
        commentsCount: 4,
        comments: [
            {
                id: 7,
                username: "Emily",
                text: "Surely!"
            },
        ],
        shares: 2,
    },
    {
        id: 8,
        username: "Grace Adams",
        handle: "@gracebuilds",
        avatar: "https://i.pravatar.cc/150?img=8",
        content: "Just pushed my project to GitHub. Small wins every day!",
        likes: 60,
        commentsCount: 15,
        comments: [
            {
                id: 8,
                username: "Sarah",
                text: "Nice work!"
            },
        ],
        shares: 11,
    },
];

export default posts;
