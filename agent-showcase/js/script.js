document.addEventListener('DOMContentLoaded', () => {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(tabId) {
        // Remove active class from all tabs and content
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);

        if (selectedButton && selectedContent) {
            selectedButton.classList.add('active');
            selectedContent.classList.add('active');
        }

        // Save active tab to session storage
        sessionStorage.setItem('activeTab', tabId);
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Check for active tab in session storage and restore it
    const activeTab = sessionStorage.getItem('activeTab');
    if (activeTab) {
        switchTab(activeTab);
    }

    // Handle hash changes for direct linking to tabs
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            switchTab(hash);
        }
    });

    // Check for hash in URL on page load
    if (window.location.hash) {
        const hash = window.location.hash.slice(1);
        if (document.getElementById(hash)) {
            switchTab(hash);
        }
    }
});