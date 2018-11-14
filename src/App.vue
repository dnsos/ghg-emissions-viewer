<template>
  <div id="app" v-cloak>
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
:root {
  --color-primary: #003399;
  --color-secondary: #ff3939;
  --neutral-color: #3e3e3e;
  --medium-color: #cccccc;
  --light-color: #e7e7e7;
  --superlight-color: #f9f9f9;
  --font-size: 16px;
  --font-family: "IBM Plex Sans", sans-serif;
  --spacing: 2.5rem;
}

html {
  font-size: 62.5%;
}

body {
  padding: 0;
  margin: 0;
  color: var(--neutral-color);
  background-color: white;
  line-height: 1.6;
  font-family: var(--font-family);
  font-size: var(--font-size);
}

#app {
  padding: 0;
  display: flex;
  flex-direction: column;
}

.s-grid {
  padding: var(--spacing);
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: repeat(12, 1fr);
}

nav {
  position: sticky;
  top: 0;
  padding: var(--spacing);
  grid-column: span 12;
  color: white;
  background-color: var(--color-secondary);
}

[v-cloak] > * { display: none; }
[v-cloak]::before { content: "Application is loading..."; }

h1, h2, h3, h4, h5, h6 {
  display: block;
  margin-top: 0;
  margin-bottom: var(--spacing);
  font-weight: 400; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

@media (min-width: 550px) {
  h1 { font-size: calc(var(--font-size) * 3); }
  h2 { font-size: calc(var(--font-size) * 2.4); }
  h3 { font-size: calc(var(--font-size) * 1.8); }
  h4 { font-size: calc(var(--font-size) * 1.4); }
  h5 { font-size: calc(var(--font-size) * 1.2); }
  h6 { font-size: var(--font-size); }
}

p {
  margin-top: 0;
  margin-bottom: var(--spacing); }

a {
  color: #1EAEDB; }
a:hover {
  color: #0FA0CE; }
</style>
