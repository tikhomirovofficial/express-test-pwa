import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
    const data = {
        labels: [
            "Янв",
            "Фев",
            "Мар",
            "Апр",
            "Май",
            "Июн",
            "Июл",
            "Авг",
            "Сен",
            "Окт",
            "Ноя",
            "Дек"
        ],
        datasets: [
            {
                label: 'Sales',
                data: [
                    12800, 13332, 13456, 26000, 31488, 31488, 40456, 30000, 30475, 32500, 28465, 30374
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
