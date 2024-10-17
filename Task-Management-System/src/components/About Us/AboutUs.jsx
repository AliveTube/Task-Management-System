import React from 'react'
import styles from './AboutUs.module.css'
import taskManagement from '../../assets/task-management.png'
import LandingImg1 from '../../Images/Landing-1.svg'
import img2 from '../../Images/Landing-2.svg'
import img3 from '../../Images/Landing-3.svg'

const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>
          <div> About </div>
          <span> Task Management System </span>
        </h1>
        <img src={taskManagement} alt="About Task Management Website" />
      </div>
      <article className={styles.article}>

        <div>
          <p>
            Task Management System is designed to empower individuals and teams in organizing, prioritizing, and managing tasks more efficiently. Leveraging modern technologies like React, Redux, and Node.js, this tool provides a streamlined, user-friendly interface that simplifies task tracking and enhances productivity.
          </p>
          <img src={LandingImg1} alt="Tasks" className={styles.imgAboutUS1} />
        </div>

        <div>
          <img src={taskManagement} className={styles.imgAboutUS2} alt="Complete" />
          <p>
            With features such as task categorization, priority levels, and due dates, users can easily create, assign, and manage tasks. The system allows filtering based on task status (e.g., completed, in-progress) or priority, and includes a robust search function for quick retrieval using keywords.
          </p>
        </div>

        <div>
          <p>
            Whether you're managing personal to-dos or coordinating team projects, the Task Management System offers a flexible and powerful solution to keep your workflow organized. Tasks are securely stored using MySQL, ensuring reliable data management.
          </p>
          <img src={img2} alt="About Task Management Website" className={styles.imgAboutUS2} />
        </div>

        <div>
          <img src={img3} className={styles.imgAboutUS2} alt="Complete" />
          <p>
            This project exemplifies our dedication to building efficient, modern web applications that address real-world needs. Our goal is to provide a tool that maximizes productivity and enables users to reach their objectives with ease.
          </p>
        </div>

      </article>
    </>
  )
}

export default AboutUs