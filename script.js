document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkButton").addEventListener("click", searchDomain);
});

function searchDomain() {
    var domain = document.getElementById("domainInput").value.trim();
    var extension = document.getElementById("domainExt").value;
    var fullDomain = domain + extension;

    var resultContainer = document.getElementById("searchResultContainer");
    resultContainer.innerHTML = ''; // Clear previous results

    if (domain === "") {
        alert("Sisesta domeeni nimi!");
        return;
    }

    // Simulate checking availability
    setTimeout(() => {
        resultContainer.style.display = "block";
        resultContainer.innerHTML = `
            <div class="availability-message">
                <span class="check-icon">✅</span>
                <strong>${fullDomain}&nbsp;</strong> on saadaval. Vali sobiv periood ja registreeri kohe.
            </div>
            <select id="periodSelect">
                <option value="">vali periood</option>
                <option value="1">1 kuu</option>
                <option value="2">3 kuud</option>
                <option value="3">6 kuud</option>
                <option value="4">1 aasta</option>
            </select>
            <p>99.01 € + km</p>
            <button id="nextButton" disabled>EDASI ANDMEID SISESTAMA</button>
        `;

        var periodSelect = document.getElementById("periodSelect");
        var nextButton = document.getElementById("nextButton");

        periodSelect.addEventListener("change", function () {
            nextButton.disabled = !this.value;
        });

        nextButton.addEventListener("click", function () {
            window.location.href = "next-step.html";
        });

    }, 1000);
}
