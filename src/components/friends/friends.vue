<template>
    <div>
        {{info}}
    </div>
</template>
<script>
    export default {
        name:'friend',
        data: function(){
            return {
                info:'friends data'
            }
        },
        created:function () {
            console.log('---------from friends----------')
        }
    }
</script>