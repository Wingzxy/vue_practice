<template>
    <div id = Chart_demo>
        <h1>This is a Chart demo</h1>
        <a>Written by {{ author }}</a>
        <canvas id="myChart" width="600" height="400"></canvas>
    </div>
</template>

<script>

import Chart from 'chart.js';

    export default {
        name: "Chart_demo",

        data() {
            return{
                author: 'Wingzxy'
            }
        },
        mounted() {
            var ctx2 = document.getElementById("myChart");
            var myChart = new Chart(ctx2, {
                type: "bar",
                data: {
                    labels: [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                    ],
                    datasets: [
                        {
                            label: 'test1',
                            backgroundColor: 'rgba(255,10,10,0.3)',
                            borderColor: 'rgba(255,103,110,1)',
                            borderWidth: 1,
                            pointStrokeColor: '#fff',
                            pointStyle: 'crossRot',
                            data: [65, 59, 0, 81, 56, 10 ,40, 22, 32, 54, 10, 30],
                            cubicInterpolationMode: 'monotone',
                            spanGaps: 'false',
                            fill: 'false'
                        }
                    ]
                },
                options: {

                }
            });
        },
        methods: {

        }
    }

</script>

<style scoped>

</style>