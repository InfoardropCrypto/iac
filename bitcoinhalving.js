// Tanggal target untuk hitung mundur (tahun, bulan dimulai dari 0, hari, jam, menit, detik)
var targetDate = new Date(2028, 3, 20, 7, 12, 12); // Contoh: 14 Februari 2024 pukul 12:00 siang

// Fungsi untuk menghitung mundur dan memperbarui elemen HTML
function updateCountdown() {
  var now = new Date();
  var timeDifference = targetDate - now;

  // Menghitung waktu tersisa dalam detik, menit, jam, dan hari
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Memperbarui elemen HTML dengan waktu tersisa
  document.getElementById('btchlv').textContent = 'Waktu tersisa: ' + days + ' hari, ' + hours + ' jam, ' + minutes + ' menit, ' + seconds + ' detik';

  // Menghentikan hitung mundur jika waktu target telah tercapai
  if (timeDifference < 0) {
    clearInterval(timer);
    document.getElementById('btchlv').textContent = 'Bitcoin Halving🤩🤯!';
  }
}

// Memanggil fungsi updateCountdown setiap detik
var timer = setInterval(updateCountdown, 1000);