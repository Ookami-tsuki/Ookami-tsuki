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
    formData.append("cImage",cImage);
    formDate.append("cName",cName);
    formData.append("cDescription",cDescription);
    formData.append("cStatus",cStatus);

try{
    let res=await axios.post(`${apiURL}/api/category/add-category`,
    fromData,
    Headers()
    );
    return res.data;

}
catch(error){
    console.log(error);
}
};
const editCategory=async(cId,des,status)=>{
    let data={cId:cId,cDescription:des,cStatus:status};
    try{
        let res=await axios.post(`${apiURL}/api/category/edit-category`,
        data,
        Headers()
        );
        return res.data;
    }
    catch(error){
        console.log(error);
        
    }
};
const deledeCategory=async(cId)=>{
try{
    let res=await axios.post(`${apiURL}/api/category/delete-category`,
    {cId},
    Headers()
    );
    return res.data;
}catch(error){
    console.log(error);
}
};
export{deledeCategory,editCategory,createCategory,getAllCategory};