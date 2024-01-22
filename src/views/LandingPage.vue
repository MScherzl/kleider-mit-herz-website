<template>
<div class="container-fluid" id="LandingPage">
      <h3><span style="color:white; background: #dc143c;">
         Du möchtest Kleider in Krisengebiete spenden? <br>
         Bei uns kannst du kostenlos deine Kleiderstücke abgeben und damit Gutes tun!  
      </span></h3>  
    </div>
    <span>Bild von <a href="https://de.freepik.com/fotos-kostenlos/zufriedene-freiwillige-die-kleidungsstuecke-fuer-die-spende-auswaehlen_22427042.htm#query=donate&position=26&from_view=search&track=sph&uuid=5bea6e01-3a70-4466-82b6-d599041333ed" target="_blank">zinkevych</a> auf Freepik </span>

  <div id="cards">
   <div class="container-fluid" style="background: #708090;">
      <div class="row">
      <h2><span style="color: white;"><br> So einfach geht's</span></h2><br>
        <div class="col-md-4">
          <div class="card text-black mb-3">
            <img src="../assets/shirt.png" class="mx-auto" alt="..." width=60px>
            <div class="card-body">
              <h5 class="card-title">Kleiderstücke auswählen</h5>
              <p class="card-text">Kleiderstücke auswählen, die gespendet werden sollen. Bitte beachten: diese sollten sich in einem guten Zustand befinden.</p>
            </div>
          </div> 
        </div>
        <div class="col-md-4">
          <div class="card text-black mb-3">
            <img src="../assets/herz.png" class="mx-auto" alt="...">
            <div class="card-body">
              <h5 class="card-title">Kleiderspende anmelden</h5>
              <p class="card-text">Kleiderspende online für die Abholung oder zum vorbeibringen registrieren.</p>
            </div>
          </div> 
        </div>
        <div class="col-md-4">
          <div class="card text-black mb-3">
            <img src="../assets/welt.png" class="mx-auto" alt="...">
            <div class="card-body">
              <h5 class="card-title">Gutes tun</h5>
              <p class="card-text">Gutes tun und Kleiderstücke in Krisengebiete spenden an Menschen, die unsere Hilfe brauchen.</p>
            </div>
          </div> 
        </div><br>
        <div class="container-fluid">
          <router-link to="/Kleiderspende_registrieren" class="btn btn-danger btn-lg active" role="button" aria-pressed="true">Hier gehts zur Kleiderspenden Registrierung.</router-link>
        </div>
      </div><br>
  </div>
</div>



</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style scoped>
#LandingPage {
  margin: 0;
  padding: 0;
  background: url('../assets/landingpage.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: auto;
  text-align: left;
  display: flex;
  align-items: center;
}

@media (min-width: 400px) {
  #LandingPage{   
    min-height: 400px;
  }
}

@media (min-width: 600px) {
  #LandingPage {   
    min-height: 500px;
  }
}

@media (min-width: 1000px) {
  #LandingPage {   
    min-height: 600px;
  }
}

@media (min-width: 2000px) {
  #LandingPage {   
    min-height: 700px;
  }
}

#cards{
  margin:10px;
}

img {
 height: 20%;
 width: 20%;
 object-fit: contain;
}

</style>
