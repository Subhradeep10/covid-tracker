import React from 'react'

function Statewise() {
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
