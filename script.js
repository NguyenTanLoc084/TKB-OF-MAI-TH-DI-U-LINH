document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("schedule-table");

    table.addEventListener("click", (e) => {
        const cell = e.target;

        // Check if clicked element is a table cell
        if (cell.tagName === "TD") {
            const originalText = cell.innerText;

            // Create an input element for editing
            const input = document.createElement("input");
            input.type = "text";
            input.value = originalText;
            input.style.width = "100%";

            // Replace cell content with the input
            cell.innerHTML = "";
            cell.appendChild(input);
            input.focus();

            // When the user leaves the input field
            input.addEventListener("blur", () => {
                cell.innerText = input.value.trim() || originalText; // Update cell or revert on empty
            });

            // Allow pressing "Enter" to save changes
            input.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    input.blur(); // Trigger blur event to save changes
                }
            });
        }
    });
});
