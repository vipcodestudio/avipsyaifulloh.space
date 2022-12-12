import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import BgParticles from "../../components/elements/bgParticles";
import styles from "./link.module.scss";

const Link: NextPage = () => {
  return (
    <div className={styles.link}>
      <BgParticles />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <img src="/images/profile.png" alt="profile" />
          </div>
          <div>
            <h1>Avip Syaifulloh</h1>
          </div>
        </div>
        <a href="https://kasih-bunga.vercel.app">
          <div className={styles.card}>
            <i className="bx bx-sun"></i>
            kasih-bunga.vercel.app
          </div>
        </a>
        <a href="https://www.pythonsandbox.com/code/pythonsandbox_u22014_rOLqE2ivttodAKjDMn25l8au_v0.py">
          <div className={styles.card}>
            <i className="bx bx-sun"></i>
            Coding Bunga Python Turtle
          </div>
        </a>
        <a href="https://avipsyaifulloh.space">
          <div className={styles.card}>
            <i className="bx bx-code-alt"></i>
            Website
          </div>
        </a>
        <a href="https://instagram.com/avipsyaifulloh">
          <div className={styles.card}>
            <i className="bx bxl-instagram"></i>
            Instagram
          </div>
        </a>
        <a href="https://youtube.com/vipcodestudio">
          <div className={styles.card}>
            <i className="bx bxl-youtube"></i>
            YouTube
          </div>
        </a>
        <a href="https://tiktok.com/@vipcodestudio">
          <div className={styles.card}>
            <i className="bx bxl-tiktok"></i>
            TikTok
          </div>
        </a>
        <a href="https://linked.in/avipsyaifulloh">
          <div className={styles.card}>
            <i className="bx bxl-linkedin-square"></i>
            LinkedIn
          </div>
        </a>
        <a href="mailto:avipsyaifulloh.business@gmail.com">
          <div className={styles.card}>
            <i className="bx bx-envelope"></i>
            Email For Business
          </div>
        </a>
        <p>Copyright © avipsyaifulloh.space {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Link;
