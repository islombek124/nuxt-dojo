<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore
      labore earum dolorem consequatur repellat? Aliquid mollitia assumenda quo
      numquam ullam, repellendus voluptatibus totam nesciunt earum commodi
      deserunt maiores voluptatum?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/server?name=Azamatjoon");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>