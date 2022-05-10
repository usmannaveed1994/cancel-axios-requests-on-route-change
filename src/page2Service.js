import { api } from './baseService'

const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    return await api(url, "get");
}

const page2Service = {
    getData
}
export default page2Service;