<template>
    <div class="bottomfooter">
        {{Memoji1}}
        <div class="copyright"><p><b>©️ 2022</b> nindenkawe.rw </p>
            <div class="social">
                <ul>
                    <li><a href="#"><i class="fa fa-lg fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-lg fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-lg fa-github"></i></a></li>
                </ul>
            </div>
        </div>
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
        left: 639px;
        top: 70px;
        color: gold;
        border-radius: 10px;
        border: 2px solid darkgreen;
    }

    .social {
    margin: 0;
    padding: 0;
}

    .social ul {
        margin: 0;
        padding: 5px;
    }

    .social ul li {
        margin: 5px;
        list-style: none outside none;
        display: inline-block;
    }

    .social i {
        width: 40px;
        height: 40px;
        color: #FFF;
        background-color: #909AA0;
        font-size: 22px;
        text-align:center;
        padding-top: 12px;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        -o-border-radius: 50%;
        transition: all ease 0.3s;
        -moz-transition: all ease 0.3s;
        -webkit-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        -ms-transition: all ease 0.3s;
    }

    .social i:hover {
        color: #FFF;
        text-decoration: none;
        transition: all ease 0.3s;
        -moz-transition: all ease 0.3s;
        -webkit-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        -ms-transition: all ease 0.3s;
    }
    .social .fa-twitter:hover { /* round twitter icon*/
    background: #00ABE3;
}
    .social .fa-github:hover { /* round github icon*/
    background: #343434;
}
    .social .fa-linkedin:hover { /* round linkedin icon*/
    background: #0094BC;
}
</style>