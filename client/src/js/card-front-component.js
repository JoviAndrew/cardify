Vue.component('card-front', {
  name: 'card-front',
  template: `
  <div>
    <p>Front</p>
    <img src="src/img/template-A-1.png" style="width: 100%;" alt="">
    <div v-if="cardData.image">
      <img :src="cardData.image" class="cardCompanyLogo1" style="height:100px;"/>              
    </div>
  </div>
  `,
  props: ['card-data'],

  data: function () {
    this.cardData.name = localStorage.getItem('name')
    this.cardData.email = localStorage.getItem('email')
    this.cardData.phone = localStorage.getItem('phone')
    this.cardData.companyName = localStorage.getItem('companyName')
    this.cardData.companyAddress = localStorage.getItem('companyAddress')
    this.cardData.image = localStorage.getItem('image')
  }
})