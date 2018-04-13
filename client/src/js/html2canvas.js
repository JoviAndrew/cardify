function captureCard() {
  console.log('clicked')


  // document.getElementById("download_button").onclick = function() {

  //   var link = document.createElement("a");
  //   link.download = "image.png";
  
  //   canvas.toBlob(function(blob){
  //     link.href = URL.createObjectURL(blob);
  //     console.log(blob);
  //   },'image/png');
  
  //   console.log(link.href);
  //   link.click();
  
  // }

  // canvas.toBlob(function(blob){
  //   link.href = URL.createObjectURL(blob);
  //   console.log(blob);
  //   console.log(link.href); // this line should be here
  // },'image/png');


  html2canvas(document.querySelector("#app")).then(canvas => {
    canvas.toBlob(function(blob) {
      console.log(blob);

      let formData = new FormData();

      formData.append('fieldname', blob);

      console.log('formdata', formData)

      axios.post('http://localhost:3000/home/upload', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(response => {
        console.log('success upload', response)
      })
      .catch(err => {
        console.log('failed upload', err)
      })
    }, 'image/png')
    // document.querySelector("#capture").appendChild(canvas)
    // let image = canvas.toDataURL('image/png')
    // console.log(canvas)
    // console.log(image)
  
  });
} 