<template>
  <div class="Header">
    <router-link class="backIcon" v-if="$route.name !== 'home'" to="/">Voltar</router-link>
    <h1 :class="$route.name !== 'home' ? '': 'home-spacing'">David Silva</h1>
    <a class="linkedinIcon" href="https://www.linkedin.com/in/srdavidsilva/" target="_blank">
      <img src="@/assets/linkedin.png" alt="logo linkedin" title="Perfil LinkedIn" />
    </a>
    
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>

.Header {
  width: 98vw;
  display: flex;
  justify-content: space-between;
}

.home-spacing {
  margin-left: 1rem;
}

.Header .linkedinIcon,
.Header .backIcon {
  margin: 1.2rem;
}
.Header .linkedinIcon img {
  width: 35px;
  height: 35px;
  fill: white;
  background-color: white;
  border-radius: 5px;
}
</style>