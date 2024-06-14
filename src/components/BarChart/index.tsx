import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useAppSelector } from '../../app/hooks';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const BarChart = () => {
    const { chartData } = useAppSelector(state => state.bonuses)
    const data = {
        labels: [
            ...chartData.labels
        ],
        datasets: [
            {
                label: 'Бонусов',
                data: [
                    ...chartData.datasets[0].data
                ],
                barThickness: 10, // Толщина баров
                maxBarThickness: 20,
                backgroundColor: '#36CACB',
                borderColor: '#36CACB',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value: any) => value,
                color: '#000',
                font: {
                    weight: 'bold',
                    letterSpace: 1,
                    size: 6,
                    family: 'Montserrat',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8,
                        family: 'Montserrat',
                    },
                    maxRotation: 0,
                    minRotation: 0,
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 6,
                        family: 'Montserrat',
                    },
                },
            },
        },
    };

    return (
        <div className='pd-10 whiteBorderedBlock'>
            <Bar data={data} options={options as any} />
        </div>
    );
};

export default BarChart;
