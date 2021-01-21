import { useState, useEffect } from 'react'

const useAjax = () => {

    const [retrievedData, setRetrievedData] = useState(null)

    async function makeApiCall(apiUrl, method, request, callback) {
        console.log("apiUrl", apiUrl);
        console.log("method", method);
        console.log("request", request);

        const fetchItems = await fetch(apiUrl, {
            method: method,
            body: request
        })
        console.log("fetchItems", fetchItems);
        const data = fetchItems.data;
        console.log("Data", data);


    //         .then(response => response.json())
        
    //         .then(responseJson => {
    //             console.log("responseJson", responseJson);
            setRetrievedData(data)
            callback(method)
    //     })
    // .catch(console.error);
    }

return [makeApiCall, retrievedData]
}

export default useAjax
