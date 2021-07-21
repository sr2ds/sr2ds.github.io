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

    <div class="tabs">
      <div class="tab-header">
        <button
          class="btn"
          v-for="(tab, index) in tabs"
          :class="activeTab == index ? 'checked' : ''"
          :key="index"
          @click="activeTab = index"
        >
          {{ tab.title }}
        </button>
      </div>
      <div class="tab-body">
        <div class="tab" v-if="activeTab == 0">
          <TimeLine :moments="moments" />
        </div>
        <div class="tab" v-if="activeTab == 1">
          <TimeLine :moments="notes" />
        </div>
      </div>
    </div>
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
    const gistPath = "https://gist.githubusercontent.com/sr2ds";

    const response = await fetch(
      `${gistPath}/38a37d62dc162829438a8c6fb803ebd8/raw/life.json`
    );
    this.moments = await response.json();
  },

  data() {
    return {
      tabs: [{ title: "Timeline Profissional" }, { title: "Notas e Artigos" }],
      activeTab: 0,
      moments: [],
      notes: [
        {
          icon: "link",
          category: "Blog",
          color: "white",
          title: "Bloquear Tráfego Por IP - X-Forwarded-For Apache 2.4",
          date: "2020-05",
          link: "https://dev.to/sr2ds/bloquear-trafego-por-ip-x-forwarded-for-apache-2-4-4kc",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          title: "Opções do Comando Docker Run",
          date: "2020-05",
          link: "https://dev.to/sr2ds/opcoes-do-comando-docker-run-g87",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          title: "GrayLog parou após disco cheio?",
          date: "2020-04",
          link: "https://dev.to/sr2ds/graylog-parando-por-problema-no-elasticsearch-ofg",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          title: "Apagando o cache do Redis",
          date: "2020-04",
          link: "https://dev.to/sr2ds/apagando-o-cache-do-redis-37b7",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          title: "Instalando Docker no Oracle Linux",
          date: "2020-04",
          link: "https://dev.to/sr2ds/instalando-docker-no-oracle-linux-nd6",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          title: "Publicando Imagens no OCIR - Registry Oracle Cloud",
          date: "2020-04",
          link: "https://dev.to/sr2ds/publicando-imagens-no-ocir-registry-oracle-cloud-2od1",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          title: "Integrando Jenkins e Gitlab",
          date: "2020-04",
          link: "https://dev.to/sr2ds/integrando-jenkins-e-gitlab-48o9",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          date: "2020-05",
          title: "Docker#01 Instalação e Primeiros Passos - Parte 1",
          link: "https://dev.to/sr2ds/docker-01-instalacao-e-primeiros-passos-parte-1-262n",
        },
        {
          icon: "link",
          category: "Blog",
          color: "white",
          date: "2020-04",
          title: "Docker#00 Introdução Concentual",
          link: "https://dev.to/sr2ds/docker-00-introducao-concentual-47gf",
        },
      ],
    };
  },
};
</script>

<style>
.Home hr {
  margin-bottom: 30px;
}

.Home .tabs .tab-header {
  padding-bottom: 20px;
}

.Home .welcome {
  color: white;
  padding: 1.2rem;
  font-size: 18px;
}

.Home .btn {
  font-size: 0.7rem;
  width: 10vw;
  color: white;
  margin: 0 10px;
  background-color: #009cd6;
  border: solid 1px #006bb9;
  border-radius: 7px;
  padding: 0.5rem 0;
  justify-content: center;
  cursor: pointer;
  text-decoration: inherit;
  font-size: 18px;
  transition: opacity 0.2s;
}

.Home .btn:hover,
.Home .btn.checked {
  background-color: #006bb9;
  opacity: 0.8;
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
