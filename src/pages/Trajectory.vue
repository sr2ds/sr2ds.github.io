<template>
  <div class="Trajectory">
    <h1>Tragetória</h1>
    <p>Sempre tive vontade de expor minha tragetória de uma forma amigável, talvez ainda não seja o ideal mas aqui está uma linha do tempo com alguns detalhes do que vivi profissionalmente em cada época.</p>

  <!-- Latest update -->
  <vue-timeline-update
    :date="new Date('2017-02-26')"
    title="v2.2.0 - Initial D"
    description="Today I am thrilled to announce the release of Vue.js 2.2.0."
    thumbnail="/images/vuetimeline/initial_d.jpg"
    category="announcement"
    icon="code"
    color="red"
  />

  <!-- Another update -->
  <vue-timeline-update
    :date="new Date('2016-11-22')"
    title="v2.1.0 - Hunter X Hunter"
    description="Today I am thrilled to announce the release of Vue.js 2.1.0."
    thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
    category="announcement"
    icon="code"
    color="turquoise"
  />

  <!-- Yet another update -->
  <vue-timeline-update
    :date="new Date('2016-09-30')"
    title="v2.0.0 - Ghost in the Shell"
    description="Today I am thrilled to announce the release of Vue.js 2.0.0"
    thumbnail="/images/vuetimeline/ghost_in_the_shell.jpg"
    category="announcement"
    icon="code"
    color="white"
    is-last
  />

    <div>
      <ul>
        <li :key="index" v-for="(year, index) in years" @click="activeYear = year">{{ year }}</li>
      </ul>
      <div>{{ contents[activeYear].text }}</div>
      <div>{{ contents[activeYear].images }}</div>
    </div>
    
  </div>
</template>

<script>


export default {
  name: "Trajectory",
  components: {

  },
  data: () => ({
    activeYear: 2020,
    years: [2020, 2019, 2018, 2017, 2016, 2015, 2014],
    contents: {
      2020: { text: "O que estou fazendo em 2020", images: [] },
      2019: { text: "O que fiz em 2019", images: [] },
    },
  }),
};
</script>

<style>
.Trajectory {
  padding: 1.2rem;
}
</style>
