<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
:root {
  --primary-color: #003399;
  --neutral-color: #3e3e3e;
  --medium-color: #8c8c8c;
  --light-color: #efefef;
  --superlight-color: #f9f9f9;
  --font-size: 15px;
  --font-family: "Fira Sans", sans-serif;
  --spacing: 2.5rem;
}

html {
  font-size: 62.5%;
}

body {
  padding: 0;
  margin: 0;
  color: var(--neutral-color);
  background-color: var(--superlight-color);
  font-family: var(--font-family);
  font-size: var(--font-size);
}

#app {
  padding: var(--spacing);
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: var(--spacing);
  font-weight: 300; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

@media (min-width: 550px) {
  h1 { font-size: 5.0rem; }
  h2 { font-size: 4.2rem; }
  h3 { font-size: 3.6rem; }
  h4 { font-size: 3.0rem; }
  h5 { font-size: 2.4rem; }
  h6 { font-size: 1.5rem; }
}

p {
  margin-top: 0;
  margin-bottom: var(--spacing); }

a {
  color: #1EAEDB; }
a:hover {
  color: #0FA0CE; }
</style>
