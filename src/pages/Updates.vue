<template>
  <div class="UpdatesPage">
    <h1>Updates</h1>
    <p>No tempo livre eu faço algumas coisas para me divertir e contribuir de alguma forma, seja através de um artigo, vídeo ou até mesmo um projeto como este que você está vendo.</p>
    <UpdatesList :limit="30" class="list" />
  </div>
</template>

<script>
import UpdatesList from "@/components/UpdatesList";

export default {
  name: "Updates",
  components: {
    UpdatesList,
  },
};
</script>

<style>
.UpdatesPage {
  padding: 1.2rem;
}
.UpdatesPage .list {
  padding-top: 2rem;
}
</style>
