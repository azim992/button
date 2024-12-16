function showTab(tabId) {
    // Hide all sections
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected section
    document.getElementById(tabId).style.display = 'block';
}