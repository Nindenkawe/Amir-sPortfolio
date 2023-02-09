<template>
  <div class="">
    <nav class="flex justify-center space-x-4">
    <button class="btn-primary">
      <div class="font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><router-link to="/">Home</router-link></div>
    </button>
    <button class="btn-primary">
      <div class="font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><router-link to="/Resume">Resume</router-link></div>
    </button> 
    </nav>
  </div>
  <transition name="fade-transition" mode="out-in">
    <router-view/>
  </transition>
</template>