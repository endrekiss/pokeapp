import { mount } from '@vue/test-utils'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PokeDatas from '../../src/components/PokeDatas.vue'
import Vue from "vue";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const pokemonData = {
    name: "Test Pokémon",
    order: 444,
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

describe('Test Pokémon data', () => {
    it('test a pokemon', () => {
        const wrapper = mount(PokeDatas, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.props().pokemon.name).toBe('Test Pokémon')
    })
})

describe('Test real Pokémon evolution', () => {
    it('pokémon order is OK', () => {
        const wrapper = mount(PokeDatas, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.props().pokemon.order).toBe(444)
    })
})
