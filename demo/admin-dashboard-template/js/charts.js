// Nebula Admin — Chart Configurations

function initDashboardCharts() {
  if (typeof Chart === 'undefined') return;

  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? '#94a3b8' : '#64748b';
  const gridColor = isDark ? '#1e293b' : '#e2e8f0';
  const borderColor = isDark ? '#334155' : '#cbd5e1';

  Chart.defaults.color = textColor;
  Chart.defaults.borderColor = gridColor;
  Chart.defaults.font.family = "'Inter', system-ui, sans-serif";

  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [12500, 15800, 14200, 18900, 21500, 19800, 24300, 26100, 23800, 28400, 31200, 34500],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 5
          },
          {
            label: 'Expenses',
            data: [8200, 9100, 8800, 10400, 11200, 10800, 12100, 12600, 11900, 13200, 14100, 15300],
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.05)',
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', align: 'end', labels: { boxWidth: 12, padding: 16 } }
        },
        scales: {
          x: { grid: { display: false }, border: { display: false } },
          y: {
            grid: { color: gridColor },
            border: { display: false },
            ticks: { callback: function(v) { return '$' + (v / 1000) + 'k'; } }
          }
        }
      }
    });
  }

  // Traffic Donut Chart
  const trafficCtx = document.getElementById('trafficChart');
  if (trafficCtx) {
    new Chart(trafficCtx, {
      type: 'doughnut',
      data: {
        labels: ['Organic', 'Direct', 'Referral', 'Social'],
        datasets: [{
          data: [42, 28, 18, 12],
          backgroundColor: ['#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b'],
          borderWidth: 0,
          cutout: '72%'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } }
        }
      }
    });
  }

  // Sparkline charts for stat cards
  document.querySelectorAll('[data-sparkline]').forEach(function (el) {
    const data = JSON.parse(el.dataset.sparkline);
    new Chart(el, {
      type: 'line',
      data: {
        labels: data.map(function (_, i) { return i; }),
        datasets: [{
          data: data,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.08)',
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    });
  });

  // Bar chart for analytics page
  const barCtx = document.getElementById('weeklyBarChart');
  if (barCtx) {
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Page Views',
            data: [4200, 5800, 4900, 6100, 7400, 3200, 2800],
            backgroundColor: '#6366f1',
            borderRadius: 6,
            barPercentage: 0.6
          },
          {
            label: 'Sessions',
            data: [3100, 4200, 3600, 4800, 5900, 2400, 2100],
            backgroundColor: '#c7d2fe',
            borderRadius: 6,
            barPercentage: 0.6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', align: 'end', labels: { boxWidth: 12, padding: 16 } }
        },
        scales: {
          x: { grid: { display: false }, border: { display: false } },
          y: { grid: { color: gridColor }, border: { display: false } }
        }
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDashboardCharts);
} else {
  initDashboardCharts();
}
