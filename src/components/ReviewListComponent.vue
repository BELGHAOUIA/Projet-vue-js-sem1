<template>
  <div class="userReview">
    <form class="form-inline" @submit.prevent="submitReview()">
      <label for="rating"
        ><h2>If you liked our services rate us, please! ☻♥</h2></label
      >
      <select name="rating" class="form-select" id="rating" v-model="rating">
        <option value="1">meh...</option>
        <option value="2">ok...</option>
        <option value="3">nice☺...</option>
        <option value="4">good☻...</option>
        <option value="5">fantastic♥...</option>
      </select>
      <button type="submit" class="btn mb-2 btn-primary">Submit Review</button>
    </form>
  </div>
  <div class="reviews">
    <div
      class="review"
      v-for="userComment in usersComments"
      :key="userComment.index"
    >
      <div class="rate" v-if="userComment.rating != null">
        <span
          ><div class="userName">{{ userComment.userName }}</div>
          <li v-if="userComment.rating == 1">⭐</li>
          <li v-if="userComment.rating == 2">⭐⭐</li>
          <li v-if="userComment.rating == 3">⭐⭐⭐</li>
          <li v-if="userComment.rating == 4">⭐⭐⭐⭐</li>
          <li v-if="userComment.rating == 5">⭐⭐⭐⭐⭐</li>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReviewsComponent",
  data() {
    return {
      usersComments: [],
      activeUser: null,
      review: null,
      rating: null,
    };
  },
  methods: {
    submitReview() {
      this.usersComments = JSON.parse(localStorage.getItem("usersComments"));
      this.activeUser = JSON.parse(localStorage.getItem("activeUser"));
      this.usersComments[this.activeUser].rating = this.rating;
      localStorage.setItem("usersComments", JSON.stringify(this.usersComments));
    },
  },
  watch: {
    activeUser: {
      handler() {
        localStorage.setItem(
          "usersComments",
          JSON.stringify(this.usersComments)
        );
      },
      deep: true,
    },
  },
  mounted() {
    this.usersComments = JSON.parse(localStorage.getItem("usersComments"));
    this.activeUser = JSON.parse(localStorage.getItem("activeUser"));
  },
};
</script>
<style scoped>
form {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

select {
  width: 10%;
}
.userReview,
.rate {
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 3px;
}
.reviews {
  display: grid;
  grid-template-columns: repeat(4, auto);
}

@media screen and (max-width: 700px) {
  .reviews {
    grid-template-columns: repeat(2, auto);
  }
}
@media screen and (max-width: 500px) {
  .reviews {
    grid-template-columns: repeat(1, auto);
  }
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
}
</style>
