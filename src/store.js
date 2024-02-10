import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            parties: [],
            totalGames:0,
            wins: 0,
            losses:0,
        }
    },
    getters: {
        getPartieById: (state) => (id) => {
            return state.parties.find(partie=>partie.id==id)
        },
        getAll: (state) => state.parties
    },
    mutations: {
        addNewPartie(state,newPartie){
            newPartie.id = state.parties.length;
            state.parties.push(
                newPartie);
            console.log(state.parties)
        },
        incrementTotalGames(state){
            state.totalGames++;
        },
        incrementWins(state){
            state.wins++;
        },
        incrementLosses(state){
            state.losses++;
        }

    }
})
