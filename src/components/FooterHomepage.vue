<template>
  <footer class="text-white text-center text-lg-start bg-dark">
    <div class="container text-center">
      <div class="row justify-content-center pt-4">
        <div class="col col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 pb-1">Kontakt</h5>
            <span>Kleider mit Herz e.V.</span><br>
            <span>Musterstraße 1</span><br>
            <span>12345 Musterstadt</span><br>
            <span>kleidermitherz@example.com</span><br>
            <span>+ 49 0000 0000</span><br><br>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Öffnungszeiten Geschäftsstelle</h5>

          <table class="table text-center text-white">
            <tbody class="fw-normal">
              <tr>
                <td>Montag - Donnerstag:</td>
                <td>8 - 15 Uhr</td>
              </tr>
              <tr>
                <td>Freitag - Samstag:</td>
                <td>8 - 18 Uhr</td>
              </tr>
              <tr>
                <td>Sonntag:</td>
                <td>9 - 12 Uhr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-center pt-4">
        <h5 class="text-uppercase mb-4">Impressum & Datenschutz</h5>
        <ul>
          <router-link to="/Impressum" class="fa-li">Impressum</router-link><br>
          <router-link to="/Datenschutz" class="fa-li">Datenschutzbestimmung</router-link><br>
        </ul>
      </div>
    </div><br>

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/" target="_blank">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: 'footerHompage',
}
</script>

<style scoped>
#footerHompage{
}
</style>
