// ----------- Load sidebar -----------
const sidebarPlaceholder = document.getElementById('sidebar-nav-placeholder');
fetch('./assets/sidebar-nav.html')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load sidebar');
    return response.text();
  })
  .then(html => {
    sidebarPlaceholder.innerHTML = html;
  })
  .catch(err => console.error(err));

// ----------- Load pagination -----------
const paginationPlaceholder = document.getElementById('pagination-placeholder');
fetch('./assets/pagination.html')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load pagination');
    return response.text();
  })
  .then(html => {
    paginationPlaceholder.innerHTML = html;
  })
  .catch(err => console.error(err));

// ----------- Dark mode toggle & Back-to-top button -----------
const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const topBtn = document.getElementById("top-btn");

modeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    modeIcon.classList.remove('bi-sun-fill');
    modeIcon.classList.add('bi-moon-fill');
  } else {
    modeIcon.classList.remove('bi-moon-fill');
    modeIcon.classList.add('bi-sun-fill');
  }
});

// Show back-to-top button when scrolling
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
    topBtn.style.opacity = "0.7";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top on click
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
topBtn.addEventListener("mouseenter", () => { topBtn.style.opacity = "1"; });
topBtn.addEventListener("mouseleave", () => { topBtn.style.opacity = "0.7"; });
