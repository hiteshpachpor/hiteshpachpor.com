<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;600&display=swap');

#app {
  font-family: Barlow, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.4;
}

a, a:visited, a:active {
  text-decoration: none;
  font-weight: 600;
  color: inherit;
}

:root {
  --text-color: #2c3e50;
  --light-text-color: #6f8498;
  --blue-background: #186dc1;
  --grey-background: #fff;
  --white: #fff;
}
</style>
