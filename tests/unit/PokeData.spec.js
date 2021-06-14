import { mount } from '@vue/test-utils'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PokeDatas from '../../src/components/PokeDatas.vue'
import Vue from "vue";

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const pokemonData = {
    name: "Test Pokémon",
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

describe('Test Pokémon data', () => {
    it('renders a div', () => {
        const wrapper = mount(PokeDatas, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.props().pokemon.name).toBe('Test Pokémon')
    })
})
