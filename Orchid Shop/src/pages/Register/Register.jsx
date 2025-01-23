import styles from './Register.module.css'
import Header from "../../components/Header/header";

function Register() {
    return (
        <>
            <Header></Header>
            <div className={styles.container}>
                <form className={styles.form}>
                    <h2 className={styles.title}>Register</h2>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Username"
                        required
                    />
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Repeat Password"
                        required
                    />
                    <button className={styles.button} type="submit">
                        Login
                    </button>
                    <p className={styles.text}>
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Register;