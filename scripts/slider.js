const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        const activeContent = document.querySelector('.tab-content.active');
        const newContent = document.getElementById(tabId);

        if (activeContent === newContent) return;

        // Update active button
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Fade out current
        if (activeContent) {
            activeContent.classList.remove('active');
        }

        // Fade in new
        newContent.classList.add('active');
    });
});
