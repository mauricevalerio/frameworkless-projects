# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design preview for the Sunnyside agency landing page coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub Repo](https://github.com/mauricevalerio/frontendmentor-landing-pages/tree/main/sunnyside-agency-landing-page)
- Live Site URL: [Sunnyside Up Agency](https://mauricevalerio.github.io/frontendmentor-landing-pages/sunnyside-agency-landing-page)

## My process

### Built with

- HTML
- Mobile-first workflow
- [SASS/SCSS](https://sass-lang.com/)
- [GSAP](https://greensock.com/)

### What I learned

Learned the basics of GSAP animations and utilized ScrollTrigger GSAP plugin.

To see how you can add code snippets, see below:

```GSAP
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    })
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () { animateFrom(elem) }
    })
```

## Author

- Website - [Maurice Valerio](https://mauricevalerio.dev/)
- Frontend Mentor - [@mauricevalerio](https://www.frontendmentor.io/profile/mauricevalerio)