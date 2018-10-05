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
  --primary-color: orange;
  --neutral-color: rgb(50, 50, 50);
  --font-size: 16px;
  --font-family: "Open Sans", sans-serif;
}

body {
  padding: 0;
  margin: 0;
  color: var(--neutral-color);
  font-family: var(--font-family);
  font-size: var(--font-size);
}
</style>
