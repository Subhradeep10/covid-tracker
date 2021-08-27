import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Statewise() {

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
    }

    useEffect(() => {
        // getCovidData()
    }, [])
    return (
        <>
            <h1>INDIA COVID 19 DASHBOARD</h1>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5">INDIA COVID 19 DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>

                            </tr>
                        </thead>
                    </table>
                </div>

            </div>


        </>
    )
}

export default Statewise
