// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Waste Composition Chart
    const wasteCtx = document.getElementById('wasteChart').getContext('2d');
    const wasteChart = new Chart(wasteCtx, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Recyclables',
                    data: [2.1, 2.3, 2.0, 2.5, 2.7, 1.8, 1.5],
                    backgroundColor: '#3b82f6',
                },
                {
                    label: 'Organic',
                    data: [1.4, 1.2, 1.6, 1.3, 1.5, 1.9, 1.7],
                    backgroundColor: '#10b981',
                },
                {
                    label: 'Non-recyclable',
                    data: [0.8, 0.7, 0.9, 0.6, 0.5, 1.1, 0.9],
                    backgroundColor: '#ef4444',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Weight (kg)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        afterBody: function(context) {
                            const total = context[0].dataset.data.reduce((a, b) => a + b, 0);
                            return `Total: ${total.toFixed(1)} kg`;
                        }
                    }
                }
            }
        }
    });
});
