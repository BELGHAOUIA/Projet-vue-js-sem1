<template>
  <div class="signUp">
    <form class="form-inline" @submit.prevent="addUser()">
      <div class="alert alert-success text" v-if="isSuccess">
        User Created Successfully
      </div>
      <div class="alert alert-info text" v-if="error">User already exists</div>
      <label class="sr-only" for="createName">Name</label>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="createName"
        placeholder="Foulen Ben Foulen"
        v-model="name"
      />

      <label class="sr-only" for="createUserName">Username</label>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input
          type="text"
          class="form-control"
          id="createUserName"
          placeholder="Username"
          v-model="userName"
        />
      </div>

      <label class="sr-only" for="createPassword">Password</label>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">*</div>
        </div>
        <input
          type="password"
          class="form-control"
          id="createPassword"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <br />
      <button type="submit" class="btn mb-2">Sign Up</button>
    </form>
    <div class="pic"></div>
  </div>
</template>
<script>
export default {
  name: "SignUpComponent",
  data() {
    return {
      name: "",
      userName: "",
      password: null,
      newUser: "",
      isSuccess: false,
      error: false,
    };
  },
  props: {
    usersNumber: {
      type: Number,
    },
    users: {
      type: Array,
    },
  },
  methods: {
    addUser() {
      this.error = false;
      this.isSuccess = false;
      if (this.name === "" || this.userName === "" || this.password === null) {
        alert("Informations incomplet. SVP remplissez les champs.");
        return;
      }
      for (var i = 0; i < this.users.length; i++) {
        if (
          this.users[i].name == this.name &&
          this.users[i].password == this.password
        ) {
          this.error = true;
          return;
        }
      }
      if (!this.error) {
        this.newUser = {
          id: this.usersNumber,
          name: this.name,
          userName: this.userName,
          password: this.password,
        };
        this.$emit("addUser", this.newUser);
        this.name = "";
        this.userName = "";
        this.password = "";
        this.isSuccess = true;
      }
    },
  },
};
</script>
<style scoped>
.signUp {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-timing-function: ease;
  transition-duration: 400ms;
}
form {
  background-color: white;
  padding: 5rem;
  border-radius: 2px;
  border: 5px solid #8e85da;
}

.text {
  position: absolute;
  transform: translateY(-110%);
  transition-timing-function: ease;
  transition-duration: 400ms;
}

button {
  background-color: #8e85da;
  color: white;
}

button:hover {
  background-color: #8d85da89;
  color: white;
}

@media screen and (max-width: 500px) {
  form {
    padding: 2rem;
    padding-top: 5rem;
    transition-timing-function: ease;
    transition-duration: 400ms;
  }
}
</style>
