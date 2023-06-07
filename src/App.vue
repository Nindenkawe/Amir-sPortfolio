<template>
    <nav class="flex justify-center space-x-4 p-3">
    <button class="btn-primary text-white font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
      <router-link to="/">Resume</router-link>
    </button> 
    <button class="btn-primary text-white font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
      <router-link to="/projects">Projects</router-link>
    </button>
    </nav>
    <router-view/>
</template>

<style>
body {
  height: 300px;
  display: block;
  background-color: rgb(10, 2, 31);
  font-family: 'Space Mono', monospace;
}
</style>