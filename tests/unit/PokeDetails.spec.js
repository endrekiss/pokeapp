import { mount } from '@vue/test-utils'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PokeDetails from '../../src/components/PokeDetails.vue'
import Vue from "vue"

import pokemonData from "./pokemonData.json"


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


describe('Test real Pokémon data', () => {
    it('renders a div', () => {
        const wrapper = mount(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.props().pokemon.name).toBe('wartortle')
    })
})

describe('Test real Pokémon ability', () => {
    it('renders a div', () => {
        const wrapper = mount(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('rain-dish')
    })
})

describe('Test real Pokémon move', () => {
    it('renders a div', () => {
        const wrapper = mount(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('tail-whip')
    })
})


describe('Test real Pokémon stat', () => {
    it('renders a div', () => {
        const wrapper = mount(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('special-attack 65')
    })
})

describe('Test real Pokémon type', () => {
    it('renders a div', () => {
        const wrapper = mount(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('water')
    })
})

describe('Test real Pokémon evolution', () => {
    it('renders a div', () => {
        const wrapper = mount(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('generation-viii')
    })
})

