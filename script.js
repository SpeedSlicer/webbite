function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

function toggleSettingsPanel() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('visible');
}

function toggleChangelogPanel() {
    const panel = document.getElementById('changelogPanel');
    panel.classList.toggle('visible');
}