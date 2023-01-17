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
    <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link" class="card-link"><b>Cert:</b>10x1000 Fintech Foundation Program</a><br><br>
    <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link" class="card-link"><b>Cert:</b>Google Data Analytics Professional Certificate</a> 
  </div>
  
  </div>
  <div class="git">
    <img style="position: relative; color: gold;" src="https://ghchart.rshah.org/Nindenkawe" alt="Nindankawe's git contribution" />
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

<style scoped>
.cv{
  position: absolute;
  width: 1020px;
  height: 497px;
  left: 328px;
  top: 120px;
  border-radius: 10px;
  color: #ccd6f6;
  background-color: black;
  font-size: 11pt;
  font-family: Inconsolata, monospace;
  padding: 0.5em 1.5em 1em 1em;
  
  
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