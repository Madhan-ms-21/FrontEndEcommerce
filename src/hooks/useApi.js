import { useEffect, useState } from 'react'

const useApi = (url) => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [loadError,setLoadError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        setLoadError(null)
        fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setData(json);
            setLoading(false);
        })
        .catch((err) => {
            setLoadError(err);
            setLoading(false);
        }) ;
    },[url])

    return {data,loading,loadError};
}

export default useApi;