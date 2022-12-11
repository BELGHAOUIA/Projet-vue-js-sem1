<template>
  <div class="navComponent">
    <div class="menu">
      <button class="nav" type="button" @click="$emit('showReviews')">
        <i>reviews {{ usersComments.length }} </i>
      </button>
      <button class="nav" type="button" @click="$emit('showCart')">
        <i v-if="activeUser != null"
          >Cart {{ usersCart[activeUser].booksIds.length }}</i
        >
        <i v-else>Cart 0</i>
      </button>
      <button class="nav" @click="$emit('signUp')" type="button">
        <i>Sign up</i>
      </button>
      <button class="nav" @click="$emit('signIn')" type="button">
        <i>Sign in</i>
      </button>
      <button
        id="nav-toggle"
        type="button"
        @click="toggleNav(), $emit('home')"
      ></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavComponent",
  data() {
    return {};
  },
  props: {
    usersCart: {
      type: Array,
    },
    usersComments: {
      type: Array,
    },
    activeUser: {
      type: Number,
    },
  },
  methods: {
    toggleNav() {
      let navs = document.querySelectorAll(".nav");
      navs.forEach(function (nav) {
        nav.classList.toggle("active");
      });
    },
  },
  computed: {},
};
</script>
<style scoped>
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
.navComponent {
  position: relative;
  z-index: 999;
}

#nav-toggle,
.nav {
  height: 5rem;
  width: 5rem;
  position: fixed;
  z-index: 3;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  background-color: #8e85da;
  border: none;
  border-radius: 5rem;
  outline: none;
  box-shadow: 0rem 0rem 4rem rgba(0 0 0 / 35%);
  cursor: pointer;
  transition: transform, background-color;
  transition-timing-function: ease;
  transition-duration: 400ms;
  border: 5px dashed white;
}

#nav-toggle:hover {
  transform: translateX(-50%) scale(1.5);
}

#nav-toggle:active {
  transform: translateX(-50%) scale(0.96);
}

.nav:active {
  transform: scale(0.6);
}

i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.96);
  color: rgb(246, 231, 224);
  font-size: 1rem;
  transition-timing-function: ease;
  transition-duration: 400ms;
}
.active:first-child {
  transform: translate(-600%) scale(1.5);
  transition-timing-function: ease;
  transition-duration: 400ms;
}

.active:nth-child(2) {
  transform: translate(-300%) scale(1.5);
  transition-timing-function: ease;
  transition-duration: 400ms;
}

.active:nth-child(3) {
  transform: translate(500%) scale(1.5);
  transition-timing-function: ease;
  transition-duration: 400ms;
}

.active:nth-child(4) {
  transform: translate(200%) scale(1.5);
  transition-timing-function: ease;
  transition-duration: 400ms;
}

.active:hover {
  border: 4px solid white;
}

.active:active > i {
  color: black;
}

.active:active {
  border: 4px solid black;
}

@media screen and (max-width: 1000px) {
  .active:first-child {
    transform: translate(-450%) scale(1.2);
  }

  .active:nth-child(2) {
    transform: translate(-250%) scale(1.2);
  }

  .active:nth-child(3) {
    transform: translate(350%) scale(1.2);
  }

  .active:nth-child(4) {
    transform: translate(150%) scale(1.2);
  }
}

@media screen and (max-width: 768px) {
  .active:first-child {
    transform: translate(-500%) scale(1.2);
    transition-timing-function: ease;
    transition-duration: 400ms;
  }

  .active:nth-child(2) {
    transform: translate(-250%) scale(1.2);
    transition-timing-function: ease;
    transition-duration: 400ms;
  }

  .active:nth-child(3) {
    transform: translate(-500%, -150%) scale(1.2);
    transition-timing-function: ease;
    transition-duration: 400ms;
  }

  .active:nth-child(4) {
    transform: translate(-250%, -150%) scale(1.2);
    transition-timing-function: ease;
    transition-duration: 400ms;
  }

  #nav-toggle,
  .nav {
    height: 4rem;
    width: 4rem;
    left: 80%;
    bottom: 2rem;
  }
}

@media screen and (max-width: 400px) {
  #nav-toggle,
  .nav {
    height: 3.5rem;
    width: 3.5rem;
    left: 85%;
    transition-timing-function: ease;
    transition-duration: 400ms;
  }
}
</style>
