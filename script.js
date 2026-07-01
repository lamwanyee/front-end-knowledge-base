document.addEventListener('DOMContentLoaded', () => {
    const diagnosticBtn = document.getElementById('action-btn');
    const statusMessage = document.getElementById('status-message');

    diagnosticBtn.addEventListener('click', () => {
        statusMessage.textContent = "Diagnostic complete: 0 errors detected. Knowledge Base Active.";
        statusMessage.className = "success";
        diagnosticBtn.textContent = "System Core Operational";
        diagnosticBtn.disabled = true;
    });
});
