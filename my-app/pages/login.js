import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import { magic } from "../lib/magic";

const Login = () => {
  const [msgForUser, setMsgForUser] = useState(null);
  const [email, setEmail] = useState(null);

  const router = useRouter();

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (!email) {
      setMsgForUser("You didn't enter your email");
    } else {
      console.log("This email is wrong: ", email);
      setMsgForUser("Email that you have entered is wrong");
      if (email === "prajmanski10@gmail.com") {
        setMsgForUser(null);
        console.log("You are logged as: ", email);
        // router.push('/');
        try {
          const token = await magic.auth.loginWithMagicLink({ email: email });
          console.log(token);
        } catch(error) {
          console.log('Error happened: ', error);
        }
      }
    }
  };
  

  const getEmail = (e) => {
    setEmail(e.target.value);
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
          <p className={styles.userMsg}>{msgForUser}</p>
          <div className={styles.inputSection}>
            <input
              className={styles.emailInput}
              type="text"
              placeholder="Email"
              onChange={getEmail}
            />
            <button className={styles.loginBtn} onClick={handleOnClick}>
              Get started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
