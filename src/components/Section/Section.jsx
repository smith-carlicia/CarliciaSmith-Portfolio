Skip to content
Search...
Write a post
1


76

18

220

Cover image for React: Super Simple Smooth Scrolling
React: Super Simple Smooth Scrolling
#react #javascript #webdev #design
holdmypotion profile image
Rahul
Feb 28 ・Updated on Mar 2 ・4 min read
I have been wanting to redo my portfolio, and one of the major things I wanted it to have was smooth scrolling. So, I created a super simple smooth-scrolling effect with no extra dependencies but react.

In this blog, we'll be creating that together. So, let's get right into it.

Live Link

CodeSandBox

Github Repo

Setup
Run the following commands to set up a react app.
npx create-react-app smooth-scroll
cd smooth-scroll
yarn start
Overview
So essentially what we are trying to do is to simply translate a div in Y-direction with a delay.
This div will hold the full SPA (Single Page Application), resulting in an all-out smooth scrolling effect.
<div className="parent">
  <div ref={scrollingContainer}>
    {/* The Complete App */}
  </div>
</div
.parent{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
In this set up the div with the ref scrollingContainer will translate in Y-direction.
Notice that the div with a class of "parent" is set to position: fixed. This is essential otherwise the children div will just translate up leaving the space empty down below.

By doing this we are basically letting the browser know that our whole app is a fixed container of "width=100%" and "height=100%", with no scroll and stuff.

Later on, we'll be setting the height of the

tag equal to the "scrollingContainer div" and that will allow us to scroll.
On Scroll we'll translate the "scrollingContainer div".

Don't worry if this doesn't make sense. Hopefully, the code will make it clearer.

Final File Structure
File Structure

SmoothScroll.js
Create a file in src/components/SmoothScroll/SmoothScroll.js and paste the code below.
Don't worry about the imports just yet. We'll be creating them shortly.
import React, { useEffect, useRef } from "react";

import "./SmoothScroll.css";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
Let's break it down.

useWindowSize() is a custom hook that returns the current innerWidth and innerHeight of the window.
scrollingContainerRef is used to apply translateY property on the div, on the fly.
data is not a state because we don't want our react component re-rendering each time we scroll.
This useEffect runs only if the windowSize changes (if the user resizes the browser). setBodyHeight makes the height property on equal to the height of the "scrollingContainerRef div". After passing "position: fixed" to the "parent div", this makes sure that we have enough room to scroll through the whole "scrollingContainerRef div"
This useEffect runs only once and calls the smoothScrolling function. The smoothScrolling function runs recursively changing the translate property on the "scrollingContainerRef div" whenever the user scroll.
Notice that we are calling the smoothScrolling function through requestAnimationFrame() function.

The window.requestAnimationFrame(**)** method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

Note: Your callback routine must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint. requestAnimationFrame() is 1 shot.

SmoothScrolling.css
Create a file in src/components/SmoothScroll/SmoothScroll.css and paste the code below.
.parent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
useWindowSize.js
Create a file in src/hooks/useWindowSize.js and paste the code below
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
This is a pretty straightforward hook that listens to the event of window resize and returns the latest innerWidth and innerHeight of the window.

Section.js
Create a file src/components/Section/Section.js and paste the code below.
import React from "react";

import "./section.css";

const section = ({ flexDirection }) => {
  return (
    <div className="section" style={{ flexDirection: flexDirection }}>
      <div className="left-container">
        <div className="block"></div>
      </div>

      <div className="right-container">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            laudantium esse fugiat illum tempore sapiente soluta labore voluptas
            iusto deleniti ab suscipit dolores quisquam corrupti facilis, id
            temporibus mollitia repellat omnis tempora commodi eveniet.
            Incidunt, perspiciatis, adipisci laboriosam dolores quos dolor
            voluptate odio magnam aperiam, alias asperiores pariatur! Nisi,
            libero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default section;
SmoothScrolling.css
Create a file src/components/Section/Section.css and paste the code below.
.section {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: 100vh;
}

.block {
  width: 250px;
  height: 250px;
  padding: 60px;
  background-color: peachpuff;
}

.container {
  width: 500px;
}

p {
  font-size: 1.5rem;
}
Just a react component to fill up some space in our scrolling Container

App.js
import React from "react";

import "./App.css";
import Section from "./components/Section/Section";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <h2>Smooth Scrolling</h2>
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
    </SmoothScroll>
  );
}

export default App;
App.css
h2 {
  text-align: center;
  margin: 40px auto;
  font-size: 4rem;
}
Live Link

CodeSandBox

Github Repo

Thank you for reading!
Would love to hear your thought!

Discussion (17)
Subscribe
pic
Add to the discussion
 
jonrandy profile image
Jon Randy
•
Mar 1 • Edited on Mar 2

Personally cannot stand websites that do stuff like this. People expect websites to scroll as normal when they use the mousewheel etc. - it's very annoying when a site breaks this behaviour


23
 likes
Reply
 
holdmypotion profile image
Rahul
•
Mar 2

I agree this could be annoying.
But each website serves a different purpose. It might irritate users of a commercial corporate website. But it could do wonders when used properly in portfolio websites or Product landing pages or maybe websites that provide a totally different experience than the old school websites.

I have seen a bunch of websites that implement this kind of scrolling and it feels beautiful.
Here, check them out :)
nahelmoussi.com/
boyntonyards.com/
jesperlandberg.dev/


2
 likes
Reply
 
jonrandy profile image
Jon Randy
•
Mar 2

Sorry, I didn't make my point very clearly...

It can work where the interface is plainly not a 'normal' page - but rather a specialised interface that is being controlled using scrolling. If this is self evident from the page - the user will probably not have the expectation of scrolling working in the normal manner.

