<template>
<div class="">
<div class='housing'>
<!--   <div class='door'>
    <div class='handle'></div>
  </div> -->
  <div class='foot'></div>
  <div class='foot'></div>
  <ul class='rack'>
    <li class='medium'>
      <a href='#'><b>MyPortfolio Web-app</b></a>
      <div class='light'></div>
      <div class='light'></div>
    </li>
    <li class='medium'>
      <a href='#'><b>ESP8266/HCSR04_data_reader</b></a>
      <div class='light'></div>
      <div class='light'></div>
    </li>
    <li class='medium'>
      <router-link to="/Data-Viz_ApexCharts"><b>RW_SYB key_info</b></router-link>
      <div class='light'></div>
      <div class='light'></div>
    </li>
    <li class='medium'>
      <router-link to="/My_version_of_RSE.rw"><b>My version of RSE.rw</b></router-link>
      <div class='light'></div>
      <div class='light'></div>
    </li>
    <li class='large'>
      <a href='#'><b>Pharmacy.rw</b></a>
      <div class='light'></div>
      <div class='light'></div>
    </li>
    <li class='large'>
      <a href='#'><b>...</b></a>
      <div class='light'></div>
      <div class='light'></div>
    </li>
    <li class='large'>
      <a href='#'><b>...</b></a>
      <div class='light'></div>
      <div class='light'></div>
    </li>
    <li class='large'>
      <a href='#'>...</a>
<!--       <div class='light'></div>
      <div class='light'></div> -->
    </li>
    <li class='large'>
      <a href='#'>...</a>
<!--       <div class='light'></div>
      <div class='light'></div> -->
    </li>
    <li class='large'>
      <a href='#'>...</a>
<!--       <div class='light'></div>
      <div class='light'></div> -->
    </li>
  </ul>
</div>
</div>
</template>
<script>
  export default{
    mounted() {
    let rackfunc = document.createElement('rackfunc')
    rackfunc.setAttribute('src', '../rackfunc.js')
    document.head.appendChild(rackfunc)
  },
  }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Oxygen:400,300,700);
.housing {
  margin: 20px auto;
  position: absolute;
  width: 250px;
  height: 525px;
  top: 193px;
  left: 5px;
  border-radius: 2px;
  border: 8px solid #151515;
  background-color: #151515;
  box-shadow: 0 0 6px -1px rgba(0, 0, 0, 0.2);
}

/* .door {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  border-style: solid;
  border-color: #191919;
  border-width: 3px 12px;
  background-color: rgba(230, 230, 230, 0.1);
  z-index: 50;
  -webkit-transform-origin: right;
  -moz-transform-origin: right;
  -ms-transform-origin: right;
  -o-transform-origin: right;
  transform-origin: right;
  -webkit-transition: all 1.2s ease-in-out;
  -moz-transition: all 1.2s ease-in-out;
  transition: all 1.2s ease-in-out;
}
.door.open {
  -webkit-transform: rotateY(135deg) skew(0, -10deg);
  -moz-transform: rotateY(135deg) skew(0, -10deg);
  -ms-transform: rotateY(135deg) skew(0, -10deg);
  -o-transform: rotateY(135deg) skew(0, -10deg);
  transform: rotateY(135deg) skew(0, -10deg);
}
.door .handle {
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -10px;
  width: 6px;
  height: 63px;
  border-radius: 2px;
  background-color: #888;
  box-shadow: 0 0 4px 1px rgba(40, 40, 40, 0.25);
  cursor: pointer;
}
.door .handle:hover {
  background-color: #bbb;
}
.door .handle:active {
  -webkit-transform: translate(0, 4px);
  -moz-transform: translate(0, 4px);
  -ms-transform: translate(0, 4px);
  -o-transform: translate(0, 4px);
  transform: translate(0, 4px);
} */

.foot {
  position: absolute;
  bottom: -14px;
  width: 10%;
  height: 6px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #888;
}
.foot:nth-of-type(1) {
  left: 0;
}
.foot:nth-of-type(2) {
  right: 0;
}

.rack {
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  height: 100%;
  list-style: none;
}
.rack a {
  text-decoration: none;
  color: gold;
}
.rack a:hover {
  text-decoration: underline;
}

