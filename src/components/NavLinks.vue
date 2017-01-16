<template>
    <ul class="nav navbar-nav">
      <li v-for="(link, index) in links">
        <router-link v-bind:to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'NavLinks',
  data () {
    return {
      links: [
        { name: 'Home', path: '/' },
        { name: 'Outline', path: '/outline' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

