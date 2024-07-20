import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const chartInstance = new Chart(ctx, {
        type: "bar", // Choose your chart type here (bar, line, pie, etc.)
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Purchases",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Cleanup function to destroy the chart instance
      return () => {
        chartInstance.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
