<template>
   <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <img src='../assets/neuesLogo.png' alt="Logo">
      <router-link class="navbar-brand" style="color: #dc143c;" to='/'>&nbsp; Kleider mit Herz</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to='/'>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/Über-uns'>Über uns</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Kleiderspende_registrieren">Kleiderspende registrieren</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/FAQs">FAQs</router-link>
          </li>         
          <li class="nav-item">
            <router-link class="nav-link" to="/Impressum">Impressum</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Datenschutz">Datenschutzbestimmung</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
img {
 height: 40px;
 width: 28px;
 display: flex;
 align-items: left;
 color: #8b0000;
 } 
</style>
