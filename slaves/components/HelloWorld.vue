<template>
  <div class="hello">
    <h1>{{ $attrs.payload }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  color: red;
}
</style>