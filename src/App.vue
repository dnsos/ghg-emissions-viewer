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
  --color-red: #ff5540;
  --color-grey-76: #3e3e3e;
  --color-grey-20: #cccccc;
  --color-grey-09: #e7e7e7;
  --color-grey-02: #f9f9f9;
  --font-size: 16px;
  --font-size-small: 12px;
  --font-family: "IBM Plex Sans", sans-serif;
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
  color: var(--color-eublue);
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

figure {
  padding: 0;
  margin: 0;
}

/* GRIDS
----------------------------------------------------- */
.grid--12-columns {
  padding: var(--grid-spacing);
  display: grid;
  grid-gap: var(--grid-spacing);
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: max-content;
}

.grid--autofit {
  /*padding: var(--grid-spacing);*/
  display: grid;
  grid-gap: var(--grid-spacing);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid--autofill-squares {
  display: grid;
  grid-gap: calc(var(--grid-spacing) / 2);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
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
  max-width: 120rem;
  min-height: 100vh;
}

.chapter__introduction {
  grid-column: span 12;
}

@media (min-width: 85rem) {
  .chapter__introduction {
    grid-column: 4 / 10;
  }
}

.chapter__content {
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
  color: white;
}
h1 {
  font-size: 4rem;
  line-height: 1.2;
}
h2 {
  font-size: 3.6rem;
  line-height: 1.25;
}
h3 {
  font-size: 3rem;
  line-height: 1.3;
}
h4 {
  font-size: 2.4rem;
  line-height: 1.35;
}
h5 {
  font-size: 1.8rem;
  line-height: 1.5;
}
h6 {
  font-size: 1.5rem;
  line-height: 1.6;
}

@media (min-width: 550px) {
  h1 {
    font-size: calc(var(--font-size) * 3);
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
  border-bottom: 0.1rem solid var(--color-eublue);
  transition: color 0.2s;
}
a:hover {
  color: white;
}
</style>
