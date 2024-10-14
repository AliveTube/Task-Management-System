import React from 'react'
import styles from './AboutUs.module.css'
import taskManagement from '../../assets/task-management.png'

const AboutUs = () => {
  return (
    <>
      <div className = {styles.container}>
          <h1>
            <div> About </div>
            <span> Task Management System </span>
          </h1>
        <img src={taskManagement} alt="About Task Management Website" />
      </div>
      <article className = {styles.article}>
        <p>
        Task Management System is designed to empower individuals and teams in organizing, prioritizing, and managing tasks more efficiently. Leveraging modern technologies like React, Redux, and Node.js, this tool provides a streamlined, user-friendly interface that simplifies task tracking and enhances productivity.
        </p>

        <p>
        With features such as task categorization, priority levels, and due dates, users can easily create, assign, and manage tasks. The system allows filtering based on task status (e.g., completed, in-progress) or priority, and includes a robust search function for quick retrieval using keywords.
        </p>

        <p>
        Whether you're managing personal to-dos or coordinating team projects, the Task Management System offers a flexible and powerful solution to keep your workflow organized. Tasks are securely stored using MySQL, ensuring reliable data management.
        </p>

        <p>
        This project exemplifies our dedication to building efficient, modern web applications that address real-world needs. Our goal is to provide a tool that maximizes productivity and enables users to reach their objectives with ease.
        </p>
      </article>
    </>
  )
}

export default AboutUs
