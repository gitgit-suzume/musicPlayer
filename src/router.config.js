import Home from './components/home/home.vue'
import List from './components/list/list.vue'
import Friends from './components/friends/friends.vue'

import Music from './components/home/music/music.vue'
import Video from './components/home/video/video.vue'
import Radio from './components/home/radio/radio.vue'

export default[
    {path:'/',redirect:'/list'},
    {
        path:'/home',
        component:Home,
        children:[
            {path:'/home/music', component:Music},
            {path:'/home/video', component:Video},
            {path:'/home/radio', component:Radio}
        ]
    },
    {path:'/list',component:List},
    {path:'/friends',component:Friends},
    // {path:'*',redirect:'/home'}
];