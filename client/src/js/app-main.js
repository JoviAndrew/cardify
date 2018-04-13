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
      localStorage.setItem('name', this.cardData.name)
      localStorage.setItem('email', this.cardData.email)
      localStorage.setItem('phone', this.cardData.phone)
      localStorage.setItem('companyName', this.cardData.companyName)
      localStorage.setItem('companyAddress', this.cardData.companyAddress)
      event.target.reset()
    },

    onFileChange(event) {
      var files = event.target.elements.logo.files
      console.log(files[0])
      this.createImage(files[0])
    },

    createImage(file) {
      var image = new Image()
      var reader = new FileReader()
      reader.onload = (e) => {
        this.cardData.image = e.target.result;
        localStorage.setItem('image', this.cardData.image)
      };
      reader.readAsDataURL(file)
    },

    printcard () {
      window.location.href = 'print-card.html'
      let data = localStorage.getItem('data')
      // alert(JSON.parse(data))
      console.log(JSON.parse(data))
      this.name = data.name
    },

    clear() {
      console.log('clicked')
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('phone')
      localStorage.removeItem('companyName')
      localStorage.removeItem('companyAddress')
      localStorage.removeItem('image')
      location.reload()
    }
  }
})
