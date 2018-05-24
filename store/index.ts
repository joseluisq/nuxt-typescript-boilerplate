export const state = () => ({
  pokemons: []
})

export const mutations = {
  setPokemon (state, pokemons) {
    state.pokemons = pokemons
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { app }) {
    const { results } = await app.$axios.$get('./pokemons.json')
    commit('setPokemon', results)
  }
}
