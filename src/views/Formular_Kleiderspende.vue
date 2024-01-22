<template>
  <div id="Formular_Kleiderspende">
    <div class="container-fluid" style="background: #708090;">
      <div class="row">
        <h2><span style="color:white;"><br>Registrieren Sie hier Ihre Kleiderspende</span></h2>
        <div class="alert alert-light" role="alert">
          <form @submit.prevent="submitForm">
            <div v-if="currentStep === 1">
              <div class="alert alert-info" role="alert">
                Bitte beachten: Eine Abholung über das Sammelfahrzeug ist nur in der Nähe der Geschäftsstelle möglich (Postleitzahlen startend mit 12).
              </div>
              <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br>
              <h2>Schritt 1: Bitte wählen Sie die Übergabe aus</h2><br>
                <div class="row justify-content-center">
                  <div class="col col-lg-2">
                    <input type="radio" id="pickup" class="form-check-input" v-model="formData.deliveryOption" value="Abholung">
                    <label for="pickup" class="form-check-label"> Abholung</label>
                  </div>
                  <div class="col-md-auto">
                    <input type="radio" id="officeDelivery" class="form-check-input" v-model="formData.deliveryOption" value="Übergabe an der Geschäftsstelle">
                    <label for="officeDelivery" class="form-check-label"> Übergabe an der Geschäftsstelle</label>
                  </div> 
                </div><br>
              <button @click="nextStep" class="btn btn-primary">Weiter</button>
            </div>
            <div v-if="currentStep === 2">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br>
                <h2>Schritt 2: Bitte geben Sie Ihre Daten ein ({{formData.deliveryOption}})</h2><br>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="firstname" class="form-label">Vorname:</label>
                      <input type="text" class="form-control" id="firstname" v-model="formData.firstname" minlength="2" maxlength="30" pattern="[a-zA-ZäöüßÄÖÜ]+" required>
                    </div>
                    <div class="col-md-6">
                      <label for="lastname" class="form-label">Nachname:</label>
                      <input type="text" class="form-control" id="lastname" v-model="formData.lastname" minlength="2" maxlength="30" pattern="[a-zA-ZäöüßÄÖÜ]+" required>
                    <br></div>
                  </div>
                  <div class="row g-3" v-if="formData.deliveryOption === 'Abholung'">
                  <label>Wo können wir Ihre Klamottenspende abholen?</label>
                    <div class="col-md-6">
                      <label for="street" class="form-label">Straße:</label>
                      <input type="text" class="form-control" id="street" v-model="formData.street" minlength="2" maxlength="40" pattern="[a-zA-ZäöüßÄÖÜ]+" required>
                    </div>
                    <div class="col-md-6">
                      <label for="housenumber" class="form-label">Hausnummer:</label>
                      <input type="text" class="form-control" id="housenumber" v-model="formData.housenumber" minlength="1" maxlength="10" pattern="[a-zA-Z1-9]+" required>
                    </div>
                    <div class="col-md-6">
                      <label for="place" class="form-label">Ort:</label>
                      <input type="text" class="form-control" id="place" v-model="formData.place" minlength="2" maxlength="30" pattern="[a-zA-ZäöüßÄÖÜ]+" required>
                    </div>
                    <div class="col-md-6">
                      <label for="zipcode" class="form-label">Postleitzahl:</label>
                      <input type="text" class="form-control" id="zipcode" v-model="formData.zipcode" required pattern="\d{5}">
                      <p v-if="formData.zipcode.substring(0,2)!=='12'" class="text-danger">Keine Abholung in diesem Gebiet (nur PLZ startend mit 12)</p>
                    </div><br>
                  </div><br>
                    <!--checkboxen-->
                    <label>Welche Art von Kleidung möchten Sie spenden? (Mehrfachauswahl möglich)</label>
                    <div class="row justify-content-center">
                      <div class="col col-lg-2">
                        <input class="form-check-input" type="checkbox" value="T-Shirt" name="clothingType[]" v-model="formData.clothingType">
                          <label class="form-check-label" for="clothingType[]">
                          T-Shirt
                          </label>
                        </div>
                        <div class="col col-lg-2">
                          <input class="form-check-input" type="checkbox" value=Kleid name="clothingType[]" v-model="formData.clothingType">
                          <label class="form-check-label" for="clothingType[]">
                          Kleid
                          </label>
                        </div>
                        <div class="col col-lg-2">
                          <input class="form-check-input" type="checkbox" value=Hose name="clothingType[]" v-model="formData.clothingType">
                          <label class="form-check-label" for="clothingType[]">
                          Hose
                          </label>
                        </div>
                        <div class="col col-lg-2">
                          <input class="form-check-input" type="checkbox" value=Jacke name="clothingType[]" v-model="formData.clothingType">
                          <label class="form-check-label" for="clothingType[]">
                          Jacke
                          </label>
                        </div>  
                        <div class="col col-lg-2">
                          <input class="form-check-input" type="checkbox" value=Sonstiges name="clothingType[]" v-model="formData.clothingType">
                          <label class="form-check-label" for="clothingType[]">
                          Sonstiges
                          </label>
                        </div><br>
                        <p v-if="formData.clothingType.length===0" class="text-danger">Bitte wählen Sie die Art der Kleider aus, die Sie spenden möchten</p>
                        <br>
                        </div>
                    <label for="donationArea" class="form-label">Bitte wählen Sie ein Krisengebiet aus:</label>
                    <select id="donationArea" class="form-select" v-model="formData.donationArea" required>
                      <option value="">Btte wählen Sie...</option>
                      <option value="Syrien">Syrien</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="Afghanistan">Afghanistan</option>
                    </select>
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check" v-model="formData.check" required>
                        <label class="form-check-label" for="check"> Ich akzeptiere die 
                        <router-link to="/Datenschutz" target="_blank">Datenschutzbestimmungen</router-link>
                        </label>
                      </div><br>
                    </div>  
                <button @click="prevStep" class="btn btn-secondary">Zurück</button>
                <button @click="nextStep" class="btn btn-primary">Weiter</button>
            </div>

             <div v-if="currentStep === 3">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div><br>
              <h2>Schritt 3: Bitte überprüfen Sie Ihre Daten</h2>
                <ul>
                  <li><strong>Übergabe:</strong> {{ formData.deliveryOption }}</li>
                  <li v-if="formData.deliveryOption === 'Abholung'">
                    <strong>Vorname:</strong> {{ formData.firstname }}<br>
                    <strong>Nachname:</strong> {{ formData.lastname }}<br>
                    <strong>Abgabeort:</strong> {{ formData.street }} {{ formData.housenumber}}, {{ formData.zipcode }} {{ formData.place }}<br>
                    <strong>Angebene Kleidungsart(-en):</strong> {{ formData.clothingType.toString() }}<br>
                    <strong>Krisengebiet:</strong> {{ formData.donationArea }}<br>                    
                  </li>
                  <li v-else>
                    <strong>Vorname:</strong> {{ formData.firstname }}<br>
                    <strong>Nachname:</strong> {{ formData.lastname }}<br>
                    <strong>Abgabeort:</strong> Musterstraße 1, 12345 Musterstadt<br>
                    <strong>Angebene Kleidungsart(-en):</strong> {{ formData.clothingType.toString() }}<br>
                    <strong>Krisengebiet:</strong> {{ formData.donationArea }}<br>
                  </li>
                </ul>
              <button @click="prevStep" class="btn btn-secondary">Zurück</button>
              <button @click="submitForm" type="submit" class="btn btn-success">Abschicken</button>
            </div>
            <div v-if="currentStep === 4">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div><br>
              <h2> Liebe(r) {{formData.firstname}} {{formData.lastname}}, Ihre Kleiderspende wurde registriert, vielen Dank! </h2><br>
                <ul>
                  <strong>Übergabe:</strong> {{ formData.deliveryOption }}<br>
                  <ul v-if="formData.deliveryOption === 'Abholung'">
                    <strong>Abgabeort:</strong> {{ formData.street }} {{ formData.housenumber}}, {{ formData.zipcode }} {{ formData.place }}<br>
                    <strong>Angebene Kleidungsart(-en):</strong> {{ formData.clothingType.toString() }}<br>
                    <strong>Krisengebiet:</strong> {{ formData.donationArea }}<br>                                       
                    <strong>Zeitpunkt der Registrierung:</strong> {{formData.registrationDate.toLocaleString()}}<br>
                  </ul>
                  <ul v-else>
                    <strong>Abgabeort:</strong> Musterstraße 1, 12345 Musterstadt<br>
                    <strong>Angebene Kleidungsart(-en):</strong> {{ formData.clothingType.toString() }}<br>
                    <strong>Krisengebiet:</strong> {{ formData.donationArea }}<br>
                    <strong>Zeitpunkt der Registrierung:</strong> {{formData.registrationDate.toLocaleString()}}<br>
                  </ul>
                </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        currentStep: 1,
          formData: {
            deliveryOption: '',          
            firstname: '',
            lastname: '',
            street:'',
            housenumber: '',
            zipcode: '',
            donationArea: '',
            clothingType: [],
            check:'',
            registrationDate: new Date(),
            },
        };
    },
   methods: {
    nextStep() {
      if (this.validateForm()) {
        this.currentStep++;
      }        
    },
    prevStep() {
      this.currentStep--;
    },

    validateForm() {
      if (this.currentStep === 1) {
        // Basic validation
        return !!this.formData.deliveryOption;
      } else if (this.currentStep === 2 && this.formData.deliveryOption=== "Abholung") {
        // Additional validation for the delivery option based on zipcode
          if (this.formData.zipcode.substring(0,2)==='12' && this.formData.zipcode.length===5 && this.formData.clothingType.length !== 0) {
            return this.formData.firstname && this.formData.lastname && this.formData.street && this.formData.housenumber && this.formData.place && this.formData.clothingType && this.formData.donationArea && this.formData.check;
            }
            else  {
                  return false;
                }
        } else if (this.currentStep === 2 && this.formData.deliveryOption=== "Übergabe an der Geschäftsstelle"){
                 if (this.formData.clothingType.length === 0){ 
                    return false;} 
                 else { 
                  return this.formData.firstname && this.formData.lastname &&this.formData.donationArea && this.formData.check;
                  }
              }
          else if (this.currentStep === 3){
            return true;
          }
        },

    submitForm() {
      if (this.validateForm()) {
        this.currentStep++;
        // Handle form submission logic, e.g., send data to server
        console.log('Form submitted:', this.formData);
      }
    },
  },
};
</script>

<style scoped>


  input:invalid {
    border: red solid 3px;
  }

  .row {
  margin-left:10px;
  margin-right:10px;
  }

</style>
