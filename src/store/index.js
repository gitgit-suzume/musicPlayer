import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import mutations from './mutation'
// import actions from './action'
const state = {
    showSongSheet:false,
    showFootOrder:false,
    showFootManage:false,
    showPlayList: false
};

const actions={
    showSongSheet:function ({commit}) {
        commit('showSongSheet');
    },
    hideSongSheet:function ({commit}) {
        commit('hideSongSheet');
    },
    showFootOrder:function ({commit}) {
        commit('showFootOrder');
    },
    hideFootOrder:function ({commit}) {
        commit('hideFootOrder');
    },
    showFootManage:function ({commit}) {
        commit('showFootManage');
    },
    hideFootManage:function ({commit}) {
        commit('showFootManage');
    },
    showPlayList:function ({commit}) {
        commit('showPlayList');
    },
    hidePlayList:function ({commit}) {
        commit('hidePlayList');
    }
};

const mutations = {
    showSongSheet: function(state){
        state.showSongSheet = true;
    },
    hideSongSheet: function(state){
        state.showSongSheet = false;
    },
    showFootOrder:function (state) {
        state.showFootOrder = true;
    },
    hideFootOrder:function (state) {
        state.showFootOrder = false;
    },
    showFootManage:function (state) {
        state.showFootManage = true;
    },
    hideFootManage:function (state) {
        state.showFootManage = false;
    },
    showPlayList: function (state) {
        state.showPlayList = true;
    },
    hidePlayList: function (state) {
        state.showPlayList = false;
    }
};

const getters = {
    showSongSheet: function (state) {
        return state.showSongSheet;
    },
    showFootOrder:function (state) {
        return state.showFootOrder;
    },
    showFootManage:function (state) {
        return state.showFootManage;
    },
    showPlayList: function (state) {
        return state.showPlayList;
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})