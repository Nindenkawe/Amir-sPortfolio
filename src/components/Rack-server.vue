<template>
  <div class="w-60 h-auto shadow-md bg-white px-1 absolute">
    <div class="housing">
      <div class="foot"></div>
      <div class="foot"></div>
      <ul class="rack">
        <li class="medium">
          <router-link to="#"><b>General statistics</b></router-link>
          <div class="light"></div>
          <div class="light"></div>
        </li>
        <li class="medium">
          <router-link to="#"><b>Insurance</b></router-link>
          <div class="light"></div>
          <div class="light"></div>
        </li>
        <li class="medium">
          <router-link to="#"><b>Transport & Traffic</b></router-link>
          <div class="light"></div>
          <div class="light"></div>
        </li>
        <li class="medium">
          <router-link to=""><b>Finance</b></router-link>
          <div class="light"></div>
          <div class="light"></div>
        </li>
        <li class="large">
          <router-link to="#"><b>Health</b></router-link>
          <div class="light"></div>
          <div class="light"></div>
        </li>
        <li class="large">
          <router-link to="#"><b>...</b></router-link>
          <div class="light"></div>
          <div class="light"></div>
        </li>
        <li class="large">
          <router-link to="#"><b>...</b></router-link>
          <div class="light"></div>
          <div class="light"></div>
        </li>
        <li class="large">
          <router-link to="#">...</router-link>
        </li>
        <li class="large">
          <router-link to="#">...</router-link>
        </li>
        <link rel="manifest" href="/manifest.json">
      </ul>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  #app {
    display: none;
  }
}
.housing {
  margin: 20px auto;
  position: fixed;
  width: 250px;
  height: 515px;
  bottom: 0;
  right: 5%;
  border-radius: 2px;
  border: 8px solid #151515;
  background-color: #151515;
  box-shadow: 0 0 6px -1px rgba(0, 0, 0, 0.2);
}

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
  color: white;
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

</style>
