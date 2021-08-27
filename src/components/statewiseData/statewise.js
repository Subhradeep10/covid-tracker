import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

function Statewise() {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData()
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
                            {
                                data.map((currElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{currElem.state}</th>
                                            <td className="green">Confirmed</td>
                                            <td className="green">Recovered</td>
                                            <td className="red">Deaths</td>
                                            <td className="green">Active</td>
                                            <td className="green">Updated</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </div>

            </div>


        </>
    )
}

export default Statewise
