document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("workshopForm");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const department = document.getElementById("department").value;

        if (!name || !email || !department) {
            statusMessage.style.color = "#dc2626";
            statusMessage.textContent = "Please fill in all fields before submitting.";
            return;
        }

        statusMessage.style.color = "#15803d";
        statusMessage.textContent = `Registration confirmed for ${name} (${department}). Event pass sent to ${email}.`;
        form.reset();
    });
});
