import axios from "axios"

const header = {
    Authorization: 'Bearer BQCesnpooab5K11YXJAEgP0Uv_52GnDR0MnQXNuP2gFLNejeUpP1jX8HilFPXRXnlWTbnf97gl5boLL-keTTV2Tq6ZkMBD_pOPWNvODvCTzgiiWSE9k'
}

export const searchSpotify = async (search : string)=>{
   try {
     const { data } = await axios.get('https://api.spotify.com/v1/search',{
         params:{
             q: search,
             type: "album"
         },
         headers:header
     })
     return data
   } catch (error : any) {
    console.error(error?.message)
   }
}

export const getIdAlbum = async (id : string)=>{
 try {
       const { data } = await axios.get(`https://api.spotify.com/v1/albums/${id}`,{
        headers:header
       })
   
       return data
 } catch (error : any) {
    console.error(error?.message)
 }
}