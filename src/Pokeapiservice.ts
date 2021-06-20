export class Pokeapiservice {
    async getAbility(url: string) {
        const result = await fetch(url);
        const datas = await result.json();
        return datas
    }

    async loadData(currentPage: number, perPage: number) {
        const url = 'https://pokeapi.co/api/v2/pokemon/?offset=' + ((currentPage - 1) * perPage) + '&limit=' + perPage
        const result = await fetch(url);
        const datas = await result.json();
        return datas
    }
}
