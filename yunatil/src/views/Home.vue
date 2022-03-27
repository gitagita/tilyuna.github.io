<template>
    <div>
        <h1>{{title}}</h1>
        <input type="text" v-model="input"/>
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region" @change="changeRegin">
            <option :key="i" :value="d.v"  v-for="(d, i) in options">{{d.t}}</option>
        </select>
        
        <!-- v-if는 조건이 맞지 않으면 아예 랜더링 하지 않는다.
        v-show는 랜더링 하는데 단지 css display값으로 보이는지 아닌지 설정해주는 차이일 뿐이다. -->
        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d, i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title: "Today is Learned",
            input: "abc",
            options: [
                {v: "c",t:'d1'},
                {v:"s",t:"d2"},
                {v:"e", t:"d3"}
            ],
            region: "s",
            tableShow: false,
        }
    },
    watch: {
        //특정 데이터를 계속 모니터링 하다가 변경이 일어나면 작업을 진행해줌
        //변수명과 동일한 이름으로 메서드를 만들어주면 됨
        input(){
            console.log(this.input)
        }
    },
    methods: {
        getData(){
            alert(this.input)
        },
        setData(){
            this.input = "12345"
        },
        changeRegin(){
            alert(this.region)
        }
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        //db에서 가져온 데이터를 화면에 뿌려줘야하는 경우 
        console.log("created")  //미리 db에서 데이터를 가져와서 data()에 바인딩 해주면 됨
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        //mounted일 때 화면에 띄워줌
        //mounted된 이후에 데이터를 가지고 와서 데이터를 설정하면 beforeUpdate와 updated가 불필요하게 실행됨.. 
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("beforeUpdate") //데이터 변경 전
    },
    updated(){
        console.log("updated")  //데이터 변경 후
    },
    beforeDestory(){
        console.log("beforeDestory")
    },
    destroyed(){
        console.log("destroyed")
    }
};
</script>