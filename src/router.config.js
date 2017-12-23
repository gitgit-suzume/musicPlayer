import Home from './components/home/home.vue'
import List from './components/list/index.vue'
import ListDetail from './components/list/detail/detail.vue'
import SongSheet from './components/song-sheet/index.vue'
import Friends from './components/friends/friends.vue'

import Music from './components/home/music/music.vue'
import Video from './components/home/video/video.vue'
import Radio from './components/home/radio/radio.vue'
import Test from '../test.vue'

export default[
    {path:'/',redirect:'/list'},
    {path:'/home',redirect:'/home/music'},
    {path:'/test',component:Test},
    {
        path:'/home',
        component:Home,
        children:[
            {path:'/home/music', component:Music},
            {path:'/home/video', component:Video},
            {path:'/home/radio', component:Radio}
        ]
    },
    {
        path:'/list',
        component:List,
        children:[
            {path:'/list/detail',component:ListDetail}
        ]
    },
    {path:'/friends',component:Friends},
    {path:'/song-sheet',component:SongSheet},
    // {path:'*',redirect:'/home'}
];
