<template>
<div id="FAQs">
  <div class="container-fluid" style="background: #708090;">
    <div class="row">
      <h2><span style="color:white;"><br>FAQs</span></h2>
        <div class="alert alert-light" role="alert">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Was für Möglichkeiten habe ich Kleider zu spenden?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Im Umkreis der Geschäftsstelle (PLZ: 12...) holen wir Ihre Kleiderspende gerne mit unserem Sammelfahrzeug ab.
                  Ansonsten haben Sie die Möglichkeit Ihre Kleiderspende persönlich in der Geschäftsstelle abzugeben.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Wo befindet sich die Geschäftsstelle?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Unsere Geschäftsstelle finden Sie hier: <br>
                  Kleider mit Herz e.V. <br>
                  Musterstraße 1 <br>
                  12345 Musterstadt
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Wie lauten die Öffnungszeiten der Geschäftsstelle?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
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
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                An welche Krisengebiete kann man aktuell spenden?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Wir passen die Liste der Kriesengebiete regelmäßig an den aktuellen Bedarf an.
                  Damit stellen wir sicher, dass die Kleiderspende Menschen erreicht, die gerade Hilfe brauchen.
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FAQs',
}
</script>

<style scoped>
  .row {
  margin-left:10px;
  margin-right:10px;
  }
</style>
