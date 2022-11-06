<template>
  <Logo />
  <Rackserver />
  <Footer />
  <section class="cv">
    <div class="card-dark" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">My Cv</h5>
    <h6 class="card-subtitle mb-2 text-muted">loding links...</h6>
    <p class="card-text">links to my Curriculum vitae & certificates</p>
    <a href="https://docs.google.com/document/d/1AlDBkqS5EMVm2bL_TGbeQUM_OaYRjPyu8Yo1pe7Ckvk/edit?usp=sharing" class="card-link">CV</a><br><br>
    <a href="#" class="card-link"><b>Cert:</b>Edx web dev with Python & JavaScript</a><br><br>
    <a href="#" class="card-link"><b>Cert:</b>CodeCademy Visualize Data with Python</a> 
  </div>
  </div>
  <div class="git">
    <img style="position: relative; color: gold;" src="https://ghchart.rshah.org/409ba5/Nindenkawe" alt="Nindankawe's git contribution" />
  </div>
  </section>
</template>

<script>
  import Logo from '../components/Lo-go.vue'
  import Footer from '../components/Foo-ter.vue'
  import Rackserver from '../components/rack-server.vue'
  export default {
    name: 'Resume-View',
    components: {
      Logo,Footer,Rackserver
    },
  }
</script>

<style>
.cv{
  position: absolute;
  width: 1020px;
  height: 497px;
  left: 328px;
  top: 168px;
  border-radius: 10px;
  border: 2px solid darkgreen;
  color: gold;
  background-color: black;
  font-size: 11pt;
  font-family: Inconsolata, monospace;
  padding: 0.5em 1.5em 1em 1em;
  box-shadow: 2px 2px 5px darkgreen;
  
}
.git{
  position: absolute;
  right: 0;
  top: auto;
  bottom: 0;
  left: auto;
  padding: -1rem;
}
</style>