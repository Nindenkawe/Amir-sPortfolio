<template>
    <div class='menu'>
        <div class="home">
            <h3>{{Home}}</h3>
        </div>
        <div class="resume">
            <h3>{{Resume}}</h3>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            Home: 'Home',
            Resume: 'Resume'
        };
        }
};
</script>
 
<style scoped>
    .menu{
        position: absolute;
        background-color: #333; 
        overflow: hidden;
        border-radius: 10px;
        width: 238px;
        height: 59px;
        left: 690px;
        top: 69px;
        border: 2px solid darkgreen;
    }
    .resume{
        position: relative;
        left: 78px;
        color: gold;

    }

    .home{
        position: absolute;
        left: 10px;
        color: gold;

    }
</style>