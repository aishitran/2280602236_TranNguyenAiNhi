function showMessage() {
    alert("CI/CD hoạt động thành công!");
}

function checkStatus() {
    const status = document.getElementById("status-text");

    // fake demo status
    const random = Math.random();

    if (random > 0.3) {
        status.innerText = "Pipeline Passed";
        status.style.color = "lightgreen";
    } else {
        status.innerText = "Pipeline Failed";
        status.style.color = "red";
    }
}