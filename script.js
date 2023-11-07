const ctx = document.getElementById("canvas");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((item) => item.day),
        datasets: [
          {
            label: "Expenses",
            data: data.map((item) => item.amount),
            backgroundColor: data.map((item) =>
              item.day === "wed" ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
            ),
            hoverBackgroundColor: "#ff9b87",
            borderWidth: 0,
            borderRadius: 5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            gridLines: {
              color: "white",
            },
            display: false,
          },
          x: {
            gridlines: {
              color: "white",
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              labelColor: (context) => {
                const index = context.dataIndex;
                const color = index === 2 ? "#b4dfe5" : "#ff9b87";
                return {
                  borderColor: color,
                  backgroundColor: color,
                };
              },
            },
          },
        },
      },
    });
  });
