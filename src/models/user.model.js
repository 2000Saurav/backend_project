import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {

    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        index : true

    },
        email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,

    },
        fullName : {
        type : String,
        required : true,
        trim : true,

    },
        password : {
        type : String,
        required : true,
        
    },
        watchHistory : {
        type : Schema.Types.ObjectId,
        ref: "Video"

    },
        avtar : {
        type : String,
        required : true,
        
    },
        coverImage : {
        type : String,
        required : true,
        
    },
        refreshToken : {
        type : String,
        required : true,
        
    },
},
    {
    timestamps: true
    }
)

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.issPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function (){
    return jwt.sign({
        _id : this.id,
        email : this.email,
        username : this.username,
        fullName : this.fullName
    },
    process.env.ACCESS_SECRET_TOKEN,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefereshToken = function(){
    return jwt.sign({
        _id: this.id
    }, process.env.REFRESH_SECRET_TOKEN,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User", userSchema)