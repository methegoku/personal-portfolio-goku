import React from 'react'
import styles from './ProjectsStyles.module.css'
import skyrim from '../../assets/skyrim-img.jpg'
import weather from '../../assets/weather-img.jpg'
import tempcheck from '../../assets/tempcheck.avif'
import anprImg from '../../assets/anpr-img.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id = "projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.ProjectsContainer}>
            
            <ProjectCard 
                src = {skyrim} 
                link = {'https://github.com/methegoku/TESP---The-Elder-Scrolls-Page'} 
                h3 = {"The Elder Scrolls Page"} 
                p = {"A Blog page of the iconic Game"}
            />

            <ProjectCard 
                src = {weather} 
                link = {'https://github.com/methegoku/Weather-App'} 
                h3 = {"Weather App"} 
                p = {"Tells you the Weather of your City"}
            />

            <ProjectCard 
                src = {anprImg} 
                link = {'https://github.com/methegoku/Automated-Number-Plate-Recegnition'} 
                h3 = {"ANPR"} 
                p = {"Shows you the Number plate of the Car"}
            />

            <ProjectCard 
                src = {tempcheck} 
                link = {'https://github.com/methegoku/Temperature-Converter'} 
                h3 = {"Temperature Converter"} 
                p = {"Converts Temperature of your Wish"}
            />

        </div>

    </section>
  )
}

export default Projects