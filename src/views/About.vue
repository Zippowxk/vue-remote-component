<template>
  <div class="about">
    <button @click="loadHome">load hello world</button>
    <button @click="loadFoo">load Foo</button>
    <div v-for="(item, index) in stuff" :key="index">  
      <component :is='item.Ctor' :payload='item.payload'></component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'about',
  components: {
  },
  data(){
    return {
      comp: undefined,
      urls: {},
      msg: undefined,
      stuff: [],
    }
  },
  mounted() {
    axios.get('http://localhost:3000/simulate').then(res=>{
      const stuff = res.data.data

      const arr = []
      for (let index = 0; index < stuff.length; index++) {
        const element = stuff[index];
        const _promise = import(/* webpackIgnore: true*/`${element.url}`).then(res=>{
          debugger
          element.Ctor = res.default
        })
        arr.push(_promise)
      }
      Promise.all(arr).then(()=>{
        this.stuff = stuff
      })
    })
  },
  methods: {
    async loadHome() {
      const hello = await import(/* webpackIgnore: true*/`${this.urls.HelloWorld.url}`)
      console.log(hello)
      this.comp = hello.default
      this.msg = this.urls.HelloWorld.payload
    },
    async loadFoo() {
      const foo = await import(/* webpackIgnore: true*/`${this.urls.Foo.url}`)
      console.log(foo)
      this.comp = foo.default
      this.msg = this.urls.Foo.payload
    }
  }
}
</script>
