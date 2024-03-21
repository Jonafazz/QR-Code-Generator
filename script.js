function generateQR() {
    let molla = document.getElementById('inputText').value;
    let linku = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + molla +"&color=7305c7";
    document.getElementById("QRfoto").src = linku;
}
