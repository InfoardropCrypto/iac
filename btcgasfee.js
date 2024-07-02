document.addEventListener("DOMContentLoaded", function() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.blockchair.com/bitcoin/stats", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);
                        console.log(response);
                        var lowFee = response.data.suggested_transaction_fee_per_byte_sat;
                        var normalFee = response.data.suggested_transaction_fee_per_byte_sat * 1.5; // contoh perhitungan normal
                        var fastFee = response.data.suggested_transaction_fee_per_byte_sat * 2; // contoh perhitungan cepat
                        var btcPriceUSD = response.data.market_price_usd;
                        var btcPriceIDR = btcPriceUSD * 16000; // Mengonversi harga Bitcoin dari USD ke IDR (asumsi kurs 1 USD = 16000 IDR)
                        var gasPriceLowIDR = lowFee * btcPriceIDR / 100000000; // Menghitung harga gas rendah dalam IDR
                        var gasPriceNormalIDR = normalFee * btcPriceIDR / 100000000; // Menghitung harga gas normal dalam IDR
                        var gasPriceFastIDR = fastFee * btcPriceIDR / 100000000; // Menghitung harga gas cepat dalam IDR
                        var satoshiSymbol = "&nbsp;Satoshi";
                        document.getElementById("lowFee").innerHTML = "🙂 Rendah: " + lowFee + satoshiSymbol + " (Sekitar ≈ Rp" + gasPriceLowIDR.toLocaleString() + ")";
                        document.getElementById("normalFee").innerHTML = "😀 Normal: " + normalFee + satoshiSymbol + " (Sekitar ≈ Rp" + gasPriceNormalIDR.toLocaleString() + ")";
                        document.getElementById("fastFee").innerHTML = "😁 Cepat: " + fastFee + satoshiSymbol + " (Sekitar ≈ Rp" + gasPriceFastIDR.toLocaleString() + ")";
                    } else {
                        console.error("Gagal mengambil data. Kode status: " + xhr.status);
                    }
                }
            };
            xhr.send();
        });