import { render } from '@vue/server-test-utils'
import PokeList from '../../src/components/PokeList.vue'

describe('List component render', () => {
    it('renders a div', async () => {
        const wrapper = await render(PokeList)
        expect(wrapper.text()).toContain('Pokémon (1 - 15)')
    })

})
