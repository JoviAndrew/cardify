module.exports = {
    uploadImage: function(req, res){
        // console.log('req ',req.file);
        console.log(req.file)
        res.json({
            message: 'Successfully upload',
            link: req.file.cloudStoragePublicUrl
        })
        
    }
}