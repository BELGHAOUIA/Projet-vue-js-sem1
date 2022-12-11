<template>
  <div class="user">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">ReadBooks</a>
        <div class="icon">
          <i class="fas fa-user-circle"></i>
        </div>
        <ul>
          <li class="nav-item dropdown">
            <a
              v-if="activeUser == null"
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled
            >
              none
            </a>
            <a
              v-else
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ users[activeUser].name }}
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              v-if="activeUser != null"
            >
              <li>
                <a class="dropdown-item" href="#" @click="logOut()">Log out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ProfileBarComponent",
  data() {
    return {};
  },
  props: {
    activeUser: {
      type: Number,
    },
    users: {
      type: Array,
    },
  },
  methods: {
    logOut() {
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
* {
  color: white;
}

.dropdown-item {
  color: black;
  text-align: center;
}

ul {
  position: absolute;
  left: 80%;
  top: 30%;
}

.navbar {
  position: relative;
}

.icon {
  font-size: 1.5em;
  position: absolute;
  top: 22%;
  left: 80%;
}

@media screen and (max-width: 700px) {
  ul {
    left: 50%;
  }
  .icon {
    left: 50%;
  }
  .dropdown-menu {
    margin-right: 1rem;
  }
}
</style>
