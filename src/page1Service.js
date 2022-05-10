import { api } from './baseService'

const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    return await api(url, "get");
}

const page1Service = {
    getData
}
export default page1Service;