function myLineUp(event) {
    const status = document.querySelector('input[name="status"]:checked').value || "";
    const date = document.getElementById("date").value;
    const players = Array.from(document.querySelectorAll('input[name="players"]:checked'));
                            
    console.log("Status:" + status);
    console.log("Game Date:" + date);
    console.log("Selected Players:" + players);

    const formInfo = `Status: ${status} | Date: ${date} | Players: ${players.length > 0 ? players.join(", ") : "None selected"}`;
    document.getElementById("outputDisplay").textContent = formInfo;

}
