# [![Official Repo](https://raw.githubusercontent.com/Nihilnia/GithubBadges/e14078343be44292c313b478de702e34fcdf556e/Github.svg)](https://github.com/S0npaRi11/scrolls) [![Source](https://raw.githubusercontent.com/Nihilnia/GithubBadges/e14078343be44292c313b478de702e34fcdf556e/HTML.svg)](https://www.cssscript.com/fade-scroll-in-element/)

Description:
A lightweight and performant scroll animation library for fading and scrolling in elements when they appear in the viewport.

Using Scrolls.js, you can animate HTML elements even if their CSS properties are not animatable.

How to use it:
1. Download and import the minified version of the Scrolls.js library.
```
<script src="./scrolls.min.js"></script>
```

2. Add the scrolls attribute the elements to be animated on scroll. That’s it.
```
<div scrolls>
  ...
</div>
```

3. Determine the animation type using the scrolls-anim attribute:
```
‘fade-in'(default)
‘fade-out’
‘fade-right’
‘fade-left’
‘fade-up’
‘fade-down’
<div scrolls scrolls-anim="fade-right">
  ...
</div>
```

4. Config the scroll animation:
```
scrolls-duration: Duration in milliseconds
scrolls-delay: Delay in milliseconds
scrolls-easing: Easing function: ‘ease-in’, ‘ease-out’, ‘ease-in-out'(default)
<div scrolls scrolls-duration="1000" scrolls-delay="500" scrolls-easing="ease-in">
  ...
</div>
```
