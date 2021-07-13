import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import { fetchTrending } from './service/RestApi';


const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await fetchTrending()
            console.log(data);
            setData(data)
        } catch (error) {
            setError(error)
        }
    }



    return (
        <>
            <Header/>
            <main>
                <h1>AnimeTrend</h1>
            </main>
        </>
    )
}

export default App
