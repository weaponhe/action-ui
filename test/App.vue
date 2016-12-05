<template>
    <div id="app">
        <app-bar></app-bar>
        <vertical-menu :data="navTree"></vertical-menu>
        <tooltip content="left tooltip" direction="bottom">
            <ac-button type="success" @click="open=!open">点击</ac-button>
            <ac-button type="success" disabled @click="open=!open">点击</ac-button>
        </tooltip>
        <message :open="open">
            <icon name="email"></icon>
        </message>

        <div class="main">
            <ac-button @click="alertShow=true">Alert</ac-button>
            <ac-button @click="confirmShow=true">Confirm</ac-button>
            <ac-button @click="promptShow=true">Promot</ac-button>
        </div>

        <ac-input size="mini"/>
        <ac-input size="small"/>
        <ac-input/>
        <ac-input size="large"/>
    
        <ac-input placeholder="请输入" v-model="message"/>
        <div>message : {{message}}</div>

        <!--Message-box-->
        <alert
                :show="alertShow"
                @ok="alertOK"
                @close="alertClose">
            警告
        </alert>
        <confirm
                :show="confirmShow"
                @ok="confirmOK"
                @close="confirmClose">
            请输入
        </confirm>
        <prompt
                :show="promptShow"
                @ok="promptOK"
                @close="promptClose">
            请输入
        </prompt>

    </div>
</template>

<script>
    let navTree = [
        {
            title: "item1",
            icon: "smile",
            children: [
                {
                    title: "item1-1"
                }, {
                    title: "item1-2",
                    children: [
                        {
                            title: "item1-2-1",
                            active: true
                        },
                        {
                            title: "item1-2-2",
                            active: true
                        }
                    ]
                }
            ]
        },
        {
            title: "item2",
            icon: "smile",
            children: [
                {
                    title: "item2-1"
                }, {
                    title: "item2-2",
                    icon: "smile"
                }
            ]
        }, {
            title: "item3",
            icon: "smile",
            children: [
                {
                    title: "item3-1"
                }, {
                    title: "item3-2"
                }
            ]
        }
    ]

    export default {
        name: 'app',
        data () {
            return {
                navTree,
                open: false,
                alertShow: false,
                confirmShow: false,
                promptShow: false,
                message: 'asdasd'
            }
        },
        methods: {
            alertOK(){
                console.log('promptOK')
            },
            alertClose(){
                this.alertShow = false
            },
            confirmOK(){
                console.log('confirmOK')
            },
            confirmClose(){
                this.confirmShow = false
            },
            promptOK(res){
                console.log('promptOK', res)
            },
            promptClose(){
                this.promptShow = false
            }
        }
    }
</script>

<style>

</style>
