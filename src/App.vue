<template>
  <header>
    <NavBar msg="Navbar"/>
  </header>
  <body style="margin-top: 60px">
    <router-view/>
  </body>
  <footer>
    <Footer msg="Footer"/>
  </footer>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/FooterHomepage.vue'


  export default {
    components: { NavBar,Footer}, 
  }

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
