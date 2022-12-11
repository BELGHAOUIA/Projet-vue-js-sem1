<template>
  <div class="BooksComponent books">
    <div v-for="book in books" :key="book.id">
      <div class="book">
        <img :src="book.picture" alt="Please Wait" />
        <div class="hover">
          <div class="description">
            <div class="title">Title: {{ book.title }}</div>
            <div class="author">Author: {{ book.author }}</div>
            <div class="genre">Genre: {{ book.genre }}</div>
            <div class="price">Price: {{ book.price }}</div>
          </div>
          <button
            class="btn"
            :class="{ disabledButton: activeUser == null }"
            :disabled="activeUser == null"
            @click="buyBook(book)"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventServices from "../services/EventServices.js";
export default {
  name: "BooksComponent",
  data() {
    return {
      books: [],
      userBooks: [],
    };
  },
  props: {
    activeUser: {
      type: Number,
    },
  },
  methods: {
    async getBooksData() {
      //eslint-disable-next-line
      await EventServices.getBooks().then((response) => (this.books = response.data));
    },
    buyBook(book) {
      this.$emit("addBookToUserCart", book.id);
    },
  },
  beforeMount() {
    this.getBooksData();
  },
};
</script>
<style scoped>
/* eslint-disable */

* {
  border-radius: 3px;
}

.disabledButton {
  filter: blur(3px);
  cursor: not-allowed;
}

.hover {
  position: absolute;
  top: 0;
  left: 0;
  text-align: left;
  transform: scale(0);
  z-index: -1;
  filter: blur(5px);
  overflow-y: hidden;
  background-color: rgba(225, 174, 248, 0.938);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: underline;
  font-weight: bold;
  text-decoration: none;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  color: rgb(44, 2, 44);
}

.book:hover .hover {
  cursor: pointer;
  transform: scale(1);
  filter: blur(0px);
  z-index: 1;
  opacity: 1;
  width: 100%;
  padding: 0.5em;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: 2000ms;
}

.book {
  position: relative;
  padding: 1rem;
}

.books {
  display: grid;
  grid-template-columns: repeat(4, auto);
  text-align: center;
  gap: 2em;
  padding: 0.5rem;
}

img {
  width: 100%;
}

img,
.book {
  transform: scale(1.01);
  z-index: 999;
  cursor: pointer;
  transition-timing-function: ease;
  transition-duration: 400ms;
  border-radius: 10px;
  background-image: linear-gradient(135deg, #9708cc, #43cbff, #9708cc, #43cbff);
}

button {
  background-image: linear-gradient(135deg, #9708cc, #43cbff, #9708cc, #43cbff);
  color: white;
  border-color: 3px white;
}

button:hover {
  border-color: rgb(63, 3, 63);
  color: rgb(63, 3, 63);
}

@media (max-width: 700px) {
  .books {
    display: grid;
    grid-template-columns: repeat(3, auto);
  }
}

@media (max-width: 600px) {
  .books {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
}

@media (max-width: 400px) {
  .books {
    display: grid;
    grid-template-columns: auto;
  }

  img {
    width: 100%;
  }
}
</style>
