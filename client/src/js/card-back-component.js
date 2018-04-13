Vue.component('card-back', {
  name: 'card-front',
  template: `
  <div>
    <p>Back</p>
    <img src="src/img/template-A-2.png" style="width: 100%;" alt="">
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
  `,
  props: ['card-data']
})