require('dotenv').config();
require('./Server/app');
const mongoose= require('mongoose');

const dev_uri=process.env.MONGODB_DEV;
const test_uri=process.env.MONGODB_TEST;

mongoose.connect(test_uri).then(()=>{

console.log('Database connected Successfully')
}).catch( (err)=>{

console.log("error connecting to database", err.message)

    })

        
    
