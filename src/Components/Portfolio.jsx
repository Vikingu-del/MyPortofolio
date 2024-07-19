/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React, { useEffect, useRef } from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Libft",
    description:
      'The libft (short for "library functions") repository is a collection of essential C functions commonly used in programming projects. This library is the first project I did in 42Wolfsburg, redoing the standard C library functions from scratch, and I\'m using later to complete all the other projects.',
    url: "https://github.com/Vikingu-del/libft",
  },
  {
    title: "Born 2 be Root",
    description:
      '"Born to be Root" is a comprehensive guide aimed at empowering individuals who are new to system administration, specifically focusing on mastering the Linux environment. This repository serves as a gateway for beginners to delve into the world of root access and system management with confidence.',
    url: "https://github.com/Vikingu-del/Born2beRoot",
  },
  {
    title: "Push Swap",
    description:
      "This repository contains the implementation of the Push_swap project, which is part of the curriculum at 42. Push_swap is a sorting algorithm project that aims to sort a stack of integers using a limited set of operations.",
    url: "https://github.com/Vikingu-del/Push_swap",
  },
  {
    title: "Minitalk",
    description:
      "MiniTalk aims to establish a communication channel between a server and multiple clients using signals. The server listens for messages from clients and displays them, while clients can send messages to the server.",
    url: "https://github.com/Vikingu-del/Minitalk",
  },
  {
    title: "FDF",
    description:
      "FDF, a simple wireframe renderer developed in C using the mlx library, which is a library written by my pears at 42Network. It is a great introduction to 3D graphics programming.",
    url: "https://github.com/Vikingu-del/FDF",
  },
  {
    title: "Cube3D",
    description:
      "cub3D is a project inspired by the iconic Wolfenstein 3D game, designed to introduce you to the world of ray-casting. In this project, we are creating a dynamic 3D graphical representation of a maze from a first-person perspective using the principles of ray-casting.",
    url: "https://github.com/Vikingu-del/Cub3d",
  },
  {
    title: "Minishell 🎉",
    description:
      "Minishell is a simple shell implementation in C. It's a minimal, basic shell that includes a subset of features from more complex shells like bash. This project is a great way to learn more about processes, file descriptors and system programming",
    url: "https://github.com/Vikingu-del/Minishell",
  },
  {
    title: "Inception",
    description:
      "A Guide I created to help my peers set up Docker containers & Nginx with Alpine Linux. Doing the project helped me a lot to understand how the containers work, how to set them up, how to usem them and how to create a Dockerfile. Start hosting your apps confidently!",
    url: "https://github.com/Vikingu-del/Inception-Guide",
  },
  {
    title: "Webserver",
    description:
      "A http Webserver build from scratch in c++, able to change the configuration files for portlistening, routing and most of the things that an apache and an nginx webserver would configure. Made for handling http version 1 request based on the latest rfc! To test it or to see the documentation click the link below!",
    url: "https://github.com/Vikingu-del/Webserv"
    
  },

];

const Portfolio = () => {
  const imgRef = useRef();
  const hasEntered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered.current) {
          entry.target.style.animation = '1s ease-out 0s 1 slideInLeft';
          hasEntered.current = true; // Set hasEntered to true after the animation is added
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            ref={imgRef}
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
