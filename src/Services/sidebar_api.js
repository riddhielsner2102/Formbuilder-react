import axios from "axios"

const getData = () => {
    return axios.get('http://localhost:61240/api/v1/FormBuilder/GetTemplateUserMapping?UserID=3')
    //3 is coming from localstorage or cokkie
}

export { getData }