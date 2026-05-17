import {v2 as cloudinary} from cloudinary
import fs from fs


cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: 'process.env.API_SECRET'    
    });

    const uploadOnCloudinary = async (filepath)=>{
      try {
        if(!filepath) return null;
        const response = await cloudinary.  uploader
       .upload(filepath, {
            resource_type : 'auto'
           }
       )

       console.log("File is upload on cloudinary", response)
       return response
        
      } catch (error) {
        fs.unlinkSync(filepath)
        return null
      }  
    }


    export {uploadOnCloudinary}