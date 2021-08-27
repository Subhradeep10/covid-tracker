import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

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

            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="text-center">INDIA COVID 19 DASHBOARD</h1>
                </div>
                <br />
                <div className="table-responsive">
                    <Table className="table table-hover" striped bordered hover variant="dark">
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
                        <tbody>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>

                        </tbody>
                    </Table>
                </div>

            </div>


        </>
    )
}

export default Statewise
