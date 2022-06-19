import React, { useState, useEffect } from 'react'

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [data, setData] = useState(null);

    const fetchMovies = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === 'True') {
                setData(data.Search || data);
                setError({ show: false, msg: '' });
                setIsLoading(false);
            } else {
                setError({ show: true, msg: data.Error })
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        // fetchMovies(`${API_ENDPOINT}&s=${urlParams}`)
    }, [urlParams]);

    return { isLoading, error, data }
}

export default useFetch