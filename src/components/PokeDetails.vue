<template>

  <b-card no-body header="Pokémon details" v-if="pokemon.abilities.length>0">

    <b-card-body>

  <div class="accordion" role="tablist">

    <b-card no-body>
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info" style="width: 100%;">Abilities</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card no-body >
            <b-list-group flush>
              <b-list-group-item v-for="ability in pokemon.abilities" v-on:click="showAbility(ability)" :key="ability.url" href="#">{{ ability.ability.name }}</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info" style="width: 100%;">Stats</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card no-body >
            <b-list-group flush>
              <b-list-group-item v-for="stat in pokemon.stats" :key="stat.stat.name"><strong>{{ stat.stat.name }} {{ stat['base_stat'] }}</strong> (effort {{ stat['effort'] }})</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info" style="width: 100%;">Moves</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card no-body >

            <b-pagination
                v-model="currentPage"
                :total-rows="pokemon.moves.length"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>

            <b-table
                id="my-table"
                :items="items()"
                :per-page="perPage"
                :current-page="currentPage"
                small
            ></b-table>

            <b-pagination
                v-model="currentPage"
                :total-rows="pokemon.moves.length"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>

            {{ pokemon.name }} has {{ pokemon.moves.length }} moves.
          </b-card>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info" style="width: 100%;">Evolution</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>

          <b-list-group flush>
            <b-list-group-item v-for="(item, index) in pokemon.sprites.versions" v-bind:key="index">
              {{ index }}
              <span v-for="(subitem, subindex) in item" v-bind:key="subindex">
                    <b-img :src="subitem.front_default" fluid :alt="subindex" v-if="subitem.front_default" style="max-height: 50px;"></b-img>
              </span>
            </b-list-group-item>
          </b-list-group>

        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info" style="width: 100%;">Types</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card no-body >
            <b-list-group flush>
              <b-list-group-item v-for="mytype in pokemon.types" :key="mytype.slot">{{ mytype.type.name }}</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-card-body>
      </b-collapse>
    </b-card>

  </div>

      <b-modal id="ability-modal" title="Ability info" ok-only>
        <p class="my-4">{{ modalInfo }}</p>
      </b-modal>

    </b-card-body>
  </b-card>

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import axios from 'axios'

export default defineComponent({
  name: 'PokeDatas',
  props: {
    pokemon: {
      type: Object,
    },
  },
    data () {
      return {
        perPage: 10,
        currentPage: 1,
        modalInfo: '',
        rows: 0,
      }
    },
    rows() {
      return this.pokemon?.moves.length
    },
    methods: {
      items() {
        let moveitems: { move: any; }[] = [];
        this.pokemon?.moves.forEach(function callbackFn(element: { move: { name: any; }; }) {
          moveitems.push({ 'move': element.move.name })
        })
        return moveitems
      },
    showAbility(ability: { ability: { url: any; }; }) {
      this.getAbility(ability.ability.url)
      this.$bvModal.show('ability-modal')
    },
    getAbility(url: any) {
     axios
          .get(url)
          .then(response => (
              this.modalInfo = response.data.effect_entries[0].effect
          ))
          .catch(error => this.modalInfo = 'Pokéapi ' + error)
    }
  }
})
</script>
