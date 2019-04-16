<template>
  <div id="app" v-cloak>
    <!--<nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>-->
    <router-view/>
  </div>
</template>

<style>
:root {
  --color-eublue: #003399;
  --color-lightblue: #79cde5;
  --color-lightestblue: #70bcd9;
  --color-red: #ff5540;
  --color-grey-81: #303030;
  --color-grey-76: #3e3e3e;
  --color-grey-20: #cccccc;
  --color-grey-09: #e7e7e7;
  --color-grey-02: #f9f9f9;
  --font-size: 16px;
  --font-size-small: 12px;
  --font-family: "IBM Plex Serif", "Times New Roman", serif;
  --font-family-mono: "IBM Plex Mono", monospace;
  --grid-spacing: 2.5rem;
}

/* BASICS
----------------------------------------------------- */
html {
  font-size: 62.5%;
}

body {
  padding: 0;
  margin: 0;
  color: var(--color-grey-81);
  background-color: var(--color-lightblue);
  line-height: 1.6;
  font-family: var(--font-family);
  font-size: var(--font-size);
}

#app {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* COMPONENTS
----------------------------------------------------- */
figure {
  padding: 0;
  margin: 0;
  line-height: 0;
  border: .1rem dashed white; /* TODO: Remove. For layouting purposes */
}

.figure--trendpath {
  background-color: var(--color-lightblue);
}

.reference-line {
  stroke: white;
  stroke-width: 1;
  stroke-dasharray: 2;
}

fieldset {
  border: none;
}

fieldset.wrapper__checkbox {
  padding: 0;
  margin: 0;
  font-family: var(--font-family-mono);
  text-align: center;
  color: white;
}

.wrapper__checkbox * {
  cursor: pointer;
}

.checkbox--custom input {
  opacity: 0;
  margin: 0;
  vertical-align: top;
}

.checkbox--custom {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  margin-right: .8rem;
  vertical-align: middle;
  background-color: transparent;
  border: .1rem dashed white;
}

.checkbox--custom[checked] {
  background-color: var(--color-red);
}

.arrow--forward {
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  vertical-align: top;
  background-image: url("assets/arrow_forward.svg");
  transition: transform .25s;
}

.arrow--headline {
  width: 3.6rem;
  height: 3.6rem;
}

.arrow--decreasing {
  transform: rotate(45deg);
}

.arrow--increasing {
  transform: rotate(-45deg);
}

.figure__description {
  padding-left: .4rem;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-small);
  color: white;
  background-color: var(--color-lightestblue);
}

.indicator {
  font-family: var(--font-family-mono);
  color: white;
}

.indicator--left-aligned {
  text-align: left;
}

.indicator--right-aligned {
  text-align: right;
}

.indicator--small-font {
  font-size: var(--font-size-small);
}

.indicator--highlighted {
    padding-right: .5rem;
    font-family: var(--font-family-mono);
    font-weight: 700;
    color: var(--color-grey-81);
    background-color: white;
}

/* GRIDS
----------------------------------------------------- */
.grid--table {
  display: grid;
  grid-gap: calc(var(--grid-spacing) / 4);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-template-areas:
    "header-left header-right"
    "center center"
    "footer-left footer-right";
  background-color: transparent;
}

.grid--table > .header-left {
  grid-area: header-left;
}

.grid--table > .header-right {
  grid-area: header-right;
  text-align: right;
}

.grid--table > .center {
  grid-area: center;
}

.grid--table > .footer-left {
  grid-area: footer-left;
}

.grid--table > .footer-right {
  grid-area: footer-right;
  text-align: right;
}

.grid--12-columns {
  display: grid;
  grid-gap: var(--grid-spacing);
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: max-content;
}

.grid--autofit {
  display: grid;
  grid-gap: var(--grid-spacing);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid--autofit-small {
  display: grid;
  grid-gap: calc(var(--grid-spacing) / 4);
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-rows: minmax(min-content, max-content);
}

.grid--autofill-squares {
  display: grid;
  grid-gap: calc(var(--grid-spacing) / 2);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
}

.grid--autofill-squares::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.grid--autofill-squares > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

/* SECTIONS
----------------------------------------------------- */
.chapter {
  max-width: 140rem;
  padding: 0 var(--grid-spacing) var(--grid-spacing);
  border: .1rem dashed transparent; /* TODO: Remove. Helper for dividing sections */
}

.chapter__block {
  grid-column: span 12;
}

.chapter__block > *:last-child {
  margin-bottom: 0;
}

@media (min-width: 700px) {
  .chapter__block {
    grid-column: 2 / 12;
  }
}

@media (min-width: 1000px) {
  .chapter__block {
    grid-column: 4 / 10;
  }
}

.chapter__block--highlighted {
  padding: calc(var(--grid-spacing) / 2);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-small);
  color: white;
  background-color: var(--color-lightestblue);
}

.chapter__block--wide {
  grid-column: span 12;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: calc(var(--grid-spacing) / 2) var(--grid-spacing);
  grid-column: span 12;
  color: white;
  background-color: var(--color-red);
}

/* TYPOGRAPHY
----------------------------------------------------- */
h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
  margin-top: 0;
  margin-bottom: var(--grid-spacing);
  font-weight: 700;
  line-height: 1.25;
  color: white;
}
h1 {
  font-size: calc(var(--font-size) * 2.6);
}
h2 {
  font-size: calc(var(--font-size) * 1.4);
}
h3 {
  font-size: calc(var(--font-size) * 1.2);
}
h4 {
  font-size: var(--font-size);
}
h5 {
  font-size: var(--font-size);
}
h6 {
  font-size: var(--font-size);
}

@media (min-width: 750px) {
  h1 {
    font-size: calc(var(--font-size) * 4);
  }
  h2 {
    font-size: calc(var(--font-size) * 2.4);
  }
  h3 {
    font-size: calc(var(--font-size) * 1.8);
  }
  h4 {
    font-size: calc(var(--font-size) * 1.4);
  }
  h5 {
    font-size: calc(var(--font-size) * 1.2);
  }
  h6 {
    font-size: var(--font-size);
  }
}

p {
  margin-top: 0;
  margin-bottom: var(--grid-spacing);
}

a {
  color: inherit;
  text-decoration: none;
  border-bottom: .1rem dashed white;
  transition: color 0.1s;
}
a:hover {
  color: white;
}

/* BUTTONS
----------------------------------------------------- */
.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: white;
  text-align: center;
  font-family: var(--font-family-mono);
  font-size: inherit;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border: none;
  background-color: var(--color-red);
  cursor: pointer;
  box-sizing: border-box; }
.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  color: white; }
.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
  color: white;
  background-color: var(--color-red); }
.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
  color: white;
  background-color: var(--color-red); }

/* ANIMATIONS
----------------------------------------------------- */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
