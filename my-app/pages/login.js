import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Login.module.css";

const Login = () => {
  const handleOnClick = (e) => {
    console.log("Clicked.");
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Log to Netflix</title>
      </Head>

      <header className={styles.header}>
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
        </header>
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1>Unlimitted movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <p className={styles.userMsg}></p>
            <div className={styles.inputSection}>
              <input className={styles.emailInput} type="text" placeholder="Email" />
              <button className={styles.loginBtn} onClick={handleOnClick}>Get started</button>
            </div>
          </div>
        </main>
      
    </div>
  );
};

export default Login;
