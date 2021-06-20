import { render } from '@vue/server-test-utils'
import PokeDetails from '../../src/components/PokeDetails.vue'

const pokemonData = require("./pokemonData.json");

describe('Test real Pokémon ability', () => {
    it('pokemon ability is OK', async () => {
        const wrapper = await render(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('rain-dish')
    })
})

describe('Test real Pokémon move', () => {
    it('pokémon move is OK', async () => {
        const wrapper = await render(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('wartortle has 76 moves')
    })
})

describe('Test real Pokémon stat',  () => {
    it('pokémon stat is OK', async () => {
        const wrapper = await render(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('special-attack 65')
    })
})

describe('Test real Pokémon type',  () => {
    it('pokémon type is OK', async () => {
        const wrapper = await render(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('water')
    })
})

describe('Test real Pokémon evolution',  () => {
    it('pokémon evolution is OK', async () => {
        const wrapper = await render(PokeDetails, {
            propsData: {
                pokemon: pokemonData
            }
        })
        expect(wrapper.text()).toContain('generation-viii')
    })
})
