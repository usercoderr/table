import Table from "./Table.jsx";
import {useState} from "react";
import {mockDataTen} from "../data.js";

const Main = () => {
    const [data, setData] = useState(mockDataTen)

    return (
        <div>
            Main
            <Table stores={data} data={data} setData={setData}/>
        </div>
    );
};

export default Main;