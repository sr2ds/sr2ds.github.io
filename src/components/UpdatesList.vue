<template>
  <div class="UpdateList">
    <ul>
      <li :key="index" v-for="(item, index) in getUpdateList.slice(-limit)">
        {{ item.date }} -
        <a
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
        >{{ item.title }}</a>
        #{{ item.type }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    limit: {
      type: Number,
      default: 5,
    },
  },
  name: "UpdatesList",
  methods: {
    ...mapActions(["loadUpdateList"]),
  },
  computed: {
    ...mapGetters(["getUpdateList"]),
  },
  mounted() {
    if (!this.getUpdateList.length) {
      this.loadUpdateList();
    }
  },
};
</script>

<style>
.UpdateList a {
  color: white;
}
</style>