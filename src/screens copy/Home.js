import React, { useState } from 'react'
import Chart from '../components/Chart';
import Box from '../components/framework/Box';
import Button from '../components/framework/Button';
import { data } from '../lessorAcceptanceRate';
import { _rows, _columns } from '../serviceStatuses'

function Home() {
    const changeData = async (rate, interval) => {
        const _data = await data[rate]
        setLessorRate({ data: _data, interval })
    }
    const [lessorRate, setLessorRate] = useState({ data: data['yearly'], interval: 1000 * 3600 * 24 * 30 })
    return (
        <div className="md:flex flex-grow">
            <div className="w-7/12 mr-5">
                <Box>
                    <h3 className="ml-4 mb-3 font-bold">Lessor Acceptance Rate</h3>
                    <Chart data={lessorRate.data} interval={lessorRate.interval} />
                    <div className="flex justify-between">
                        <Button >Weekly</Button>
                        <Button onClick={() => { changeData('monthly', 1000 * 3600 * 24) }}>Monthly</Button>
                        <Button onClick={() => { changeData('sixMonths', (1000 * 3600 * 24 * 30) / 2) }}>6 months</Button>
                        <Button onClick={() => { changeData('yearly', (1000 * 3600 * 24 * 30)) }}>Yearly</Button>
                    </div>
                </Box>
                <Box>
                    <h3 className="ml-4 mb-3 font-bold">Service Request by month</h3>
                    <Chart data={data.monthly} interval={1000 * 3600 * 24} />
                </Box>
            </div>
            <div className="w-5/12">
                <Box>
                    <h3 className="ml-4 mb-3 font-bold">Service Statuses</h3>

                </Box>
            </div>
        </div>
    )
}

export default Home
