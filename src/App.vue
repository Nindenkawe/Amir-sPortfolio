<template>
  <nav>
    <router-link to="/"><div class="home"><b>Home</b></div></router-link> |
    <router-link to="/Resume"><div class="resume"><b>Resume</b></div></router-link>
  </nav>
  <router-view/>
</template>

<style>
  body{
    background: #152B39;
  }
    nav{
        position: absolute;
        text-align: center;
        background-color: inherit; 
        overflow: hidden;
        border-radius: 10px;
        width: 238px;
        height: 59px;
        left: 755px;
        top: 69px;
        border: 2px solid darkgreen;
    }
    .resume{
        position: relative;
        left: 70px;
        color: gold;

    }

    .home{
        position: absolute;
        left: 10px;
        color: gold;

    }
</style>