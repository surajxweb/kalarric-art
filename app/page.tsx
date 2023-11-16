import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/resources/logo/main.png";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {BsInstagram} from "react-icons/bs";
import {RiTwitterXLine} from "react-icons/ri";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image src={logo} height={900} width={900} alt="logo" />
        <h1 className={styles.heading}>Are you an artist?</h1>
        <div className={styles.text}>
          We bring you an exciting opputunity to design for Kalarric and earn a percentage on every product sold featuring your incredible artwork. 🌟. 
          Sign up now to be the first in the know when our site launches. 🎉
        </div>
        <ContactForm />
        <div className={styles.links}>
        <Link
                target="_blank"
                href={`https://www.instagram.com/kalarric_art/`}
              >
                <BsInstagram size="1.5em" className={styles.reactIcons} />
              </Link>
              <Link
                target="_blank"
                href={`https://www.twitter.com/kalarric_art`}
              >
                <RiTwitterXLine size="1.5em" className={styles.reactIcons} />
              </Link>
        </div>
      </div>
    </main>
  );
}
