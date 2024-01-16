import "./App.css";
import "./styles.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Topbar from "./Topbar.js";

import image from "./1.png";
import image2 from "./2.png";
import image3 from "./3.jpg";
import image3_no from "./3_no.png";
import image4 from "./4.JPG";
import image5 from "./5.jpg";
import image6 from "./6.jpg";
import logo from "./logo.png";
import frassino from "./frassino.png";
import frassino_back from "./frassino_back.jpg";
import noce from "./noce.png";
import noce_back from "./noce_back.jpg";
import nero from "./nero.png";
import nero_back from "./nero_back.jpg";
import styles from "./App.module.css";
import FlipCard from "./Flipcard.js";
import { gsap } from "gsap";
import SplitType from "split-type";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./fonts/fonts.scss";

function App() {
  const [downscaledImage, setDownscaledImage] = useState(null);

  useEffect(() => {
    downscaleImage(frassino, 1600, 1600).then(setDownscaledImage);
  }, []);

  const sectionRef = useRef(null);

  const onSezione1Click = () => {
    // handle click event
  };

  const onSezione2Click = () => {
    // handle click event
  };
  const end = 3;

  const cards = [
    {
      id: "1",
      variant: "hover",
      front: {
        title: "Click",
        background: "rock-climbing.jpg",
        image: frassino,
      },
      back: {
        image: frassino_back,
        brand: "Black Diamond",
        name: "Vapor Climbing Helmet",
        price: 139.95,
      },
      description: "Frassino Olivato",
    },
    {
      id: "2",
      variant: "hover",
      front: { title: "Click", background: "rock-climbing.jpg", image: nero },
      back: {
        image: nero_back,
        brand: "Black Diamond",
        name: "Vapor Climbing Helmet",
        price: 139.95,
      },
      description: "Frassino Nero",
    },
    {
      id: "3",
      variant: "hover",
      front: { title: "Click", background: "rock-climbing.jpg", image: noce },
      back: {
        image: noce_back,
        brand: "Black Diamond",
        name: "Vapor Climbing Helmet",
        price: 139.95,
      },
      description: "Noce",
    },
  ];

  setTimeout(() => {
    const guardamiHomePage = new SplitType("p.our-text", { types: "chars" });
    const chars = guardamiHomePage.chars;
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, 20); // delay in milliseconds

  function downscaleImage(imgSrc, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        let { width, height } = img;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
      img.onerror = reject;
    });
  }

  return (
    <div className="App">
      <Parallax pages={end}>
        <ParallaxLayer
          offset={0}
          sticky={{ start: 0, end: end }}
          style={{ pointerEvents: "none" }}
        >
          <Topbar />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#F5EDF0" }}
        >
          {/* Add your content here */}
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={0} // replace with your introStart value
          factor={1.05}
        >
          <img
            src={image4} // use the imported image
            alt="background"
            className="ken"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "blur(3px)", // add this line to make the image blurry
            }}
          />
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            marginTop: "12%",
            justifyContent: "center",
            display: "flex",
            zIndex: 2,
          }}
        >
          <p className="our-text center" style={{ fontSize: "180px", fontFamily: "Zesstype Grafika"}}>
            Guardami
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            marginTop: "21%",
            justifyContent: "center",
            display: "flex",
            zIndex: 2,
            fontSize: "1.5rem",
          }}
        >
          <p className="our-text center" style={{ fontSize: "32px" , fontFamily: 'Montserrat', fontWeight:"bold"}}>
            Catch phrase, Catch phrase, catch phrase.
          </p>
        </ParallaxLayer>

        <ParallaxLayer
  offset={0}
  speed={0.5}
  style={{
    marginTop: "25%", // decrease this value to bring the button closer to the previous layer
    justifyContent: "center",
    display: "flex",
    zIndex: 2,
    fontSize: "1.5rem",
    width: "50%",
    height: "5%",
  }}
>
  <button
    style={{
      backgroundColor: "#ee8f32",
      border: "none",
      color: "black",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "20px",
      padding: "5px 24px", // change this line to adjust the height of the button
      marginTop: "80px",
      fontWeight: "bold",
      borderRadius: "30px", // add this line to make the button rounded
      width: "250px", // add this line to set the button width to 200px
      height: "60px", // add this line to set the button height to 50px

    }}
  >
    Comprami
  </button>
</ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16%",
          }}
        >
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2} // increased speed for the image
          style={{
            zIndex: 1,
          }}
        >
          <img
            src={downscaledImage}
            alt="Image2"
            style={{
              position: "absolute",
              top: "-5%",
              right: "-16%",
              width: "80%",
              animation: "bounce 2s infinite",
            }}
          />
        </ParallaxLayer>

        {/* SECOND PAGE */}

        <ParallaxLayer
          offset={0.5}
          speed={0.01} // increased speed for the image
          style={{
            zIndex: -1,
          }}
        >
          <img
            src={image4}
            alt="Image2"
            style={{
              width: "100%",
              height: "95%",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.5}
          style={{ backgroundColor: "white", marginTop: "-2%" }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.25} // slightly slower speed for the title
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            className={`${styles.loremIpsumLorem} ${styles.headerText}`} // Apply the 'text-big-bold' class
            style={{
              marginLeft: "7%",
              fontSize: "5em",
              color: "#522910",
              marginTop: "12%",
            }} // Increase the font size here
          >{`Cos'è Guardami`}</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1} // slightly slower speed for the title
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginLeft: "8%",
              textAlign: "left",
              fontSize: "1.7em",
              lineHeight: "2em",
              color: "#522910",
              marginTop: "2%",
            }}
          >
            Guardami è un manufatto in legno. Guardami è un oggetto di design
            <br />
            Guardami è un contenitore e un contenuto. Guardami è un manufatto
            <br />
            artigianale che rende visibile la bellezza che cerchiamo, l’arte,
            <br />
            la musica, la cultura. È nato per i libri, ma la cultura si sa...
            <br />
            non ha limiti. Guardami è nato da un'intuizione creativa, scaturita
            <br />
            dal bisogno di dare un luogo fisico alla parola.
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{
            position: "absolute", // change this line
            left: "50%", // add this line
            top: "-50%", // add this line
            width: "50%", // add this line
            height: "100%", // add this line
            display: "flex", // add this line
            justifyContent: "center", // add this line
            alignItems: "center", // add this line
            zIndex: 1,
          }}
        >
          <img
            src={image2}
            alt="Image2"
            style={{
              maxWidth: "65%", // change this line
              maxHeight: "65%", // add this line
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2} // increased speed for the image
          style={{
            position: "absolute", // change this line
            left: "35%", // add this line
            top: "-33%", // add this line
            width: "50%", // add this line
            height: "100%", // add this line
            display: "flex", // add this line
            justifyContent: "center", // add this line
            alignItems: "center", // add this line
            zIndex: 1,

          }}
        >
          <img
            src={image2}
            alt="Image2"
            style={{
              maxWidth: "35%", // change this line
              maxHeight: "35%", // add this line
            }}
          />
        </ParallaxLayer>
      
        {/* Third page */}
        <ParallaxLayer
          offset={2}
          factor={1.5}
          style={{ backgroundColor: "white", marginTop: "-2%" }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.05} // slightly slower speed for the title
          style={{
            display: "flex",
            justifyContent: "flex-start",
            zIndex: 3, // add this line
            pointerEvents: "none",
          }}
        >
          <div
            className={`${styles.loremIpsumLorem} ${styles.headerText}`} // Apply the 'text-big-bold' class
            style={{ marginLeft: "7%", fontSize: "5em", color: "#522910", marginTop: "5%" }} // Increase the font size here
          >{`Un colore, una personalità`}</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            zIndex: 2, // add this line
            marginTop: "2%"
          }}
        >
          <div className="container">
            <div className="overlay-background" />
            <div className="overlay-border" />
            <div className="row h-100">
              <div
                className="col d-flex flex-column flex-md-row "
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1em",
                  placeItems: "center",
                }}
              >
                {cards.map((card) => (
                  <FlipCard key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 1, // add this line
            marginTop: "18.5%"

          }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col d-flex flex-column flex-md-row "
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1em",
                }}
              >
                {cards.map((card) => (
                  <div style={{ fontSize: "2em", color: "#522910"}}>
                    {card.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
