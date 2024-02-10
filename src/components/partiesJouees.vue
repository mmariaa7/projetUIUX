@import url ('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
<template>
  <div class="center-container">
    <router-link :to="'/statistiques/'">
      <a class="button2"  id="btnstats" style="--clr:#440099"><span>Statistiques</span><i></i></a>
    </router-link>
    <h2 class="groupe" style="text-align: center">Précédentes parties</h2>
    <a class="button" onclick="history.back()" style="--clr:#440099"><span>Back</span><i></i></a>
    <div class="scrollable-container">
    <div v-if="gameHistory.length === 0">Aucune partie jouée.</div>
      <table class="table" v-else>
        <thead>
        <tr>
          <th scope="col">Partie</th>
          <th scope="col">Mot à deviner </th>
          <th scope="col">Résultat</th>
          <th scope="col">Nombre de tentatives</th>
          <th scope="col">Temps</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(game, index) in gameHistory" :key="index">
          <td> {{ index + 1 }}</td>
          <td> {{ game.mot }} </td>
          <td>{{ game.guessedCorrectly ? 'Victoire' : 'Défaite' }}</td>
          <td>{{ game.attempts }}</td>
          <td>{{ game.temps}} sec</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const gameHistory = ref([]);

onMounted(() => {
  gameHistory.value = store.getters.getAll;
});
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaY5vZQK7qnBcoCrf8sriXkQ9amJGW1mMBlw&usqp=CAU');
  background-size: cover;
  background-position: center center;
}
.table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid rgb(45, 6, 45);

  thead,
  tfoot {
    color: white;
    text-shadow: 1px 1px 1px black;
  }
  thead th,
  tfoot th,
  tfoot td {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.5)
    );
    border: 3px solid purple;
  }

  tbody tr:nth-child(odd) {
    background-color: #baaee4;
  }

  tbody tr:nth-child(even) {
    background-color: #83a4ff;
  }


  table {
    background-color: #ff33cc;
  }

}
.groupe {
  margin-bottom: 50px;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #937ce5 0%, #ad38ca 29%, #ffffff 67%, #de2828 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 50px;
}

.button{
  position:absolute;
  top:40px;
  left:60px;
  background: #D5F3FE;
  color:#D5F3FE;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  font-weight:400;
  padding: 6px 80px;
  transition: 0.5s;
}
.button:hover{
  background: var(--clr);
  color:var(--clr);
  letter-spacing: 0.25em ;
  box-shadow: 0 0 35px var(--clr);
}

.button:before{
  content:'';
  position:absolute;
  inset:2px;
  background: #ffffcc;
}
.button span{
  position: relative;
  z-index: 1;

}
.button i{
  position:absolute;
  inset:0;
  display:block;

}
.button i::before{
  content: '';
  position: absolute;
  top:0;
  left:80%;
  width:13px;
  height: 4px;
  background: #27282c;
  transform: translateX(-50%) skewX(325deg);
  transition: 0.5s;
}
a:hover i::before{
  width:20px;
  left:20%;
}
.button2{
  position:absolute;
  bottom:40px;
  right:60px;
  background: #D5F3FE;
  color:#D5F3FE;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  font-weight:400;
  padding: 6px 80px;
  transition: 0.5s;
}
.button2:hover{
  background: var(--clr);
  color:var(--clr);
  letter-spacing: 0.25em ;
  box-shadow: 0 0 35px var(--clr);
}

.button2:before{
  content:'';
  position:absolute;
  inset:2px;
  background: #ffffcc;
}
.button2 span{
  position: relative;
  z-index: 1;

}
.button2 i{
  position:absolute;
  inset:0;
  display:block;

}
.button2 i::before{
  content: '';
  position: absolute;
  top:0;
  left:80%;
  width:13px;
  height: 4px;
  background: #7F00FF;
  transform: translateX(-50%) skewX(325deg);
  transition: 0.5s;
}
a:hover i::before{
  width:20px;
  left:20%;
}

.button-56 {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-56:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

.scrollable-container {
  max-height: 400px; /* Set the maximum height as per your requirement */
  overflow-y: auto;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}

@keyframes textclip {
  to {
    background-position: 100% center;
  }
}
.stats{
  position: absolute;
  bottom: 70px;
  right: 70px;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
}
</style>
