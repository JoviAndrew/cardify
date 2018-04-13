new Vue({
  el: '#app',
  data: {
    cardData: {
      name: '',
      company: '',
      email: '',
      phone: '',
      companyName: '',
      companyAddress: '',
      image: ''
    }
  },
  methods: {
    formData(event){
      this.cardData.name = event.target.elements.name.value
      this.cardData.email = event.target.elements.email.value
      this.cardData.phone = event.target.elements.phone.value
      this.cardData.companyName = event.target.elements.companyName.value
      this.cardData.companyAddress = event.target.elements.companyAddress.value
      this.onFileChange(event)
      event.target.reset()
    },

    onFileChange(event) {
      var files = event.targest.elements.logo.files
      this.createImage(files[0])
    },

    createImage(file) {
      var image = new Image()
      var reader = new FileReader()
      reader.onload = (e) => {
        this.cardData.image = e.target.result;
      };
      reader.readAsDataURL(file)
    }
  }
})
