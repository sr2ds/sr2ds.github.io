<template>
  <div class="TimeLine">
    <vue-timeline-update
      v-for="(moment, index) in moments"
      :key="index"
      :date="new Date(moment.date)"
      :title="moment.title"
      :description="moment.description"
      :thumbnail="moment.thumbnail"
      :category="moment.category"
      :icon="moment.icon"
      :color="moment.color"
      animation
    >

      <div class="link" v-if="moment.link">
        <a :href="moment.link" target="_blank">
          Acessar conteúdo
        </a>
      </div>
      <div class="tag-wrapper">
        <span
          class="tag"
          v-for="(tag, ind) in moment.tags"
          :key="ind"
          @click="tagClicked(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </vue-timeline-update>
  </div>
</template>

<script>
export default {
  props: {
    moments: {
      type: Array,
      default: () => [],
    },
  },
  name: "TimeLine",
  methods: {
    tagClicked(tagClicked) {
      let counter = 0;
      this.moments.map((moment) => {
        moment.tags.map((tag) => {
          if (tag === tagClicked) {
            counter++;
          }
        });
      });
      alert(`${tagClicked} aparece em ${counter} três momentos`);
    },
  },
};
</script>

<style>

@media screen and (min-width: 768px) {
  .TimeLine {
    max-width: 70%;
  }
}
.TimeLine .tag-wrapper {
  text-align: right;
}

.TimeLine .tag {
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  border-radius: 5px;
  padding: 2px 5px;
  box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.2);
  position: relative;
  margin: 5px 10px 5px 0px;
}

.TimeLine a {
  color: white;
}
</style>