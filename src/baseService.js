import axios from 'axios';

let axiosInstances = {};

const getInstance = (pathname) => {
    if (axiosInstances[pathname] && !axiosInstances[pathname].controller.signal.aborted) {
        return axiosInstances[pathname].instance;
    }
    else {
        const customAxiosInstance = createInstance();
        axiosInstances[pathname] = customAxiosInstance;
        return axiosInstances[pathname].instance;
    }
}

const createInstance = () => {
    const controller = new AbortController();
    const customAxiosInstance = {
        controller,
        instance: axios.create({
            signal: controller.signal
        })
    }
    return customAxiosInstance;
}

export const cancelPreviousPageRequests = (previousPath) => {
    axiosInstances[previousPath]?.controller.abort();
}

export const api = async (url, method, data = null) => {
    const instance = getInstance(window.location.pathname);
    const res = await instance({
        method,
        url,
        data
    });
    return res;
}