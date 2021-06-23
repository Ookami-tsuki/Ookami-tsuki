import axios from "axios";
const apiURL=process.env.REACT_APP_API_URL;
const BearerToken=()=> localStorage.getItem("jwt")?JSON.parse(localStorage.getItem("jwt")).token:false;
const Headers=()=>{
    return{
        headers:{
            token:`Bearer${BearerToken}`,
        },
    };
};
const getAllCategory=async()=>{
    try{
        let res= await axios.get(`${apiURL}/api/category/all-category`,Headers());
        return res.data;

    }
    catch(error){
        console.log(error);
    }
}
const createCategory=async({
    cName,
    cImage,
    cDescription,
    cStatus,
})=>{
    let formData=new FormData();
}