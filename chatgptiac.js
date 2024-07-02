
        // Kode JavaScript
        function sendMessage() {
            var userInput = document.getElementById("user-input").value;
            if (userInput.trim() !== "") {
                addMessage("Anda", userInput, "user-message");
                setTimeout(function() {
                    var reply = generateReply(userInput); // Menghasilkan balasan sederhana
                    addMessage("ChatGPT", reply, "bot-message");
                }, 500); // Menambahkan jeda 0.5 detik sebelum menampilkan balasan ChatGPT
                document.getElementById("user-input").value = ""; // Hapus input setelah dikirim
            }
        }

        function addMessage(pengirim, pesan, kelas) {
            var chatBox = document.getElementById("chat-box");
            var messageElement = document.createElement("div");
            messageElement.innerHTML = "<strong>" + pengirim + ":</strong> " + pesan;
            messageElement.classList.add(kelas);
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll ke bawah
        }

        // Fungsi sederhana untuk menghasilkan balasan
        function generateReply(userInput) {
            // Pola balasan berdasarkan input pengguna
            var reply = "";
            if (userInput.includes("hai") || userInput.includes("halo") || userInput.includes("hi")) {
                reply = "hai! Apa kabar? Ada yang bisa saya bantu?";}
                // chat 1 
                
             else if (userInput.includes("apa kabar") || userInput.includes("bagaimana kabarmu") || userInput.includes("gimana kabarmu")) {
                reply = "saya baik, terima kasih. bagaimana dengan anda?";}
                // chat 2
                
              else if (userInput.includes("terima kasih") || userInput.includes("makasih") || userInput.includes("thanks") || userInput.includes("mksh")) {
                reply = "sama-sama! jika ada yang perlu ditanyakan, jangan ragu untuk bertanya.";} 
                // chat 3
                
              else if (userInput.includes("apakah kamu manusia") || userInput.includes("kamu robot") || userInput.includes("kamu bukan manusia") || userInput.includes("nama kamu siapa")) {
                reply = "saya adalah model ChatGPT, sebuah program komputer yang dirancang untuk berinteraksi dengan anda. meskipun saya bukan manusia, saya siap membantu anda!";}
              // chat 4
              
              else if (userInput.includes("lagi apa") || userInput.includes("sedang apa")) {
                reply = "saya sedang online, siap untuk merespons pertanyaan anda!";}
                // chat 5
                
             else if (userInput.includes("selamat datang")) {
                reply = "terima kasih atas sambutannya!";}
                // chat 6
                
             else if (userInput.includes("apa itu airdrop crypto") || userInput.includes("airdrop kripto") || userInput.includes("apa itu airdrop")) {
                reply = "airdrop crypto adalah pemberian aset crypto kepada komunitas atau pemegang wallet crypto individu yang berhak dan memenuhi syarat-syarat tertentu. dalam prosesnya, airdrop diklaim secara manual melalui website resmi sebuah proyek crypto. tak jarang juga terdapat airdrop yang dikirim langsung ke wallet. Salah satu tujuan dari airdrop adalah sebagai strategi pemasaran dan menjadikan komunitas lebih mengenal sebuah proyek crypto yang akan diluncurkan.";}
                // chat 7
                
             else if (userInput.includes("grup airdrop crypto") || userInput.includes("grup airdrop") || userInput.includes("cara mendapatkan airdrop") || userInput.includes("mengikuti airdrop ")) {
                reply = "ada berbagai cara mengikuti atau mendapatkan airdrop, paling mudah adalah kamu bergabung ke <a href='https://chat.whatsapp.com/K7IrcyyvYt77RiSSXuTZGH'>Group IAC</a> atau pemburu airdrop yang bisa kamu temukan di telegram, facebook, dan lain sebagainya";}
                // chat 8
                
                else if (userInput.includes("grup iac")) {
                  reply = "<a href='https://chat.whatsapp.com/K7IrcyyvYt77RiSSXuTZGH'>Group IAC</a>";}
                // chat 9
                
                else if (userInput.includes("ada yang baru")) {
                  reply = "tidak ada yang baru, saya di sini untuk membantu anda. ada yang bisa saya bantu?";}
                // chat 10
                
                else if (userInput.includes("sudah makan") || userInput.includes("makan")) {
                  reply = "belum, tapi itu mengingatkan saya untuk minum air. jangan lupa untuk menjaga diri anda dengan makan yang sehat juga!";}
                // chat 11
                
                else if (userInput.includes("lucu deh") || userInput.includes("kamu lucu")) {
                  reply = "terima kasih! saya mencoba memberikan bantuan dan juga sedikit hiburan";}
                // chat 12
                
                else if (userInput.includes("hobi kamu apa") || userInput.includes("punya hobi")) {
                  reply = "tentu saja, saya suka membaca, belajar hal baru, dan tentu saja, membantu anda!";}
                // chat 13
                
                else if (userInput.includes("kamu suka makan apa")) {
                  reply = "saya bukan manusia, jadi saya tidak makan. tapi saya suka membahas topik apapun yang menarik, termasuk tentang makanan!";}
                // chat 13
                
                else if (userInput.includes("apa kabar dunia")) {
                  reply = "terkadang ada kabar baik dan kabar buruk, tapi saya berharap kita bisa membuat hari ini lebih baik dengan berinteraksi di sini!";}
                // chat 13
                
                else if (userInput.includes("apa itu cryptocurenncy") || userInput.includes("apa itu crypto")) {
                  reply = "cryptocurrency adalah mata uang digital yang menggunakan teknologi kriptografi untuk mengamankan transaksi dan mengendalikan pembuatan unit baru.";}
                // chat 14
                
                else if (userInput.includes("cryptocurenncy pertama") || userInput.includes("crypto pertama")) {
                  reply = "bitcoin adalah cryptocurrency pertama yang dibuat pada tahun 2009 oleh seseorang atau sekelompok orang dengan nama samaran Satoshi Nakamoto.";}
                // chat 15
                
                else if (userInput.includes("bitcoin")) {
                  reply = "bitcoin adalah mata uang digital terdesentralisasi yang memungkinkan transaksi peer-to-peer tanpa perantara.";}
                // chat 16
                
                else if (userInput.includes("fungsi bitcoin") || userInput.includes("kerja bitcoin")) {
                  reply = "bitcoin bekerja menggunakan teknologi blockchain, di mana setiap transaksi dicatat dalam buku besar publik yang didistribusikan di jaringan komputer.";}
                // chat 17
                
             else {
                reply = "Maaf, saya tidak mengerti. Bisakah Anda mengulanginya?";
            }
            return reply;
        }
    