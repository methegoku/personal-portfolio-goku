import styles from './HeroStyles.module.css';
import heroimg from '../../assets/hero-profile-image.jpg'
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import instagramLight from "../../assets/instagram-light.png"
import instagramDark from "../../assets/instagram-dark.png"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/cv.pdf"
import {useTheme} from "../../common/ThemeContext"



function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? instagramLight : instagramDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return ( 
    <section id = "hero" className = {styles.container}>
        <div className = {styles.colorModeContainer}>
            <img className = {styles.hero} src = {heroimg} alt="prrofile picture"/>

            <img className = {styles.colorMode} src = {themeIcon} alt = "Color Mode Icon" onClick = {toggleTheme}/>
        </div>

        <div className = {styles.info}>
            <h1>Gokul Elumalai</h1>
            <h2>Full Stack Developer | Programmer | Front end Developer</h2> 
            <span>
                <a href = "https://www.instagram.com/creatureofcomfort._._/" target = "_blank">
                    <img src = {twitterIcon} alt = "Twitter Icon"></img>
                </a>

                <a href = "https://github.com/methegoku" target = "_blank">
                    <img src = {githubIcon} alt = "Twitter Icon"></img>
                </a>

                <a href = "https://www.linkedin.com/in/gokul-elumalai-12a203267/" target = "_blank">
                    <img src = {linkedinIcon} alt = "Twitter Icon"></img>
                </a> 
            </span>

            <p className={styles.description}>Enthusiastic and self-driven Developer with hands-on experience in full-stack web development and backend API integration. Skilled in
Java, ReactJS, Spring Boot, and Firebase, with a strong understanding of databases and real-time applications.</p>

            <a href = {CV}>
            <button className = "hover" download>Resume</button>
            </a>
        </div>
    </section>  
  )
}

export default Hero

