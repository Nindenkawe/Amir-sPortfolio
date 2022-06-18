<template>
    <div class="bottomfooter">
        {{Memoji1}}
        <div class="copyright">nindenkawe.rw @2022</div>
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
        width: 1510px;
        height: 96px;
        left: 0px;
        top: 678px;
    }
    .copyright{
        position: relative;
        width: 453px;
        height: 56px;
        left: 520px;
        top: 40px;
    }
</style>