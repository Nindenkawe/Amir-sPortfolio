<template>
    <div class="bottomfooter">
        {{Memoji1}}
        <div class="copyright"><p><b>©️ 2022</b> nindenkawe.rw </p></div>
    </div>
</template>

<script>
    export default{
        props:['Memoji1']
  }
</script>

<style scoped>
    .bottomfooter{
        position: absolute;
        width: 453px;
        height: 56px;
        left: 0px;
        top: 668px;
    }
    .copyright{
        position: inherit;
        width: 453px;
        height: 56px;
        left: 570px;
        top: 70px;
        color: gold;
        border-radius: 10px;
        border: 2px solid darkgreen;
    }
</style>