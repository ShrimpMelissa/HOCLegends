// Remove the <script> tags as they are not needed in a .js file
function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
    
    // Close sidebar after selecting a tab on mobile devices
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.add('active');
    });

    document.getElementById('close-sidebar').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
    });

    // Load dark mode preference from localStorage
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Save dark mode preference to localStorage
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Prevent scrolling on the body when the sidebar is open
    document.getElementById('sidebar').addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Allow scrolling within the sidebar content
    document.getElementById('sidebar-content').addEventListener('touchmove', function(e) {
        e.stopPropagation();
    }, { passive: true });
});

function toggleDetails(heroId) {
    var details = document.getElementById(heroId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}