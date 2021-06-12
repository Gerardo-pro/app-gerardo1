import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData()
        }, []);
    
    async function getData() {
        await axios(url)
        .then((response) => {
        setData(response.data);
        })
        .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        })
        .finally(() => {
        setLoading(false);
        });
    }
    
    if (loading) return "Loading...";
    if (error) return "Error!";

    return { loading, data}
}

export default useFetch