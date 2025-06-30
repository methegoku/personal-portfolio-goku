import React from 'react'
import styles from './ProjectsStyles.module.css'
import course from '../../assets/course-image.jpg'
import github from '../../assets/github-logo.png'
import landing from '../../assets/farlight-84-logo.jpg'
import chatbot from '../../assets/AI-bot.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id = "projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.ProjectsContainer}>
            
            <ProjectCard 
                src = {course} 
                link = {'https://github.com/methegoku/TESP---The-Elder-Scrolls-Page'} 
                h3 = {"Course Registration System"} 
                p = {"A basic Course Registraation System that handles student's record and registration Details"}
            />

            <ProjectCard 
                src = {github} 
                link = {'https://github.com/methegoku/Weather-App'} 
                h3 = {"Github Profile Viewer"} 
                p = {"A simple app. which lets you see more information about the github users"}
            />

            <ProjectCard 
                src = {landing} 
                link = {'https://github.com/methegoku/Automated-Number-Plate-Recegnition'} 
                h3 = {"Farlight84 Landing Page"} 
                p = {"A landing page promoting a famous mobile multi player shooting game."}
            />

            <ProjectCard 
                src = {chatbot} 
                link = {'https://github.com/methegoku/Temperature-Converter'} 
                h3 = {"Whatsapp Chatbot"} 
                p = {"A fully - intergrated backend part of whatsapp chatbot which is good in automation response according to the user"}
            />

        </div>

    </section>
  )
}

export default Projects