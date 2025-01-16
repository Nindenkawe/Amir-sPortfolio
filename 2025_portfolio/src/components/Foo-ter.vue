<template>
  <footer class="footer">
    <ul class="ul li a.active">
      <li>
        <a href="https://www.linkedin.com/in/nindenkawe-amir-5713bb7a/">
          <span class="fa fa-linkedin"></span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/amiritius">
          <span class="fa fa-twitter"></span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Nindenkawe">
          <span class="fa fa-github"></span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

.footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

ul {
  display: flex;
  list-style: none;
}

ul li {
  position: relative;
  margin: 0 10px;
}

ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #2a2a2a;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

ul li a:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

ul li a.active {
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3px);
  }
}

ul li a span {
  color: #2a2a2a;
  font-size: 40px;
}

ul li:nth-child(1) a {
  background-color: #edf0f1;
}

ul li:nth-child(2) a {
  background-color: #edf0f1;
}

ul li:nth-child(3) a {
  background-color: #edf0f1;
}

ul li:nth-child(4) a {
  background-color: #353204;
}
</style>

<script>
// JavaScript code to add/remove active class on click
const icons = document.querySelectorAll('.footer a')

icons.forEach((icon) => {
  icon.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      icons.forEach((otherIcon) => {
        otherIcon.classList.remove('active')
      })
      this.classList.add('active')
    }
  })
})
</script>
