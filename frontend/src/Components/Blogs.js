
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Flex1 from "./images/flex1.jpg";
import Flex2 from "./images/flex2.jpg";
import Flex3 from "./images/flex3.jpg";
import Flex4 from "./images/flex4.jpg";
import Flex5 from "./images/flex5.jpg";
import Flex6 from "./images/flex6.jpg";
import Flex7 from "./images/flex7.jpg";
import Flex8 from "./images/flex8.jpg";
import Flex9 from "./images/flex9.jpg";
import Flex10 from "./images/flex10.jpg";
import Footer from "./Home/Footer";

function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(3);

  const blogs = [
    {
      id: 1,
      title: 'IT HELPS YOU SET GOALS AND TRACK PROGRESS',
      description: "With a fitness tracker, you can set goals for yourself and monitor your progress overtime. For example, you can set a goal of walking 10,000 steps a day, and the tracker will help you keep track of how many steps you've taken each day. This can be a great motivator to stay active and make progress towards your goals.",
      date: 'March 23, 2023',
      image: Flex1,
      link: '/article#flex1'
    },
    {
      id: 2,
      title: 'ENCOURAGE TO STAY ACTIVE THROUGHOUT THE DAY',
      description: 'Many of us lead sedentary lifestyles, spending most of our time sitting at a desk or infront of a screen. A fitness tracker can help you break this cycle by reminding you tomove throughout the day. For example, some trackers will remind you to take a walkevery hour or to stand up and stretch every so often.',
      date: 'December 24, 2023',
      image: Flex2,
      link: '/article#flex2'
    },
    {
      id: 3,
      title: 'MONITOR SLEEP PATTERN',
      description: 'Sleep is crucial for our overall health and wellbeing, but many of us struggle to get enough quality sleep each night. A fitness tracker can help you monitor your sleep patterns by tracking how long and how well you sleep each night. This information canhelp you identify patterns and make changes to improve your sleep.',
      date: 'April 2, 2019',
      image: Flex3,
      link: '/article#flex3'
    },
    {
      id: 4,
      title: 'PROVIDES VALUABLE DATA FOR YOUR HEALTHCARE PROVIDER',
      description: 'If you have a chronic health condition or are working with a healthcare provider to manage your health, a fitness tracker can provide valuable data to inform your care. For example, if you have diabetes, your tracker can help you monitor your blood sugar levels and track how they respond to different activities and foods.',
      date: 'January 3, 2020',
      image: Flex4,
      link: '/article#flex4'
    },
    {
      id: 5,
      title: 'IT CAN BE A FUN AND SOCIAL WAY TO STAY ACTIVE',
      description: 'Many fitness trackers come with social features that allow you to compete with friends or join challenges to stay active. This can be a fun and motivating way to stay on track with your fitness goals.',
      date: 'August 15, 2021',
      image: Flex5,
      link: '/article#flex5'
    },
    {
      id: 6,
      title: 'INCREASE AWARENESS OF ACTIVITY LEVELS',
      description: 'Fitness trackers provide real-time data about your physical activity, giving you a clear picture of how active you are throughout the day. This can motivate you to move more and make healthier choices.',
      date: 'June 10, 2017',
      image: Flex6,
      link: '/article#flex6'
    },
    {
      id: 7,
      title: 'ACCOUNTABILITY AND MOTIVATION',
      description: 'Fitness trackers can be a source of accountability and motivation. By tracking your activity levels and sharing your progress with others, you may feel more motivated to stay active and make healthy choices.',
      date: 'February 19, 2015',
      image: Flex7,
      link: '/article#flex7'
    },
    {
      id: 8,
      title: 'INSIGHTS INTO SLEEP PATTERNS',
      description: 'Many fitness trackers also monitor sleep patterns, providing insights into the quality and quantity of your sleep. This information can help you make changes to your sleep habits and improve your overall well-being.',
      date: 'October 31, 2018',
      image: Flex8,
      link: '/article#flex8'
    },
    {
      id: 9,
      title: 'PERSONALIZED COACHING',
      description: 'Some fitness trackers come with personalized coaching features that can provide customized workout plans and advice based on your fitness goals and biometric data.',
      date: 'February 19, 2015',
      image: Flex9,
      link: '/article#flex9'
    },
    {
      id: 10,
      title: 'GOAL SETTING AND TRACKING PROGRESS',
      description: 'Fitness trackers allow you to set goals and track your progress over time. This can help you stay motivated and see improvements in your fitness levels.',
      date: 'February 19, 2015',
      image: Flex10,
      link: '/article#flex10'
    }
  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const renderBlogs = currentBlogs.map((blog) => {
    return (
      <div key={blog.id} class="about-blog">
        <div class="row">
          <div className="blog-img">
            <img src={blog.image} alt="start" />
            <div class="link">
              <Link to={blog.link} style={{ height: '24px' }}>
                <p>Read Article &gt;</p>
              </Link>
            </div>
          </div>
          <div class="blog-img">
            <div class="description">
              <h5>{blog.title}</h5>
              <p>{blog.description}</p>
              <p class="flexpulse">{blog.date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => setCurrentPage(number)}
        className={currentPage === number ? 'active' : 'unactive'}
      >
        {number}
      </li>
    );
  });

  return (
    <div> <br/><br/>
      <section className="hero">
        {renderBlogs}
      </section>
      <br/>
      <br/>
      <div class='pagination-btn'>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div> 
      <Footer/>
    </div>
  );
}

export default Blogs;
