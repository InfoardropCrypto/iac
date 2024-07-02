
    async function fetchGasData() {
      const etherscanApiKey = 'NPKCW8J3PRA8FR78JWI6MSB86SIPF9474N';
      const gasApiUrl = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${etherscanApiKey}`;
      const usdToIdrRate = 16069; // Harga 1 USD dalam IDR

      try {
        const response = await fetch(gasApiUrl);
        const data = await response.json();
        
        if (data.status === '1') {
          const gasInfo = data.result;
          const safeGasPriceGwei = gasInfo.SafeGasPrice;
          const proposeGasPriceGwei = gasInfo.ProposeGasPrice;
          const fastGasPriceGwei = gasInfo.FastGasPrice;

          // Convert Gwei to Rupiah (IDR)
          const gweiToIdr = (gwei) => gwei * usdToIdrRate * 0.08;

          const safeGasPriceIdr = gweiToIdr(safeGasPriceGwei);
          const proposeGasPriceIdr = gweiToIdr(proposeGasPriceGwei);
          const fastGasPriceIdr = gweiToIdr(fastGasPriceGwei);

          const gasInfoElement = document.getElementById('gasInfo');
          gasInfoElement.innerHTML = `
            <h2>Ethereum Gas Price⛽ (Gwei):</h2>
            <p>🙂 Pelan : ${safeGasPriceGwei} Gwei (Sekitar ≈ Rp${safeGasPriceIdr.toLocaleString()})</p>
            <p>😀 Normal: ${proposeGasPriceGwei} Gwei (Sekitar ≈ Rp${proposeGasPriceIdr.toLocaleString()})</p>
            <p>😁 Cepat: ${fastGasPriceGwei} Gwei (Sekitar ≈ Rp${fastGasPriceIdr.toLocaleString()})</p>
          `;
        } else {
          throw new Error(data.message || 'Failed to fetch gas data');
        }
      } catch (error) {
        console.error('Failed to fetch gas data:', error);
        const gasInfoElement = document.getElementById('gasInfo');
        gasInfoElement.innerHTML = `<p>${error.message}</p>`;
      }
    }

    // Pertama kali, panggil fungsi fetchGasData
    fetchGasData();

    // Kemudian, panggil fungsi tersebut setiap 10 detik
    setInterval(() => {
      fetchGasData();
    }, 5000); // 10000 milidetik = 10 detik
  