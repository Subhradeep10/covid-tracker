import React, { useEffect } from 'react'

function Statewise() {

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData);
    }

    useEffect(() => {
        getCovidData()
    }, [])
    return (
        <>
            <h1>INDIA COVID 19 DASHBOARD</h1>
        </>
    )
}

export default Statewise
