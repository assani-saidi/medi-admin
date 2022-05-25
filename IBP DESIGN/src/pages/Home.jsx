import React, { useState } from "react";
import Header from "../components/header";
import mainImage from "../assets/boss and workers looking at pc.jpeg";
import firstImage from "../assets/business1.jpg";
import serviceImage from "../assets/banner-hero-fundraising-article-2-1440x810.jpg";
import Callout from "../components/common/callout";
import Button from "../components/common/button";
import mylogo from "../assets/rashid.png";
import ibmLogo from "../assets/ibm logo light.png";
import Logger from "../components/logger";

export default function Home() {
  const [loginOpen, setloginOpen] = useState(false);
  const styles = {
    wrapper: {
      color: "#353535",
    },
    headerImage: {
      width: "100vw",
    },
    imageContainer: {
      overflow: "hidden",
      width: "100vw",
      height: "85vh",
    },
    servicesContainer: {
      display: "flex",
      paddingLeft: 100,
      paddingRight: 20,
      paddingTop: 65,
    },
    whysContainer: {
      paddingLeft: 100,
      paddingRight: 100,
      paddingTop: 65,
    },
    servicesLeft: {
      flex: 2,
      borderRadius: 30,
    },
    servicesRight: {
      flex: 4,
      marginLeft: 70,
      marginRight: 70,
    },
    serviceImage: {
      flex: 1,
      height: "90vh",
    },
    whyImage: {
      height: "100%",
    },
    whyImageContainer: {
      overflow: "hidden",
      borderRadius: 30,
      width: "15vw",
      height: "35vh",
    },
    whyContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    whys: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "row",
      marginBottom: 100,
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: "1vh",
      paddingBottom: "1vh",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#141414",
    },
    mylogo: {
      width: "15vw",
      marginRight: "3vw",
    },
    ibmlogo: {
      width: "13vw",
      marginLeft: "2vw",
      marginTop: "1vh",
      marginRight: "2vw",
    },
    footerTextContainer: {
      marginLeft: "2vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    footerTextLarge: {
      fontWeight: "400",
      color: "white",
      fontSize: "2.7vh",
    },
    footerTextSmall: {
      fontWeight: "100",
      color: "white",
    },
  };
  return (
    <div>
      <Header />
      {/* hero section */}
      <div style={styles.imageContainer}>
        <img style={styles.headerImage} src={mainImage} alt="header image" />
        <Callout />
      </div>
      {/* services section */}
      <div style={styles.servicesContainer} className="mx-auto">
        <div style={styles.servicesLeft}>
          <img
            style={styles.serviceImage}
            src={serviceImage}
            alt="service image"
          />
        </div>
        <div style={styles.servicesRight}>
          <h1 className="text-center serviceHeaderText">
            <span className="serviceHeaderSubTextLight">OUR</span>
            <span className="serviceHeaderSubTextBold">SERVICES</span>
          </h1>
          <h2 className="serviceHeaderSmall text-center">
            ALL YOUR BUSINESS FUNCTIONS IN ONE PLACE
          </h2>
          <div className="serviceText">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              dignissimos repellat magni aliquam optio veritatis! Accusantium
              voluptates sequi vero nisi veniam tempora ratione, optio ut sunt,
              repudiandae velit reiciendis impedit dolorem, libero a. A commodi
              fuga vel dignissimos odit fugiat, maxime hic cumque exercitationem
              minima quas similique et nemo enim veniam voluptatibus laboriosam
              deserunt reiciendis placeat libero rem excepturi saepe animi
              blanditiis! Fuga, perferendis. Error provident incidunt magnam
              cupiditate molestias recusandae impedit inventore eveniet, eius
              numquam? Magni accusamus cum ipsa esse. Deleniti omnis aliquid
              voluptatem, praesentium labore nam sint doloremque atque vero
              dolore ab? Mollitia sapiente vero modi ducimus assumenda.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              nesciunt blanditiis autem tempora asperiores, in, sunt saepe
              dignissimos ipsa eveniet id atque vero esse quasi illum
              exercitationem! Id, repellat itaque!
            </p>
          </div>
          <div>
            <div className="lined pt-3">
              <div className="line"></div>
              <Button
                text="GET STARTED NOW"
                solid
                large
                onClick={() => setloginOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* why choose us section */}
      <div style={styles.whysContainer} className="pt-5 mt-5">
        <h1 className="serviceHeaderText line pb-3">
          <span className="serviceHeaderSubTextLight">WHY</span>
          <span className="serviceHeaderSubTextBold">CHOOSE US</span>
        </h1>
        <div style={styles.whys} className="pt-5">
          <div className="whyContainer">
            <div style={styles.whyImageContainer}>
              <img src={firstImage} style={styles.whyImage} />
            </div>
            <h3 className="pt-1 text-center">RELIABILITY</h3>
          </div>
          <div className="whyContainer">
            <div style={styles.whyImageContainer}>
              <img src={firstImage} style={styles.whyImage} />
            </div>
            <h3 className="pt-1 text-center">EFFECIENCY</h3>
          </div>
          <div className="whyContainer">
            <div style={styles.whyImageContainer}>
              <img src={firstImage} style={styles.whyImage} />
            </div>
            <h3 className="pt-1 text-center">DEDICATION</h3>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div style={styles.footer}>
        <img src={mylogo} style={styles.mylogo} />
        <div className="yBar" />
        <img src={ibmLogo} style={styles.ibmlogo} />
        <div className="yBar" />
        <div style={styles.footerTextContainer}>
          <div style={styles.footerTextLarge}>@COPYRIGHT 2022</div>
          <div style={styles.footerTextSmall}>ALL RIGHTS RESERVED</div>
        </div>
      </div>
      {/* this is a login modal */}
      <Logger modalOpen={loginOpen} modalClose={() => setloginOpen(false)} />
    </div>
  );
}
