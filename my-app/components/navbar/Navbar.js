import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { magic } from "../../lib/magic";


export const Navbar = () => {

  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [emailAdress, setEmailAdress] = useState(null);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = () => {
    showDropdown ? setShowDropdown(false) : setShowDropdown(true);
  };

  useEffect( () => {
    const asyncFunc = async () => {
      try {
        const {email, publicAdress} = await magic.user.getMetadata();
        setEmailAdress(email)
      } catch {
        console.log('Error!!');
      }
    }
    asyncFunc();
  }, [])

  const signOut = async (e) => {
    e.preventDefault();

    try {
      await magic.user.logout();
      router.push('/login');
    } catch(error) {
      console.log('There was a error: ', error);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContaier}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username} onClick={handleShowDropdown}>
                {emailAdress}
              </p>
              <Image
                src={"/static/arrow.svg"}
                alt="Dropdown Icon"
                width="24"
                height="24"
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login" className={styles.linkName} onClick={signOut}>
                    Sign out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
