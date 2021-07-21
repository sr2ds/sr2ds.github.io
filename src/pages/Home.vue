<template>
  <div class="Home">
    <div class="welcome">
      <p>Seja bem-vindo!</p>
      <p>
        Tenho estudando e trabalhando com tecnologia há pouco mais de dez anos.
      </p>
      <p>
        Sempre tive vontade de contar minha tragetória de uma forma simples,
        talvez ainda não seja o ideal mas aqui está uma linha do tempo (em
        desenvolvimento) com alguns detalhes.
      </p>
      <p>
        Espero que de alguma forma isso motivar você em sua jornada, o caminho
        não é fácil, tão pouco rápido mas certamente vale a pena!
      </p>
    </div>
    <hr />

    <TimeLine :moments="moments" />
  </div>
</template>

<script>
import TimeLine from "@/components/TimeLine";

export default {
  name: "Home",
  components: {
    TimeLine,
  },
  async mounted() {
    const response = await fetch(
      "https://gist.githubusercontent.com/sr2ds/38a37d62dc162829438a8c6fb803ebd8/raw/4c8355007f2a39c4b9cfff7dbb32892c14166ca7/life.json"
    );
    this.moments = await response.json();
  },
  data() {
    return {
      moments: [],
    };
  },
};
</script>

<style>
.Home hr {
  margin-bottom: 80px;
}

.Home .welcome {
  color: white;
  padding: 1.2rem;
  font-size: 18px;
}
.Home .updates {
  color: white;
  font-size: 18px;
  padding: 1.2rem;
}

.Home .btn > button {
  font-size: 1.2rem;
  width: 70vw;
  color: white;
  display: flex;
  margin: 0 auto;
  background-color: #009cd6;
  border: solid 1px #006bb9;
  border-radius: 7px;
  padding: 1rem 0;
  justify-content: center;
  cursor: pointer;
  text-decoration: inherit;
  font-size: 24px;
  box-shadow: 1px 1px black;
  transition: opacity 0.2s;
}

.Home .btn > button:hover {
  background-color: #006bb9;
  opacity: 0.6;
}
.Home a.btn {
  display: flex;
  text-decoration: inherit;
  text-align: center;
}

.Home .picture {
  border-radius: 50%;
  display: flex;
  border: solid 5px #006bb9;
  margin: 0 auto;
  margin-bottom: 0.8rem;
}
</style>
