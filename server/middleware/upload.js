const Multer = require('multer');
const Storage = require('@google-cloud/storage');

const CloudBucket = process.env.GCS_BUCKET;

const storage = Storage({
    projectId: process.env.GCS_PROJECTID,
    keyFilename: 'cardify-bucket.json',
})

const bucket = storage.bucket(CloudBucket);

const getPublicUrl = function(filename) {
    return `https://storage.googleapis.com/${CloudBucket}/${filename}`
}


const sendUploadToGCS = function(req, res, next){
    console.log(req.body)
    console.log('MASUK SEND UPLOAD', req.file)
    if(!req.file){
        return next();
    }else{
        let gcsfilename = new Date().toISOString() + req.file.originalname;
        let file = bucket.file(gcsfilename);

        const stream = file.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        })

        stream.on('error', (err) => {
            console.log('MASUK DAB')
            req.file.cloudStorageError = err
            next(err)
        })
        
        stream.on('finish', () => {
            req.file.cloudStorageObject = gcsfilename
            file.makePublic().then(() => {
                req.file.cloudStoragePublicUrl = getPublicUrl(gcsfilename)
                next()
            })
        })
        
        stream.end(req.file.buffer)
    }
}

const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 1024 * 1024 * 50
    }
})

module.exports = {
    getPublicUrl,
    sendUploadToGCS,
    multer
}