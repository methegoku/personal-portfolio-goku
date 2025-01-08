import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section  id = "contact" className={styles.container}>
        <h1 className = 'sectionTitle'>Contact</h1>

        <form action = "https://formspree.io/f/mlddoqjq" method = "post">
            <div className = 'formGroup'>
                <label htmlFor = "name" hidden>Name</label>
                <input type = "text" name = "name" id = "name" placeholder = "Name" required></input>
            </div>

            <div className = 'formGroup'>
                <label htmlFor = "email" hidden>Email</label>
                <input type = "text" name = "email" id = "email" placeholder = "Email" required></input>
            </div>

            <div className = 'formGroup'>
                <label htmlFor = "message" hidden>Message</label>
                <textarea type = "text" name = "message" id = "message" placeholder = "Message" required></textarea>
            </div>

            <input type = "submit" value = "submit" className='hover-btn'></input>

        </form>

    </section>
  )
}
export default Contact