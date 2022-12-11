<template>
  <div class="home">
    <profileBar
      class="profile"
      :activeUser="activeUser"
      @logout="logOut"
      :users="users"
    />
    <booksComponent
      v-if="buyBooks"
      @addBookToUserCart="buyBook"
      :activeUser="activeUser"
    />
    <userCart
      v-else-if="!buyBooks && !showReviews"
      @saveChanges="saveChanges"
    />
    <reviewList v-else />
    <signUp
      class="up"
      v-if="signUp"
      @addUser="addUser"
      :usersNumber="usersNumber"
      :users="users"
    />
    <signIn
      class="in"
      v-if="signIn"
      @checkUser="userExists"
      :isFound="isFound"
    />
    <navComponent
      @signIn="signInM"
      @signUp="signUpM"
      @showReviews="showUsersReviews"
      @showCart="showUsersCart"
      @home="goHome"
      :usersCart="usersCart"
      :usersComments="usersComments"
      :activeUser="activeUser"
    />
  </div>
</template>

<script>
import booksComponent from "../components/BooksComponent.vue";
import navComponent from "../components/NavComponent.vue";
import signUp from "../components/SignUpComponent.vue";
import signIn from "../components/SignInComponent.vue";
import profileBar from "../components/ProfileBarComponent.vue";
import userCart from "../components/UserCartComponent.vue";
import reviewList from "../components/ReviewListComponent.vue";

//import EventServices from "../services/EventServices.js";

export default {
  name: "HomeView",
  components: {
    booksComponent,
    navComponent,
    signUp,
    signIn,
    profileBar,
    userCart,
    reviewList,
  },
  data() {
    return {
      users: [],
      signUp: false,
      signIn: false,
      isFound: null,
      activeUser: null,
      usersCart: [],
      usersNumber: 0,
      buyBooks: true,
      showReviews: false,
      usersComments: [],
    };
  },
  methods: {
    addUser(newUser) {
      this.usersNumber++;
      localStorage.setItem("usersNumber", JSON.stringify(this.usersNumber));
      this.usersCart.push({ userId: newUser.id, booksIds: [] });
      this.usersComments.push({
        userId: newUser.id,
        userName: newUser.name,
        rating: null,
      });
      this.users.push(newUser);
      this.id++;
    },
    userExists(checkUser) {
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].name == checkUser.name) {
          if (this.users[i].password == checkUser.password) {
            this.isFound = true;
            this.activeUser = this.users[i].id;
            localStorage.setItem("activeUser", JSON.stringify(this.activeUser));
            return;
          }
        }
        this.isFound = false;
      }
    },
    signInM() {
      if (this.signIn == true) {
        this.signIn = false;
      } else {
        this.signIn = true;
      }
      if (this.signUp == true) {
        this.signUp = false;
      }
      this.isFound = null;
    },
    signUpM() {
      if (this.signUp == true) {
        this.signUp = false;
      } else {
        this.signUp = true;
      }
      if (this.signIn == true) {
        this.signIn = false;
      }
    },
    buyBook(bookId) {
      for (var i = 0; i < this.usersCart.length; i++) {
        if (this.usersCart[i].userId == this.activeUser) {
          this.usersCart[i].booksIds.push(bookId);
          localStorage.setItem("usersCart", JSON.stringify(this.usersCart));
          localStorage.setItem(
            "usersComments",
            JSON.stringify(this.usersComments)
          );
        }
      }
    },
    logOut() {
      this.activeUser = null;
      localStorage.setItem("activeUser", JSON.stringify(this.activeUser));
    },
    showUsersReviews() {
      this.showReviews = true;
      this.buyBooks = false;
    },
    showUsersCart() {
      this.showReviews = false;
      this.buyBooks = false;
    },
    saveChanges() {
      this.usersCart = JSON.parse(localStorage.getItem("usersCart"));
    },
    goHome() {
      this.showReviews = false;
      this.buyBooks = true;
    },
  },
  watch: {
    users: {
      handler() {
        console.log("users array changed!");
        localStorage.setItem("users", JSON.stringify(this.users));
        localStorage.setItem("usersCart", JSON.stringify(this.usersCart));
        localStorage.setItem(
          "usersComments",
          JSON.stringify(this.usersComments)
        );
        localStorage.setItem("activeUser", JSON.stringify(this.activeUser));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.users = JSON.parse(localStorage.getItem("users"));
      this.usersCart = JSON.parse(localStorage.getItem("usersCart"));
      this.usersNumber = JSON.parse(localStorage.getItem("usersNumber"));
      this.usersComments = JSON.parse(localStorage.getItem("usersComments"));
      this.activeUser = JSON.parse(localStorage.getItem("activeUser"));
    }
  },
};
</script>
<style scoped>
.home {
  position: relative;
}
.up,
.in {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 15rem;
}
</style>
