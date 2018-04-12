const Storage = require('@google-cloud/storage')

module.exports = {
    newCardData: function(req, res){
        res.status(200).json({
            message: 'success upload image'
        })
    },
    getData: function(req, res){
        //Ambil data dari DB
    }
}