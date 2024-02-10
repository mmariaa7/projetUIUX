<template>
  <div class="center-container" id="all">
    <div>
      <h2 class="groupe" style="text-align:center"> Word Guesser</h2>
      <h class="motATrouver" style="text-align:center">  {{ displayWord }}</h>
      <router-link :to="'/pageDefaite/'">
        <a class="button2"  id="abandon" style="--clr:#440099" @click="giveUp"><span>Back</span><i></i></a>
      </router-link>
      <router-link :to="'/pageDefaite/'">
        <a class="button"  id="abandon" style="--clr:#440099" @click="giveUp"><span>Abandonner la partie</span><i></i></a>
      </router-link>
      <input id="champ" type="text" v-model="mot" class="keyboardInput" placeholder="Mot"/>
      <button :disabled="attempts === 6" id="btn" button class="button3" style="margin-left: 150px; margin-top: 50px --clr:#440099" role="button" @click="validatePartie"><span>Valider</span><i></i></button>
      <div style="font-weight: bold;" class="reponse" id="reponse">{{ responseMessage }}</div>
    </div>
    <div class="affichagesjeu">
      <p style="font-weight: bold;"> Nombre de tentatives: {{ attempts }}</p>
      <p style="font-weight: bold;"> Temps : {{ temps }} s</p>


    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from 'axios';

export default {
  name: "newPartie",
  data() {
    return {
      mot: "",
      fetchedWord: "",
      responseMessage: "",
      attempts: 0,
      rienJuste: true,
      francais: false,
      displayWord: "_____",
      startTime: null,
      temps: 0,
      victoire: false,
    };
  },
  created() {
    this.fetchWord();
    this.startTime = new Date().getTime();
    this.startTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    giveUp(){
      this.incrementLosses();
      const gameData = {
          mot: this.fetchedWord,
          guessedCorrectly: this.mot.toLowerCase() === this.fetchedWord.toLowerCase(),
          attempts: this.attempts,
          temps: this.temps,
      };
      this.addNewPartie(gameData);
      this.$emit('newpartie', gameData);
      this.responseMessage = "";
      this.clearTimer();
      console.log("Partie abandonnée")
    },
    async fetchWord() {
      try {
        const response = await axios.get("https://vue-project-backend-eta.vercel.app/api/new-game");
        this.fetchedWord = response.data.word;
      } catch (err) {
        console.error(err);
      }
    },

    async verifyWord() {
      let response = await axios.post("https://vue-project-backend-eta.vercel.app/api/check-word", {
        word: this.mot,
      });
      return response.data.isWord;
    },

    async validatePartie() {
      try {
        this.rienJuste=true;
        this.francais = await this.verifyWord();
        this.responseMessage = "";
        if (this.francais && this.mot.toLowerCase().length==5) { 
          if (this.mot.toLowerCase() === this.fetchedWord.toLowerCase()) {
            this.responseMessage = "Bravo";
            this.displayWord = this.fetchedWord.toLowerCase();
            this.victoire=true;
            this.incrementWins();
          } 
          else {
            let lettresmot=new Array();  
            let lettresfetched=new Array();   
            for (let i =0; i<this.fetchedWord.length; i++) 
              lettresfetched.push(this.fetchedWord[i]);
              
            for (let i = 0; i < this.fetchedWord.length; i++) {
              if (this.mot[i] === this.fetchedWord[i]){
                this.rienJuste = false;
                this.displayWord = this.displayWord.substr(0, i) + this.mot[i] + this.displayWord.substr(i + 1);
                var index = lettresmot.indexOf(this.mot[i]);
                if (index !== -1) lettresmot.splice(index, 1);
                lettresfetched[i]='0';
              }
              else if (!lettresmot.includes(this.mot[i]) && lettresfetched.includes(this.mot[i])){
                lettresmot.push(this.mot[i])
                this.rienJuste = false;
              }
            }
            if (this.rienJuste)
              this.responseMessage = "Aucune lettre correcte, réessayez!";
            else{
              for(let i=0;i<lettresmot.length;i++)
                this.responseMessage += "La lettre "+ lettresmot[i]+ " est mal placée !\n";            
            }
          }  
        }        
        else if(this.mot.toLowerCase().length!=5)
          this.responseMessage = "Vous devez entrer un mot de 5 lettres, attention!";
        else
          this.responseMessage = "Vous devez entrer un mot en français, attention !";
        const gameData = {
          mot: this.fetchedWord,
          guessedCorrectly: this.mot.toLowerCase() === this.fetchedWord.toLowerCase(),
          attempts: this.attempts + 1,
          temps: this.temps,
        };

        this.mot = "";
        this.attempts++;

        if (this.responseMessage === "Bravo" || this.attempts === 6) {
          this.addNewPartie(gameData);
          this.$emit('newpartie', gameData);
          this.responseMessage = "";
          this.clearTimer();
        }
        if (this.victoire) 
          this.$router.push('/pageVictoire/');
      
        if(this.attempts==6 && !this.victoire){
          this.$router.push('/pageDefaite/')
          this.incrementLosses();
        }
      } catch (error) {
        console.error(error);
      }
    },
    ...mapMutations(['incrementWins','incrementLosses','incrementTotalGames','addNewPartie']),
    goBack() {
      this.$router.back();
    },
    startTimer() {
      this.timerId = setInterval(() => {
        this.temps = (new Date().getTime() - this.startTime)/1000;
      }, 1000);
    },
    clearTimer() {
      clearInterval(this.timerId);
    },
  },
  computed: {
    ...mapGetters(['getAll'])
  }
};
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
  border-radius: 90px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 45px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: absolute;
  bottom: 40px;
  right : 700px;
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

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
  .previous{
    padding: 0 40px;
  }
}

