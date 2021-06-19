<template>
    <b-card no-body header="Pokémon data" v-if="pokemon.abilities.length>0">

      <b-card-body>
        <template v-if="pokemon.order>0">

          <h1>{{ pokemon.name }}</h1>

          <div class="row">
            <b-img :src="pokemon.sprites.other['official-artwork'].front_default" fluid :alt="pokemon.name"></b-img>
          </div>

          <dl class="row">
            <dt class="col-sm-9">order-number</dt>
            <dd class="col-sm-3" style="white-space: nowrap;">{{ pokemon.order }}</dd>
          </dl>

        </template>
      </b-card-body>

    </b-card>
</template>

<script>
export default {
  name: 'PokeDatas',
  props: {
    pokemon: {
      type: Object,
    },
  }
}
</script>
