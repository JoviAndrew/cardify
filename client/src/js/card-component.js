Vue.component('business-card', {
  name: 'business-card',
  template: `
  <div class="border p-3">
    <h1 class="text-center">Preview</h1>
    <!-- Cards Preview -->
    <!-- Front -->
    <div>
      <p>Front</p>
      <img src="src/img/template-A-1.png" style="width: 100%;" alt="">
      <div v-if="cardData.image">
        <img :src="cardData.image" class="cardCompanyLogo1" style="height:100px;"/>              
      </div>
    </div>
    <!-- Back -->
    <div class="backCard  ">
      <p>Back</p>
      <img src="src/img/Template-A-2.png" style="width: 100%;" alt="">
      <div v-if="cardData.image">
        <div class="cardData text-right">
          <h5 class="cardCompanyName" v-if="cardData.companyName">{{ cardData.companyName }}</h5>
          <h5 v-if="cardData.name">{{ cardData.name }}</h5>
          <h5 v-if="cardData.email">{{ cardData.email }}</h5>
          <h5 v-if="cardData.phone">{{ cardData.phone }}</h5>
          <h5 v-if="cardData.companyAddress">{{ cardData.companyAddress }}</h5>
        </div>
        <img :src="cardData.image" class="cardCompanyLogo2" style="height: 75px;"/>
      </div>
    </div>
  </div>
  `,
  props: ['card-data']
})