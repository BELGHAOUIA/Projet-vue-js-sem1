<template>
  <div class="BooksComponent books">
    <div v-for="userBook in userBooks" :key="userBook">
      <div class="book">
        <img :src="userBook.picture" alt="Please Wait" />
        <div class="hover">
          <div class="options">
            <button
              class="btn btn-close"
              @click="deleteBook(userBook)"
            ></button>
          </div>
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
      usersCart: [],
      userBooks: [],
      activeUser: null,
    };
  },
  methods: {
    async getBooksData() {
      this.userBooks = [];
      //eslint-disable-next-line
          await EventServices.getBooks().then((response) => (this.books = response.data));
      this.usersCart = JSON.parse(localStorage.getItem("usersCart"));
      this.activeUser = JSON.parse(localStorage.getItem("activeUser"));
      for (var i = 0; i < this.books.length; i++) {
        for (
          var j = 0;
          j < this.usersCart[this.activeUser].booksIds.length;
          j++
        ) {
          if (this.usersCart[this.activeUser].booksIds[j] == this.books[i].id) {
            this.userBooks.push(this.books[i]);
          }
        }
      }
    },
    deleteBook(userBook) {
      for (var j = 0; j < this.userBooks.length; j++) {
        if (this.userBooks[j].id == userBook.id) {
          this.userBooks.splice(this.userBooks[j], 1);
          console.log(this.userBooks[j]);
        }
      }
      for (
        var i = 0;
        i < this.usersCart[this.activeUser].booksIds.length;
        i++
      ) {
        if (this.usersCart[this.activeUser].booksIds[i] == userBook.id) {
          this.usersCart[this.activeUser].booksIds.splice(
            this.usersCart[this.activeUser].booksIds[i],
            1
          );
          localStorage.setItem("usersCart", JSON.stringify(this.usersCart));
          this.$emit("saveChanges");
        }
      }
    },
  },
  watch: {
    usersCart: {
      handler() {
        localStorage.setItem("usersCart", JSON.stringify(this.usersCart));
      },
      deep: true,
    },
  },
  mounted() {
    this.getBooksData();
  },
};
</script>
<style scoped>
/* eslint-disable */

* {
  border-radius: 3px;
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
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: underline;
  font-weight: bold;
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
  border: 5px solid white;
  background-color: #81c6e6;
}

button {
  background-color: #81c6e6;
  color: white;
}

button:hover {
  background-color: #81c6e680;
  color: white;
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
