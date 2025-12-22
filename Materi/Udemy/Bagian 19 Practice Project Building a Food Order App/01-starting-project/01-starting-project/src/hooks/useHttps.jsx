import { useState, useEffect, useCallback } from 'react';
//  Menangani request Umum
async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);
    const resData = await response.json();
    if (!response.ok) throw new Error(resData.message || 'Ada yang salah, gagal mengirimkan request.')
    return resData;
}
export default function useHttp(url, config) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);


    // Menangani permintaan berdasarkan status permintaan
    const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest(url, config);
            setData(resData);
        } catch (error) {
            setError(error.message || 'Ada yang salah, gagal mengirimkan permintaan.')
        }
        setIsLoading(false);
    }, [url, config]);
    useEffect(() => {
        if (config && config.method === 'GET') {
            sendRequest();
        }
    }, [sendRequest, config])
    return {
        data,
        isLoading,
        error,
        sendRequest
    }

}