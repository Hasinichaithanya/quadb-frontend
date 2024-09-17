document.addEventListener("DOMContentLoaded", async () => {
  const fecthData = async () => {
    const response = await fetch("http://localhost:8080/getTop10");
    cryptos = await response.json();
    const tbody = document.querySelector("#crypto-table tbody");
    tbody.innerHTML = "";

    cryptos.forEach((crypto, index) => {
      console.log(index);
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${index + 1}</td>
              <td>${crypto.name}</td>
              <td>₹${crypto.last}</td>
              <td>₹${crypto.buy}/₹${crypto.sell}</td>
              <td>${crypto.volume}</td>
              <td>${crypto.base_unit}</td>
          `;
      tbody.appendChild(row);
    });
  };
  await fecthData();
  setInterval(fecthData, 10000);
});
