import styles from './SkillStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.png';
import checkMarkIconLight from '../../assets/checkmark-light.png';
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

function Skills() {

  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id = "skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>

        <h2 className='first-heading'>Programming</h2>
        <hr/>
        <div className = {styles.skillList}>
            <SkillList src = {checkMarkIcon} skill = "Java"/>
        </div>


        <h2 className='first-heading'>Frontend</h2>
        <hr/>
        <div className = {styles.skillList}>
            <SkillList src = {checkMarkIcon} skill = "HTML"/>
            <SkillList src = {checkMarkIcon} skill = "CSS"/>
            <SkillList src = {checkMarkIcon} skill = "JavaScript"/>
            <SkillList src = {checkMarkIcon} skill = "NodeJS"/>
            <SkillList src = {checkMarkIcon} skill = "ReactJS"/>
            <SkillList src = {checkMarkIcon} skill = "Bootstrap"/>
        </div>

            <h2 className="heading">Backend</h2>
            <hr/>
            <div className = {styles.skillList}>
            
            <SkillList src = {checkMarkIcon} skill = "Spring Boot"/>
            <SkillList src = {checkMarkIcon} skill = "Hibernate"/>
            <SkillList src = {checkMarkIcon} skill = "RESTful API"/>
            <SkillList src = {checkMarkIcon} skill = "Firebase"/>
            
        </div>

        
        <h2 className="heading">Database</h2>
        <hr/>
            <div className = {styles.skillList}>
            <SkillList src = {checkMarkIcon} skill = "MySQL"/>
            <SkillList src = {checkMarkIcon} skill = "Firestore DB"/>


        </div>

    </section>
  )
}

export default Skills