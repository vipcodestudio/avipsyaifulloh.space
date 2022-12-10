import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  const projectSection = () => {
    return (
      <div className={styles.container}>
        <div className={styles.project}>
          <div className={styles.first}>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
          </div>
          <div className={styles.second}>
            <div className={styles.left}>
              <div className={styles.left_first}>
                <div className={styles.left_first_column_first}>
                  <h1 className="roboto-mono">Project</h1>
                </div>
                <div className={styles.left_first_column}></div>
              </div>
              <div className={styles.left_desc}>
                {/* <p className="roboto-mono">metaNesia</p> */}
                {/* <p className="roboto-mono">
                  metaNesia adalah dunia metaverse yang menciptakan interaksi
                  virtual serta pengalaman baru dalam memperkenalkan produk ke
                  dunia digital.
                </p> */}
                <div className="roboto-mono">metaNesia</div>
                <div className="roboto-mono">
                  metaNesia adalah dunia metaverse yang menciptakan interaksi
                  virtual serta pengalaman baru dalam memperkenalkan produk ke
                  dunia digital.
                </div>
              </div>
              <div className={`${styles.left_third} roboto-mono`}>
                Learn More
              </div>
              <div className={styles.left_last}>
                <div className={styles.left_last_column}></div>
                <div className={styles.left_last_column}>
                  <i className="bx bx-chevron-left"></i>
                </div>
                <div className={styles.left_last_column}>
                  <i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img src="/images/metanesia.png" alt="project" />
            </div>
          </div>
          <div className={styles.first}>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
          </div>
          {/* <div>
            <img
              src="https://viziya.rs/projectSlider/project1.jpg"
              alt="project"
            />
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <Head>
        <title>Avip Syaifulloh</title>
      </Head>
      Coming Soon
      {/* <div className={styles.home}>{projectSection()}</div> */}
    </Fragment>
  );
};

export default Home;
