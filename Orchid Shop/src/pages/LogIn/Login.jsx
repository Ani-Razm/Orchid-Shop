import Header from "../../components/Header/header.jsx";
import styles from './Login.module.css'
import Navbar from "../../components/Navbar";

function LogIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted!");
    };

    return (

        <div className={styles.container}>
            <Navbar></Navbar>
            <Header></Header>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Login</h2>
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
                <button className={styles.button} type="submit">
                    Login
                </button>
                <p className={styles.text}>
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
        </div>
    );
}

export default LogIn