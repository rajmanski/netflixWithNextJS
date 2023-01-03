import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Login.module.css';

const Login = () => {
  return (
    <div>
      <Head>
        <title>Log to Netflix</title>
      </Head>

      <header>
        <div className={styles.headerWrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src={"/static/netflix.svg"}
              alt="Netflix logo"
              width="128"
              height="34"
            />
          </div>
        </a>
        </div>
        <main className={styles.main}>
            <h1>Unlimitted movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className={styles.inputSection}>
                <input type="text" />
                <button>Get started</button>
            </div>
        </main>
      </header>
    </div>
  );
};

export default Login;
