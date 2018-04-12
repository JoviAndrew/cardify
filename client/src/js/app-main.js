new Vue({
  el: '#app',
  data: {
    name: '',
    company: '',
    companyName: '',
    companyAddress: '',
    image: ''
  },
  methods: {
    formData(event){
      this.name = event.target.elements.name.value
      this.email = event.target.elements.email.value
      this.companyName = event.target.elements.companyName.value
      this.companyAddress = event.target.elements.companyAddress.value
      event.target.reset()
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files)
      // if (!files.length)
      // return
      this.createImage(files[0])
    },
    
    createImage(file) {
      var image = new Image()
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file)
    }
  }
})