<template>
    <div class="center-container">
      <h2 class="groupe" style="text-align:center"> Victoire </h2>
      <div class="button-container">
        <router-link :to="'/'">
          <a class="button"  style="--clr:#440099" @click=" startGame"><span>Retour à la page principale</span><i></i></a>
        </router-link>
      </div>  
    </div>
  </template>
  
  
  <script>
  export default {
    name: "pageDefaite",
  };
  </script>
  
  <style scoped>
  
  .button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px; 
  }
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
  
  .card-title {
    margin-bottom: 250px;
  }
  
  .groupe{
    margin-bottom: 190px;
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #a4ffbb 0%,
      #2aac24 29%,
      #15743c 67%,
      #08f3c0 100%
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
        font-size: 100px;
  }
  
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  .button-container {
    display: inline;
    margin-right: 20px;
  
  }
  
  .btn {
    margin-top: 8px;
  }
  
  .button-56 {
    background-color: #fee6e3;
    border: 2px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111;
    cursor: pointer;
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

  .button{
  position:absolute;
  bottom:200px;
  right:500px;
  background: #01ff27;
  color:#90f6ca;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.1em;
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
  background: #baffe1;
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
  
  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
      
    }
  }
  
  </style>
  
  
  