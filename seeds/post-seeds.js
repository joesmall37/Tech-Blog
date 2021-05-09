const { Post } = require('../models');

const postData = [
    {
        title: 'Django',
        post_text: 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.',
        user_id: 1,
    },
    {
        title: 'Spring',
        post_text: 'Spring is the most popular application development framework for enterprise Java. Millions of developers around the world use Spring Framework to create high performing, easily testable, and reusable code. Spring framework is an open source Java platform.It was initially written by Rod Johnson and was first released under the Apache 2.0 license in June 2003.',
        user_id: 2,
    },
    {
        title: 'Laravel',
        post_text: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.',
        user_id: 2,
    },
    {
        title: 'Flask',
        post_text: 'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. I',
        user_id: 3,
    },
    {
        title: 'Open recursion',
        post_text: 'In languages that support open recursion, object methods can call other methods on the same object (including themselves), typically using a special variable or keyword called this or self',
        user_id: 4,
    },
    {
        title: '.Net',
        post_text: 'The .NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library called Framework Class Library and provides language interoperability across several programming languages.',
        user_id: 5,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
