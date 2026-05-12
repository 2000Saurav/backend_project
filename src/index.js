import dotenv from 'dotenv'
import {app} from './app.js'
import connectDB  from './db/index.js'

dotenv.config()



connectDB()
.then(()=>{
    const PORT = process.env.PORT || 3000
    app.listen(PORT || 3000, ()=>{
        console.log(`Server running on PORT : ${PORT}`)
    })
}).catch((error)=>{
    console.log(`Database connection failed : ${error}`)
})
