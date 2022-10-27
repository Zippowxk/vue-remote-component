<template>
  <div class="Foo">
    <h1>this is Foo from remote</h1>
  </div>
</template>

<script>
export default {
  name: 'Foo',
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