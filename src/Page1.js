import { useEffect } from "react";
import page1Service from "./page1Service";

function Page1() {
    useEffect(() => {
        page1Service.getData().then(res => {
        });
        page1Service.getData().then(res => {
        });
        page1Service.getData().then(res => {
        });
        page1Service.getData().then(res => {
        });
        page1Service.getData().then(res => {
        });
    }, []);

    return <h1>Page 1</h1>
}

export default Page1;
