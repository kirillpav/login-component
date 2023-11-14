import React from "react";

import data from "./json/test2.json";

function errorTest() {
    data.map(() => {
        if (data.valid === true) {
            return data.message;
        } else if (data.valid === false) {
            throw new Error("Something wrong with the data");
        }
    })
}

export default errorTest()
