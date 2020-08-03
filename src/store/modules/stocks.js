
import stocks from "../../data/stocks"


const state = {
    stocks: []
}


const mutations = {
    'SET_STOCKS' (state, payload) {
        console.log("payload", payload);
        
        state.stocks = payload
    },
    // 'RND_STOCKS' (state) {

    // }
}

const actions = {
    buyStock: ({commit}, payload) => {
        console.log("payload in MODULES/STOCKS.JS", payload);
        commit('BUY_STOCK', payload)
    },
    initStocks: ({commit}) => {  
        commit("SET_STOCKS", stocks)
    },
    // randomizeStocks: ({commit}) => {
    //     commit('RND_STOCKS')
    // }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}