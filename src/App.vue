<template>
    <nav class="flex justify-center space-x-4 p-3">
      <router-link to="/" class="btn-primary text-white font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Resume</router-link>
    
      <router-link to="/projects" class="btn-primary text-white font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</router-link>
    
    </nav>
    <router-view/>
</template>

<style>
  body {
    height: 300px;
    display: block;
    background-color: rgb(10, 2, 31);
    font-family: 'Space Mono', monospace;
    /* Set the background image */
/*     background-image: url("./assets/bitme/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1; */
  }

  @media screen and (max-width: 768px) {
    #app {
      display: none;
    }
  }
</style>