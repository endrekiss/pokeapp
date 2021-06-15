<template>
    <b-card  no-body header="Choose a Pokémon">

      <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="result.count"
          :per-page="perPage"
          aria-controls="my-table"
      ></b-pagination>

      <b-list-group flush>
        <b-list-group-item v-for="pokemon in result.results" v-bind:active="isActive(pokemon.url)" :key="pokemon.name" v-on:click="pokeclick(pokemon.url)" href="#">{{ pokemon.name }}</b-list-group-item>
      </b-list-group>

      <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="result.count"
          :per-page="perPage"
          aria-controls="my-table"
      ></b-pagination>

      <b-card-body>
        <p>There are {{ result.count }} Pokémon ({{ ((currentPage-1) * perPage)+1 }} - {{ currentPage * perPage }})</p>
      </b-card-body>
    </b-card>
</template>

<script>

export default {
  name: 'PokeList',
  props: {
    msg: String
  },
  data () {
    return {
      myurl: '',
      result: {
        count: 0,
      },
      perPage: 15,
      currentPage: 1
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    isActive(url) {
      return url === this.myurl
    },
    loadData() {
      this.$axios
          .get('https://pokeapi.co/api/v2/pokemon/?offset=' + ((this.currentPage-1) * this.perPage) + '&limit=' + this.perPage)
          .then(response => (this.result = response.data))
          .catch(error => alert('Pokéapi ' + error))
    },
    pokeclick(url) {
      this.myurl = url
      this.$axios
          .get(url)
          .then(response => (this.$parent.pokemon = response.data))
          .catch(error => alert('Pokéapi ' + error))

    }
  },
  watch: {
    currentPage: function () {
      this.loadData()
    }
  }
}
</script>

