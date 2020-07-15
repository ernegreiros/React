import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';

const data = [
    { name: 'Group A', value: 400, fill: '#0088FE' },
    { name: 'Group B', value: 300, fill: '#00C49F' },
    { name: 'Group C', value: 300, fill: '#FFBB28' },
    { name: 'Group D', value: 200, fill: '#FF8042' },
];

class GraficoPizza extends PureComponent {

    render() {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} fill="#8884d8" label />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default GraficoPizza;
