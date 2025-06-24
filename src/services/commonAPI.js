import axios from 'axios'

export const commonAPI = async(httpMethod,url,reqBody)=>{
    let regConfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":"application/json"
        }
       
    }
    return await axios(regConfig).then(
        (result)=>{
            return result
        }
       ).catch((err)=>{
        return err
       })
}