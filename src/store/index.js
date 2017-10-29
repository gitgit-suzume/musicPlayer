import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    info: [],
    songSheet:[],
    user:{},
    showSongSheet:false,
    showFootOrder:false,
    showFootManage:false,
    showPlayList: false
};

const actions={
    initInfo:function ({commit}) {
      commit('initInfo');
    },
    getSongSheet:function ({commit}) {
        commit('getSongSheet');
    },
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
    initInfo:function (state, info) {
        state.info = info;
        state.user = info.user;
    },
    getSongSheet:function (state, data) {
        state.songSheet = data;
    },
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
    info: function (state) {
      return state.info;
    },
    getSongSheet:function (state) {
        return state.songSheet
    },
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