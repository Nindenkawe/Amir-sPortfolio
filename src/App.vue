<template>
  <nav>
    <router-link to="/"><div class="btn btn-outline-dark"><b>Home</b></div></router-link> |
    <router-link to="/Resume"><div class="btn btn-outline-dark"><b>Resume</b></div></router-link>
  </nav>
  <router-view/>
</template>

<style>
  body{
    background: #152B39;
  }
    nav{
        position: absolute;
        background-color: inherit; 
        overflow: hidden;
        border-radius: 10px;
        width: auto;
        height: auto;
        left: 755px;
        top: 69px;
        border: 2px solid darkgreen;
        box-shadow: 2px 2px 5px darkgreen;
    }
    b{
        color: gold;
    }
</style>