.rack li {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #282828;
  background-image: -webkit-linear-gradient(top, #282828, #222, #282828);
  background-image: linear-gradient(to bottom,#282828, #222, #282828);
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  text-align: center;
}
.rack li:first-of-type {
  border-top: none;
}
.rack li:last-of-type {
  border-bottom: none;
}
.rack li:active {
  opacity: 0.5;
}
.rack li:active .light {
  background-color: transparent !important;
  -webkit-animation: none !important;
  -moz-animation: none !important;
  animation: none !important;
}
.rack li .light {
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 1px solid #444;
}
.rack li .light:nth-of-type(1) {
  left: 18px;
  background-color: #16a8c7;
}
.rack li .light:nth-of-type(2) {
  left: 26px;
  -webkit-animation: 2s blink infinite;
  -moz-animation: 2s blink infinite;
  animation: 2s blink infinite;
}

.medium {
  height: 36px;
  line-height: 35px;
  font-size: 0.7em;
}

.large {
  height: 54px;
  line-height: 53px;
  font-size: 0.8em;
}

@-webkit-keyframes blink {
  0%, 70%, 90% {
    background-color: #bb8866;
  }
  80%, 100% {
    background-color: #ffa726;
  }
}
@-moz-keyframes blink {
  0%, 70%, 90% {
    background-color: #66bb6a;
  }
  80%, 100% {
    background-color: #ffa726;
  }
}
@keyframes blink {
  0%, 70%, 90% {
    background-color: #66bb6a;
  }
  80%, 100% {
    background-color: #ffa726;
  }
}
.rack li:nth-of-type(1) .light:nth-of-type(2) {
  -webkit-animation-delay: 937ms;
  -moz-animation-delay: 937ms;
  animation-delay: 937ms;
}

.rack li:nth-of-type(2) .light:nth-of-type(2) {
  -webkit-animation-delay: 920ms;
  -moz-animation-delay: 920ms;
  animation-delay: 920ms;
}

.rack li:nth-of-type(3) .light:nth-of-type(2) {
  -webkit-animation-delay: 797ms;
  -moz-animation-delay: 797ms;
  animation-delay: 797ms;
}

.rack li:nth-of-type(4) .light:nth-of-type(2) {
  -webkit-animation-delay: 838ms;
  -moz-animation-delay: 838ms;
  animation-delay: 838ms;
}

.rack li:nth-of-type(5) .light:nth-of-type(2) {
  -webkit-animation-delay: 278ms;
  -moz-animation-delay: 278ms;
  animation-delay: 278ms;
}

.rack li:nth-of-type(6) .light:nth-of-type(2) {
  -webkit-animation-delay: 11ms;
  -moz-animation-delay: 11ms;
  animation-delay: 11ms;
}

.rack li:nth-of-type(7) .light:nth-of-type(2) {
  -webkit-animation-delay: 512ms;
  -moz-animation-delay: 512ms;
  animation-delay: 512ms;
}

.rack li:nth-of-type(8) .light:nth-of-type(2) {
  -webkit-animation-delay: 698ms;
  -moz-animation-delay: 698ms;
  animation-delay: 698ms;
}

.rack li:nth-of-type(9) .light:nth-of-type(2) {
  -webkit-animation-delay: 834ms;
  -moz-animation-delay: 834ms;
  animation-delay: 834ms;
}

.rack li:nth-of-type(10) .light:nth-of-type(2) {
  -webkit-animation-delay: 556ms;
  -moz-animation-delay: 556ms;
  animation-delay: 556ms;
}

.rack li:nth-of-type(11) .light:nth-of-type(2) {
  -webkit-animation-delay: 11ms;
  -moz-animation-delay: 11ms;
  animation-delay: 11ms;
}

.rack li:nth-of-type(12) .light:nth-of-type(2) {
  -webkit-animation-delay: 41ms;
  -moz-animation-delay: 41ms;
  animation-delay: 41ms;
}

.rack li:nth-of-type(13) .light:nth-of-type(2) {
  -webkit-animation-delay: 332ms;
  -moz-animation-delay: 332ms;
  animation-delay: 332ms;
}

.rack li:nth-of-type(14) .light:nth-of-type(2) {
  -webkit-animation-delay: 976ms;
  -moz-animation-delay: 976ms;
  animation-delay: 976ms;
}

.rack li:nth-of-type(15) .light:nth-of-type(2) {
  -webkit-animation-delay: 390ms;
  -moz-animation-delay: 390ms;
  animation-delay: 390ms;
}

.rack li:nth-of-type(16) .light:nth-of-type(2) {
  -webkit-animation-delay: 283ms;
  -moz-animation-delay: 283ms;
  animation-delay: 283ms;
}

.rack li:nth-of-type(17) .light:nth-of-type(2) {
  -webkit-animation-delay: 70ms;
  -moz-animation-delay: 70ms;
  animation-delay: 70ms;
}

.rack li:nth-of-type(18) .light:nth-of-type(2) {
  -webkit-animation-delay: 975ms;
  -moz-animation-delay: 975ms;
  animation-delay: 975ms;
}

.rack li:nth-of-type(19) .light:nth-of-type(2) {
  -webkit-animation-delay: 218ms;
  -moz-animation-delay: 218ms;
  animation-delay: 218ms;
}

.rack li:nth-of-type(20) .light:nth-of-type(2) {
  -webkit-animation-delay: 776ms;
  -moz-animation-delay: 776ms;
  animation-delay: 776ms;
}

.rack li:nth-of-type(21) .light:nth-of-type(2) {
  -webkit-animation-delay: 626ms;
  -moz-animation-delay: 626ms;
  animation-delay: 626ms;
}

.rack li:nth-of-type(22) .light:nth-of-type(2) {
  -webkit-animation-delay: 425ms;
  -moz-animation-delay: 425ms;
  animation-delay: 425ms;
}

.rack li:nth-of-type(23) .light:nth-of-type(2) {
  -webkit-animation-delay: 730ms;
  -moz-animation-delay: 730ms;
  animation-delay: 730ms;
}

.rack li:nth-of-type(24) .light:nth-of-type(2) {
  -webkit-animation-delay: 662ms;
  -moz-animation-delay: 662ms;
  animation-delay: 662ms;
}

.rack li:nth-of-type(25) .light:nth-of-type(2) {
  -webkit-animation-delay: 707ms;
  -moz-animation-delay: 707ms;
  animation-delay: 707ms;
}

.rack li:nth-of-type(26) .light:nth-of-type(2) {
  -webkit-animation-delay: 122ms;
  -moz-animation-delay: 122ms;
  animation-delay: 122ms;
}

.rack li:nth-of-type(27) .light:nth-of-type(2) {
  -webkit-animation-delay: 888ms;
  -moz-animation-delay: 888ms;
  animation-delay: 888ms;
}

.rack li:nth-of-type(28) .light:nth-of-type(2) {
  -webkit-animation-delay: 884ms;
  -moz-animation-delay: 884ms;
  animation-delay: 884ms;
}

.rack li:nth-of-type(29) .light:nth-of-type(2) {
  -webkit-animation-delay: 630ms;
  -moz-animation-delay: 630ms;
  animation-delay: 630ms;
}

.rack li:nth-of-type(30) .light:nth-of-type(2) {
  -webkit-animation-delay: 984ms;
  -moz-animation-delay: 984ms;
  animation-delay: 984ms;
}

.rack li:nth-of-type(31) .light:nth-of-type(2) {
  -webkit-animation-delay: 126ms;
  -moz-animation-delay: 126ms;
  animation-delay: 126ms;
}

.rack li:nth-of-type(32) .light:nth-of-type(2) {
  -webkit-animation-delay: 184ms;
  -moz-animation-delay: 184ms;
  animation-delay: 184ms;
}

.rack li:nth-of-type(33) .light:nth-of-type(2) {
  -webkit-animation-delay: 513ms;
  -moz-animation-delay: 513ms;
  animation-delay: 513ms;
}

.rack li:nth-of-type(34) .light:nth-of-type(2) {
  -webkit-animation-delay: 788ms;
  -moz-animation-delay: 788ms;
  animation-delay: 788ms;
}

.rack li:nth-of-type(35) .light:nth-of-type(2) {
  -webkit-animation-delay: 740ms;
  -moz-animation-delay: 740ms;
  animation-delay: 740ms;
}

.rack li:nth-of-type(36) .light:nth-of-type(2) {
  -webkit-animation-delay: 196ms;
  -moz-animation-delay: 196ms;
  animation-delay: 196ms;
}

.rack li:nth-of-type(37) .light:nth-of-type(2) {
  -webkit-animation-delay: 243ms;
  -moz-animation-delay: 243ms;
  animation-delay: 243ms;
}

.rack li:nth-of-type(38) .light:nth-of-type(2) {
  -webkit-animation-delay: 447ms;
  -moz-animation-delay: 447ms;
  animation-delay: 447ms;
}

.rack li:nth-of-type(39) .light:nth-of-type(2) {
  -webkit-animation-delay: 599ms;
  -moz-animation-delay: 599ms;
  animation-delay: 599ms;
}

.rack li:nth-of-type(40) .light:nth-of-type(2) {
  -webkit-animation-delay: 766ms;
  -moz-animation-delay: 766ms;
  animation-delay: 766ms;
}

.rack li:nth-of-type(41) .light:nth-of-type(2) {
  -webkit-animation-delay: 931ms;
  -moz-animation-delay: 931ms;
  animation-delay: 931ms;
}

.rack li:nth-of-type(42) .light:nth-of-type(2) {
  -webkit-animation-delay: 923ms;
  -moz-animation-delay: 923ms;
  animation-delay: 923ms;
}
</style>
