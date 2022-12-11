<template>
  <div class="signUp">
    <form class="form-inline" @submit.prevent="logUser()">
      <div class="alert alert-success text" v-if="isFound">
        User Logged In Successfully
      </div>
      <div class="alert alert-danger text" v-if="!isFound && isFound != null">
        User Not Found
      </div>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Foulen Ben Foulen"
        v-model="name"
      />

      <label class="sr-only" for="inlineFormInputGroupUsername2"
        >Password</label
      >
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">*</div>
        </div>
        <input
          type="password"
          class="form-control"
          id="inlineFormInputGroupUsername2"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <br />
      <button type="submit" class="btn mb-2">Sign In</button>
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
      password: null,
      checkUser: [],
    };
  },
  props: {
    isFound: {
      type: Boolean,
    },
  },
  methods: {
    logUser() {
      if (this.name === "" || this.password === null) {
        alert("Informations incomplet. SVP remplissez les champs.");
        return;
      }

      this.checkUser = {
        name: this.name,
        password: this.password,
      };
      this.$emit("checkUser", this.checkUser);
      this.name = "";
      this.password = "";
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
