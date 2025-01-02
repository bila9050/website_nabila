document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    const transactionName = document.getElementById('transactionName').value;
    const transactionQuantity = document.getElementById('transactionQuantity').value;
    const transactionCategory = document.getElementById('transactionCategory').value;

    // Tambahkan data ke tabel daftar transaksi
    const transactionList = document.getElementById('transactionList');
    const newRow = transactionList.insertRow();
    newRow.insertCell(0).innerText = transactionList.rows.length - 1; // No
    newRow.insertCell(1).innerText = transactionName; // Nama Transaksi
    newRow.insertCell(2).innerText = transactionQuantity; // Jumlah
    newRow.insertCell(3).innerText = transactionCategory; // Kategori

    // Reset form
    document.getElementById('transactionForm').reset();
});
