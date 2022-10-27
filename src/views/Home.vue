<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <button @click="loadHome">load Home</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <component :is='comp' msg='load from jsonp'></component>
  </div>
</template>

<script>

function cleanup(script){
  if (script.parentNode) script.parentNode.removeChild(script)
  script.onload = null
  script.onerror = null
  script = null
}

function scriptLoad(url) {
  const target = document.getElementsByTagName('script')[0] || document.head

  let script = document.createElement('script')
  script.src = url
  target.parentNode.insertBefore(script, target)

  return new Promise((resolve, reject) => {
    script.onload = function () {
      resolve()
      cleanup(script)
    }
    script.onerror = function () {
      reject(new Error('script load failed'))
      cleanup(script)
    }
  })
}


export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data(){
    return {
      comp: undefined,
    }
  },
  mounted() {
  },
  methods: {
    async loadHome() {
      await scriptLoad(/* webpackIgnore: true */'/HelloWorld.js')
      this.comp = window.MyComponent
    }
  }
}
</script>
