<template>
  <nav class="flex justify-center space-x-4">
    <button class="btn-primary">
      <div class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><router-link to="/">Home</router-link></div>
    </button>
    <button class="btn-primary">
      <div class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><router-link to="/Resume">Resume</router-link></div>
    </button> 
  </nav>
  <router-view/>
</template>
