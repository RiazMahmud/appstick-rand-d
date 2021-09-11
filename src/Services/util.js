export const convertObjectToFormData = (object) => {
    var form_data = new FormData();
 
    for (var key in object) {
       form_data.append(key, object[key]);
    }
    return form_data;
 };

 export const getAuthHeader = () => {
    return  "Bearer " + localStorage.getItem("AdminAuthToken");
 };