<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-card-group style="width: 100%">
        <PokeList v-on:clockOnPokemon="pokeClick" />
        <PokeDatas :pokemon="pokemon"/>
        <PokeDetails :pokemon="pokemon"/>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import PokeList from './components/PokeList.vue'
import PokeDatas from './components/PokeDatas.vue'
import PokeDetails from './components/PokeDetails.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    PokeList, PokeDatas, PokeDetails
  },
  methods: {
    pokeClick(url) {
      axios
          .get(url)
          .then(response => (this.pokemon = response.data))
          .catch(error => alert('Pokéapi ' + error))
    },
  },
  data () {
    return {
      pokemon: {
        name: "Pokémon",
        order: 0,
        abilities: {},
        types: {},
        stats: {},
        moves: {},
        sprites: {
          versions: {},
          other: {
            "official-artwork": {
              front_default: ""
            }
          }
        }
      }
    }
  }
}
</script>

