import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    uid: 0,
    createList: [],
    collectList: [],
    listId: 0,
    songId: undefined,
    songAudio: null,
    playingIndex:undefined,
    playingList:[],

    info: [],
    songSheet:[],
    songSheetFoot:{},
    // user:{},
    playingTag:false,
    collect:[],
    manageSheet:{
      name:'',
      from:'',
      editable:false,
      deleteable:false
    },
    showSongSheet:false,
    showFootOrder:false,
    showFootManage:false,
    showPlayList: false,
    showUserList: false
};

const actions={
    setUid: ({commit}) => {
        commit('setUid');
    },
    setCreateList: ({commit}) => {
        commit('setCreateList')
    },
    setCollectList: ({commit}) => {
        commit('setCollectList')
    },
    setListId: ({commit}) => {
        commit('setListId')
    },
    setPlayingList:function ({commit}) {
        commit('setPlayingList');
    },
    setSongAudio: ({commit}) => {
        commit('setSongAudio')
    },
    setSongId: ({commit}) => {
        commit('setSongId')
    },
    changeCurSong: function ({commit}) {
        commit('changeCurSong');
    },

    showUserList: ({commit}) => {
        commit('showUserList');
    },
    initInfo:function ({commit}) {
      commit('initInfo');
    },

    removePlayingListSongs:function ({commit}) {
        commit('removePlayingListSongs');
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
    setUid: (state, data) => {
        state.uid = data
    },
    setCreateList: (state, arr) => {
        state.createList = Array.of(...arr)
    },
    setCollectList: (state, arr) => {
        state.collectList = Array.of(...arr)
    },
    setListId: (state, id) => {
        state.listId = id
    },
    setPlayingList: (state, {data, index}) => {
        state.playingList = data;
        state.playingIndex = index;
        state.playingTag = true;
    },
    setSongAudio: (state, val) => {
        state.songAudio = val
    },
    setSongId:(state, id) => {
        state.songId = id
    },
    changeCurSong: (state, index) => {
        console.log(arguments)
        let len = state.playingList.length
        if(index >= len){
            return ;
        }
        if(len === 1 && index === undefined){
            state.songId = undefined
            state.playingList = []
            state.playingIndex = undefined
        } else {
            state.playingIndex = index;
            state.playingTag = true;
        }
    },
    removePlayingListSongs: (state, index) => {
        state.playingList.splice(index, 1);
        if(index < state.playingIndex){
            state.playingIndex --
        }
    },

    showUserList: (state) => {
        state.showUserList = !state.showUserList
    },
    initInfo:function (state, info) {
        state.info = info;
    },

    stopPlaying:function (state) {
        state.playingTag = !state.playingTag;
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
    showUserList: function(state){
        return state.showUserList
    },
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
