import React from 'react'

function Statewise() {

    const getCovidData = async () => {
        fetch('https://data.covid19india.org/data.json')
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
