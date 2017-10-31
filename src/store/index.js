import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    info: [],
    songSheet:[],
    songSheetFoot:{},
    user:{},
    playingList:[],
    playingTag:false,
    collect:[],
    manageSheet:{
      name:'',
      from:'',
      editable:false,
      deleteable:false
    },
    playingIndex:undefined,
    showSongSheet:false,
    showFootOrder:false,
    showFootManage:false,
    showPlayList: false
};

const actions={
    initInfo:function ({commit}) {
      commit('initInfo');
    },
    setPlayingList:function ({commit}) {
        commit('setPlayingList');
    },
    removePlayingListSongs:function ({commit}) {
        commit('removePlayingListSongs');
    },
    changeCurSong: function ({commit}) {
        commit('changeCurSong');
    },
    stopPlaying:function ({commit}) {
        commit('stopPlaying');
    },
    addCollect:function ({commit}) {
        commit('addCollect');
    },
    removeCollect:function ({commit}) {
        commit('removeCollect');
    },
    setManageSheet:function ({commit}) {
        commit('setManageSheet');
    },
    getSongSheet:function ({commit}) {
        commit('getSongSheet');
    },
    songSheetFoot:function ({commit}) {
        commit('songSheetFoot');
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
    removePlayingListSongs: function (state, index) {
        state.playingList.splice(index, 1);
    },
    stopPlaying:function (state) {
        state.playingTag = !state.playingTag;
    },
    setPlayingList:function (state, {data, index}) {
        state.playingList = data;
        state.playingIndex = index;
        state.playingTag = true;
    },
    changeCurSong: function (state, index) {
        state.playingIndex = index;
        state.playingTag = true;
    },
    songSheetFoot: function (state, data) {
      state.songSheetFoot = data;
    },
    addCollect: function(state, data){
      state.collect.push(data);
    },
    removeCollect: function(state, index){
        state.collect.slice(index,1);
    },
    getSongSheet:function (state, data) {
        state.songSheet = data;
    },
    setManageSheet: function (state, {name,from,editable,deleteable}) {
        state.manageSheet.name = name;
        state.manageSheet.from = from;
        state.manageSheet.editable = editable;
        state.manageSheet.deleteable =deleteable;
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
    getCarousel:function (state) {
        return state.carousel;
    },
    setPlayingList:function (state) {
        return state.playingList;
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
    },
    getCollect: function (state) {
        return state.collect;
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})