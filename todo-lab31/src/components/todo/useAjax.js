import { useState, useEffect } from 'react'

const useAjax = () => {

    const [retrievedData, setRetrievedData] = useState(null)

    function makeApiCall(apiUrl, method, request, callback) {
        fetch(apiUrl, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: request
          })
            .then(response => response.json())
            .then(responseJson => {
                setRetrievedData(responseJson)
                callback(method)
            })
            .catch(console.error);
    }

    return [makeApiCall, retrievedData]
}

export default useAjax
