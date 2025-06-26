'use strict';

// Toggle any element's active class
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// ===== SIDEBAR TOGGLE =====
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// ===== TESTIMONIAL MODAL =====
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// ===== PROJECT FILTERING =====
const select = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-select-value]");
const selectItems = document.querySelectorAll("[data-select-item]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const projects = document.querySelectorAll("[data-filter-item]");

// Show/hide dropdown
select.addEventListener("click", () => {
  elementToggleFunc(select);
});

// Dropdown filter functionality
selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-category");
    selectValue.textContent = item.textContent;
    select.classList.remove("active");
    filterProjects(category);
  });
});

// Button filter functionality
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    filterProjects(category);
  });
});

// Core filtering function
function filterProjects(category) {
  projects.forEach(project => {
    const projectCategory = project.getAttribute("data-category");
    project.style.display = (category === "all" || projectCategory === category) ? "block" : "none";
  });
}

// ===== PAGE NAVIGATION =====
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const targetPage = link.innerHTML.toLowerCase().trim(); // trims whitespace

    pages.forEach((page, i) => {
      const match = page.dataset.page === targetPage;
      page.classList.toggle("active", match);
      navigationLinks[i].classList.toggle("active", match);
    });

    window.scrollTo(0, 0);
  });
});
