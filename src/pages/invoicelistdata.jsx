import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import face1 from "../../src/assets/images/faces/1.jpg";
import face2 from "../../src/assets/images/faces/2.jpg";
import face3 from "../../src/assets/images/faces/3.jpg";
import face4 from "../../src/assets/images/faces/4.jpg";
import face5 from "../../src/assets/images/faces/5.jpg";
import face6 from "../../src/assets/images/faces/6.jpg";
import face7 from "../../src/assets/images/faces/7.jpg";
import face8 from "../../src/assets/images/faces/8.jpg";
import face9 from "../../src/assets/images/faces/9.jpg";
import face10 from "../../src/assets/images/faces/10.jpg";
import face11 from "../../src/assets/images/faces/11.jpg";
import face12 from "../../src/assets/images/faces/12.jpg";
import face13 from "../../src/assets/images/faces/13.jpg";
import face15 from "../../src/assets/images/faces/15.jpg";

export class InvoiceStats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Total',
                data: [176, 185, 201, 198, 187, 205]
            }, {
                name: 'Paid',
                data: [135, 141, 136, 126, 145, 148]
            }, {
                name: 'Pending',
                data: [144, 155, 157, 156, 161, 158]
            }, {
                name: 'Overdue',
                data: [113, 127, 131, 129, 135, 125]
            }],
            options: {
                chart: {
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                    type: 'bar',
                    height: 210,
                    stacked: true
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%',
                        // endingShape: 'rounded',
                    },
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#4b9bfa", "#28d193", "#ffbe14", "#f3f6f8"],
                stroke: {
                    show: true,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    title: {
                        style: {
                            color: "#8c9097",
                        }
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " thousands DA";
                        }
                    }
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={210} />

        );
    }
}


export const Manageinvoicedata = [
    { id: 1, src: face6, name: 'Haifaa Chirine Serhane', mail: 'client1@riwam.com', invoiceid: '#SPK-1203', date: '02,Mai 2025', amount: '12,000 DZD', badge: 'Paid', color: 'success', due: '02,Mai 2025' },
    { id: 2, src: face1, name: 'Nassima Djeridi Bekadour', mail: 'client2@riwam.com', invoiceid: '#SPK-5902', date: '04,Mai 2025', amount: '7,000 DZD', badge: 'Due By 1 Day', color: 'primary', due: '04,Mai 2025' },
    { id: 3, src: face2, name: 'Mimouna Belkhedim', mail: 'client3@riwam.com', invoiceid: '#SPK-1234', date: '05,Mai 2025', amount: '10,000 DZD', badge: 'Pending', color: 'warning', due: '05,Mai 2025' },
    { id: 4, src: face3, name: 'Maria Belmiloud', mail: 'client4@riwam.com', invoiceid: '#SPK-5300', date: '06,Mai 2025', amount: '5.000 DZD', badge: 'Due By 1 Day', color: 'primary', due: '06,Mai 2025' },
    { id: 5, src: face4, name: 'F & F Berrefas', mail: 'client5@riwam.com', invoiceid: '#SPK-1345', date: '07,Mai 2025', amount: '8,000 DZD', badge: 'Pending', color: 'warning', due: '07,Mai 2025' },
    { id: 6, src: face5, name: 'Malek Rahef Serhane', mail: 'client6@riwam.com', invoiceid: '#SPK-8765', date: '07,Mai 2025', amount: '7,000 DZD', badge: 'Due By 1 Day', color: 'primary', due: '07,Mai 2025' },
    { id: 7, src: face2, name: 'Sarah Kacimi', mail: 'client7@riwam.com', invoiceid: '#SPK-2936', date: '09,Mai 2025', amount: '8,000 DZD', badge: 'Paid', color: 'success', due: '09,Mai 2025' },
    { id: 8, src: face6, name: 'Chaimaa Abid', mail: 'client8@riwam.com', invoiceid: '#SPK-1976', date: '13,Mai 2025', amount: '12,000 DZD', badge: 'Pending', color: 'warning', due: '13,Mai 2025' },
    { id: 9, src: face7, name: 'Sarah & Jouri Benali', mail: 'client9@riwam.com', invoiceid: '#SPK-5300', date: '15,Mai 2025', amount: '5,000 DZD', badge: 'Due By 1 Day', color: 'primary', due: '15,Mai 2025' },
    { id: 10, src: face3, name: 'Amira Senouci SLAY', mail: 'client10@riwam.com', invoiceid: '#SPK-1423', date: '16,Mai 2025', amount: '5,000 DZD', badge: 'Paid', color: 'success', due: '16,Mai 2025' },
    { id: 11, src: face8, name: 'Safaa Serhane', mail: 'client11@riwam.com', invoiceid: '#SPK-4023', date: '18,Mai 2025', amount: '7,000 DZD', badge: 'Pending', color: 'warning', due: '18,Mai 2025' },
    { id: 12, src: face4, name: 'Chahra Berrane', mail: 'client12@riwam.com', invoiceid: '#SPK-3705', date: '18,Mai 2025', amount: '10,000 DZD', badge: 'Due By 1 Day', color: 'primary', due: '18,Mai 2025' },
];
