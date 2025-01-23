import styles from './footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={styles.info} id="about-us">
                <p>Elenorchid is shop you have been searching for.</p>

                <div>
                    <h3>CONTACT</h3>
                    <p>Elenorchid@gmail.com</p>
                    <p>+991 571 219 123</p>
                </div>

                <div>
                    <h3>LEGAL</h3>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>

            <div className={styles.logo}>
                Elenorchid
            </div>
        </footer>
    )
}

export default Footer