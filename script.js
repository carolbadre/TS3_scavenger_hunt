// Google Apps Script URL (from your deployment)
const scriptURL = 'https://script.google.com/macros/s/AKfycbzN7gfz_dcA9TB6lFnOPROpoNxdye7QW1E9XOCn_EbCnxGcArSNEtsS3R7dMjhZ59bd/exec';

document.getElementById("start-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    if (name) {
        document.getElementById("name-section").style.display = "none";
        document.getElementById("questions-section").style.display = "block";
        document.getElementById("greeting").textContent = `Good luck, ${name}!`;
    } else {
        alert("Please enter your name to start!");
    }
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const answers = Array.from(document.querySelectorAll(".answer")).map(input => input.value.trim());

    if (answers.some(answer => answer === "")) {
        alert("Please answer all questions.");
        return;
    }

    // Send data to Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({ name: name, answers: answers }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("result").textContent = `Thank you for completing the scavenger hunt, ${name}!`;
            document.getElementById("result").classList.remove("hidden");
        } else {
            alert("There was an issue submitting your answers. Please try again.");
        }
    })
    .catch(error => console.error('Error:', error));
});
