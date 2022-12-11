<template>
  <div class="landingPage">
    <center>
      <img src="../../public/logo.png" alt="fatal" />
    </center>
    <router-link to="/home">
      <div class="button">
        <div class="button-layer">
          <button class="btn">
            <h1>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-book"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 
                        2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 
                        1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 
                        1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 
                        1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 
                        0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                  />
                </svg>
                Start Reading Now
              </i>
            </h1>
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>
<style scoped>
.landingPage {
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  gap: 8rem;
  background-image: url(https://i.pinimg.com/originals/f1/4d/94/f14d945690510218540674bd6a15df0a.gif);
  background-size: cover;
}

img {
  border-bottom: 3px solid rgb(0, 0, 0);
  border-right: 3px solid rgb(0, 0, 0);
  box-shadow: 0px 20px 10px 0 rgba(0, 0, 0);
  background-color: rgb(0, 0, 0);
  border-radius: 3px;
  transform: translate(150%, 50%) rotate(-30deg);
}

button {
  margin-top: 10px;
  width: 60%;
  border: 5px solid #9708cc;
  background-image: linear-gradient(135deg, #9708cc, #43cbff, #9708cc, #43cbff);
  border-radius: 50px;
}

button:hover {
  width: 60%;
  border: 5px solid white;
  color: #9708cc;
}

h1 {
  color: white;
  padding: 1rem;
}
</style>
