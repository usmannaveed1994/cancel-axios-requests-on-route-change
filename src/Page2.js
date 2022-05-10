import { useEffect } from "react";
import page2Service from "./page2Service";

function Page2() {
    useEffect(() => {
        page2Service.getData().then(res => {
        });
        page2Service.getData().then(res => {
        });
        page2Service.getData().then(res => {
        });
        page2Service.getData().then(res => {
        });
        page2Service.getData().then(res => {
        });
    }, []);

    return <h1>Page 2</h1>
}

export default Page2;
