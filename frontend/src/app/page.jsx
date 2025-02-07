"use client";
import Navbar from "@/components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../assets/echantillon.png";
import styles from "../styles/page.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.responsiveTitle}>
            The Future of
            <br />
            Real-Time Document
            <br />
            Collaboration
          </h1>
          <h5 className={styles.responsiveText}>
            Simplify your work and collaborate with your team members on Documents in real-time.
          </h5>
          <button className={styles.button}>Get Started</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={pic}
            width={500}
            height={400}
            alt="Example Document Collaboration"
          />
        </div>
      </div>
    </div>
  );
}