This type of interaction can indeed can be very effective. However, care should still be taken with the 'feel' of the scrolling - the first of the examples above is fine in this respect, but the others feel a little too elastic. They all look nice though.

In your own example, the page is plainly and clearly a 'normal' page. Breaking or screwing with basic website operation on such a page could well confuse the user or make them question what is going on since the page appears to be a normal one.

When using a site - the user should never be made to question or think about the interactions unnecessarily.

You should read Steve Krug's "Don't Make Me Think"


7
 likes
Thread
holdmypotion profile image
Rahul
•
Mar 2

Gotcha!!
I absolutely agree. But the only reason why the example is a 'normal' page is that I wanted to save myself from writing CSS and stuff. The only purpose of this example is to showcase the smooth scrolling effect. I already stated in the 'Section.js' section, "Just a react component to fill up some space in our scrolling Container"

I agree with your point, BTW. And thanks for the recomendation.
I haven't read that book. I surely will!


2
 likes
Reply
 
andresausecha profile image
Andres Ausecha Mosquera
•
Mar 1 • Edited on Mar 1

I personally do something similar in our website and works fine in my opinion. Regarding the mousewheel, a third of our users are not in desktop so you can't just consider a mouse


1
 like
Reply
 
ikirker profile image
Ian Kirker
•
Mar 1

I just tried the link on an iPad and it feels like the whole thing is attached to rubber bands. Let the browser smooth scrolling itself.


10
 likes
Reply
 
bramus profile image
Bramus!
•
Mar 3

Or how about some CSS that takes care of all of this for you?
html {
  scroll-behavior: smooth;
}
DONE. 😱

(Not supported in Safari though — Meh 😕)


5
 likes
Reply
 
holdmypotion profile image
Rahul
•
Mar 4

Hey, Bramus! I don't think you can use "scroll-behavior: smooth" for something like this.
Here I created a pen for you
codepen.io/holdmypotion/pen/poNZzzo

I would love to know if there is a way. Do let me know :)


2
 likes
Reply
 
bramus profile image
Bramus!
•
Mar 4

To scroll to a point in a page you need a link target. You can use <a name="foo" ></a> for this, or give your element an id <div id="foo"></div>. When now linking to #foo the page will scroll to said element.

Combined with scroll-behavior: smooth;, it will be scrolled smoothly.


2
 likes
Thread
holdmypotion profile image
Rahul
•
Mar 4

Yea, I am quite aware of this use case. But can this be used to implement an overall smooth scrolling effect?
Like this: lic4s.csb.app/


1
 like
Thread
bramus profile image
Bramus!
•
Mar 8

Yes, because the browser provides that out-of-the-box 🥳


1
 like
Reply
 
lukad profile image
Luka Dornhecker
•
Mar 7

I think this is an anti pattern. You should not mess with the default scroll behavior. On desktop I immediately leave sites that do this. And this example also makes scrolling on mobile feel very weird.
Sorry for being so negative but this is just my honest opinion.


4
 likes
Reply
 
matiishyn profile image
Ivan Matiishyn
•
Mar 4

I hate websites that try to change the way I scroll!!!
That's my browser, my mouse, my scrolling! Leave me alone :)


5
 likes
Reply
 
thewrongguy profile image
BHARGAB KALITA
•
Mar 12

Hey, I tried using it but it's not working , the contents inside SmoothScroll get fixed and no have not scrolling behaviour


1
 like
Reply
 
kogans profile image
Stanislav Kogan
•
Mar 6

Smooth scrolling is laggy and resource-intensive. There is no place where it actually makes the experience better.


2
 likes
Reply
 
gab profile image
Gabriel Magalhães dos Santos
•
Mar 4

Greeeat, I love smooth scroll effect, you could do a part two of this post showing how to implement parallax and this stuffs, it is really usefull


2
 likes
Reply
 
holdmypotion profile image
Rahul
•
Mar 4

You caught me right on! 😃
I was planning on doing skew scrolling with some abstract backgrounds to implement parallax effect.


1
 like
Reply
Code of Conduct • Report abuse
Read next
loicpoullain profile image
Node.JS - Foal framework - Version 2.3 release notes
Loïc Poullain - Apr 26

ksankar profile image
Theming with React, Less and CSS variables
Kailash Sankar - Apr 25

0x7466 profile image
Access control gem for your Rails application (the 2nd)
Tobias - Apr 26

asvid profile image
Kotlin Builder Pattern
Adam Świderski - Apr 26

Rahul  profile image
Rahul
Full Stack Web Dev | Diving into mobile dev and content creation. Hi, I am Rahul Loves to 📕read, 🎧listen and 🐷talk. GitHub: github.com/holdmypotion
Follow
WORK
COO / Lead Developer at SellE Biz Inc.
LOCATION
Panchkula
EDUCATION
BE in Computer Science and Engineering from Chandigarh University
JOINED
Oct 14, 2019
More from Rahul
React: Custom Cursor (No Extra dependencies!)
#javascript #react #webdev #design
React 3D Image Slider
#react #webdev #design #javascript
React Theme Switcher
#react #webdev #javascript #design
import React from "react";

import "./section.css";

const section = ({ flexDirection }) => {
  return (
    <div className="section" style={{ flexDirection: flexDirection }}>
      <div className="left-container">
        <div className="block"></div>
      </div>

      <div className="right-container">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            laudantium esse fugiat illum tempore sapiente soluta labore voluptas
            iusto deleniti ab suscipit dolores quisquam corrupti facilis, id
            temporibus mollitia repellat omnis tempora commodi eveniet.
            Incidunt, perspiciatis, adipisci laboriosam dolores quos dolor
            voluptate odio magnam aperiam, alias asperiores pariatur! Nisi,
            libero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default section;
