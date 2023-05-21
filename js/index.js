function createQr() {
  let txt = document.getElementById("qr-text").value;
  document.getElementById(
    "img"
  ).src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${txt}&margin=30&qzone=1`;

  alert("QR Code Generated...");
}

function download() {
  document.getElementsByClassName(
    ".button"
  ).download.href = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${txt}&margin=30&qzone=1`;
}
