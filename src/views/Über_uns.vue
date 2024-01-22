<template>
<div id="Über_uns">
  <div class="container-fluid" style="background: #708090;">
    <div class="row">
      <h2><span style="color:white;"><br>Über uns</span></h2>
        <div class="alert alert-light" role="alert">
        <h4>„Hilfsbereitschaft kann nicht durch Erlässe hergestellt werden. Sie muss in den Herzen der Menschen entstehen.“ (Sigmund Widmer)</h4>
        <div class="col_picture">
          <img src="../assets/Über_uns.jpg" class="img" alt="über_uns_picture"><br>
            <span>Bild von <a href="https://de.freepik.com/fotos-kostenlos/gruppe-von-menschen-die-sich-bei-einer-tafel-ehrenamtlich-engagieren_15574021.htm#query=donate&position=10&from_view=search&track=sph&uuid=5bea6e01-3a70-4466-82b6-d599041333ed#position=10&query=donate" target="_blank">Freepik</a> </span>
        </div>
        <div class="col">
        <br>
        Wir sind ein gemeinnütziger Verein aus Musterstadt, der Klamotten für Krisengebiete sammelt. Denn gemeinsam können wir mehr erreichen und denen helfen, die es gerade am dringensten brauchen.
        <br> Kleiderstücke können entweder an der Geschäftsstelle des Vereins persönlich übergeben werden oder
        von einem Sammelfahrzeug abgeholt werden. Bitte beachten Sie, dass eine Abholung nur im direkten Umkreis der Geschäftsstelle möglich ist.
        </div>        
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Über_uns',
}
</script>

<style scoped>
  .row {
  margin-left:10px;
  margin-right:10px;
  }

/*Default Small devices*/
@media (min-width: 1px) { 
  img {
  height: 80%;
  width: 80%;
  object-fit: contain;
 }
}


/*Small devices*/
@media (min-width: 576px) { 
  img {
  height: 80%;
  width: 80%;
  object-fit: contain;
 }
}

/*Medium devices*/
@media (min-width: 992px) { 
  img {
  height: 70%;
  width: 70%;
  object-fit: contain;
 }
 }

/*Large devices*/
@media (min-width: 1200px) { 
  img {
  height: 60%;
  width: 60%;
  object-fit: contain;
 }
 }

/*X-Large devices)*/
@media (min-width: 1400px) { 
  img {
  height: 50%;
  width: 50%;
  object-fit: contain;
 }
 }

</style>
