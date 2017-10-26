import getters from './getters'

const state={
    songSheet:false
};

const mutations={
    showSongSheet:function () {
        state.songSheet = true;
    },
    hideSongSheet:function () {
        state.songSheet = false;
    }
};

export default {
    state,
    mutations,
    // getters
}