.previous{
  position: absolute;
  top: 40px;
  left: 60px;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 40px;
  box-sizing: border-box;
  color: #111;}

.groupe{
  margin-bottom: 500px;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #937ce5 0%,
    #ad38ca 29%,
    #ffffff 67%,
    #de2828 100%
  );
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
.affichagesjeu{
  position: absolute;
  top: 270px;
  right: 150px;
  
}

.motATrouver{
  letter-spacing: 15px;
  position: absolute;
  bottom: 430px;
  right : 700px;
  font-size: 40px;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #b6a5f1 0%,
    #80cbe1 29%,
    #e99bc1 67%,
    #f7cfcf 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}

.abandon{
  position: absolute;
  bottom: 70px;
  right: 70px;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
}
.keyboardInput{
  position: absolute;
  bottom: 300px;
  right : 700px;
}

.reponse{
  position: absolute;
  bottom: 470px;
  left : 100px;
}

.button{
  position:absolute;
  bottom:50px;
  right:100px;
  background: #fd2b2b;
  color:#fc5d5d;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.1em;
  font-weight:400;
  padding: 6px 30px;
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
  background: #f1dede;
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

.button2{
  position:absolute;
  top: 40px;
  left: 60px;
  background: #fd2b2b;
  color:#fc5d5d;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.1em;
  font-weight:400;
  padding: 5px 30px;
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

.button3{
  position: absolute;
  bottom: 40px;
  right : 700px;
  background: #9effcb;
  color:#5f188e;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.1em;
  font-weight:400;
  padding: 5px 30px;
  transition: 0.5s;
}
.button3:hover{
  background: var(--clr);
  color:var(--clr);
  letter-spacing: 0.25em ;
  box-shadow: 0 0 35px var(--clr);
}

.button3:before{
  content:'';
  position:absolute;
  inset:2px;
  background: #ffffff;
}
.button3 span{
  position: relative;
  z-index: 1;

}
.button3 i{
  position:absolute;
  inset:0;
  display:block;

}
.button3 i::before{
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
@keyframes textclip {
  to {
    background-position: 100% center;
  }
}
</style>
