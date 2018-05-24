<template>
  <div class="card" vertical>
    <div class="card-wrapper">
      <h2>{{ pokemon.name }}</h2>
      <p><img :src="pokemon.sprites.normal"></p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Card extends Vue {
  @Prop() pokemon
}
</script>
<style scoped>
.card {
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  width: calc(100% / 8);
  height: 10.4vw;
  padding: 0;
  margin: 0;
}
.card h2 {
  margin-top: 0;
}
.card img {
  max-width: 100%;
}
.card-wrapper {
  border: solid 1px rgba(180, 180, 180, 1);
  border-radius: 3px;
  padding: 1rem;
  margin: 0.5rem;
  height: 100%;
  background-color: white;
}
.card p {
  text-align: center;
}
</style>
