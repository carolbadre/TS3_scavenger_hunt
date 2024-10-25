document.getElementById("start-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    if (name.trim()) {
        document.getElementById("name-section").style.display = "none";
        document.getElementById("questions-section").style.display = "block";
    } else {
        alert("Please enter your name to start!");
    }
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const answers = Array.from(document.querySelectorAll(".answer")).map(input => input.value.trim());
    if (answers.some(answer => answer === "")) {
        alert("Please answer all questions.");
    } else {
        document.getElementById("result").textContent = `Thank you for completing the scavenger hunt, ${document.getElementById("name").value}!`;
        document.getElementById("result").classList.remove("hidden");
    }
});
