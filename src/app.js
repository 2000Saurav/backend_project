import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";
const app = express(); 

app.use(cors({
  origin : process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit : "16kb"
}))

app.use(cookieParser())

app.use(express.static('public'))




export {app}




// import express from 'express'
// import cors from "cors"
// import cookieParser from 'cookie-parser';

// const app = express();


// app.use(cors({
//     origin : process.env.CORS_ORIGIN,
//     credentials : true
// })) // This is cors origin it allowed us 

// app.use(express.json({
//     limit : "16kb"
// })) //  with this we can allow the json and set the limit of the json file 

// app.use(express.urlencoded({
//     extended: true, 
//     limit:true
// })) // it use for to when we see in the url like %,+, ? this type of symbol so we allow them and understand for extended we use we can use object inside object and for limit we set the limit

// app.use(express.cookieParser())

// app.use(express.static("public")) // this allow us to manage file 
// export default app