<template>
    <nav class="flex justify-center space-x-4 p-3">
    <button class="btn-primary">
      <span class="text-white font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><router-link to="/">Projects</router-link></span>
    </button>
    <button class="btn-primary">
      <span class="text-white font-semibold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><router-link to="/Resume">Resume</router-link></span>
    </button> 
    </nav>
    <router-view/>
</template>