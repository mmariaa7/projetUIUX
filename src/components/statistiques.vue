<template>
  <div class="center-container">
    <div>
      <h5 class="card-title">Statistics</h5>
      <a class="button" style="--clr:#440099" onclick="history.back()"><span>Back</span><i></i></a>
      <hr/>
      <table class="table">
        <thead>
        <tr>
          <th>Pourcentage de victoires</th>
          <th scope="col">Pourcentage de défaites</th>
          <th scope="col">Nombre de parties</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td> {{pourcentageVictoire}}%</td>
          <td>{{pourcentageDefaite}}%</td>
          <td>{{total}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPartie from "./newPartie.vue";
import PagePrincipale from "@/components/pagePrincipale.vue";
import {mapState} from "vuex";

export default {
  name: "statistiques",
  components: {PagePrincipale, NewPartie},
  data : function() {
    return{

    }

  },
  computed:{
    ...mapState(['totalGames','wins','losses']),
    pourcentageDefaite(){
      if (this.totalGames ===0){    return 0;   }

      else{
        return (this.losses/this.totalGames)*100;
      }

    },
    pourcentageVictoire(){
      if (this.totalGames ===0){    return 0;   }
      else{
        return (this.wins/this.totalGames)*100; }
    },
    total(){
      return this.totalGames;
    }
  }
}
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaY5vZQK7qnBcoCrf8sriXkQ9amJGW1mMBlw&usqp=CAU');
  background-size: cover;
  background-position: center center;
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
.table{
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;

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
    background-color: #baaee4;
  }


  table {
    background-color: #ff33cc;
  }

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

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
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
</style>