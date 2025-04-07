const projects = [
  {
    id: 1,
    name: "Stats Preview Card Component",
    description:
      "This challenge is to build out this card component and get it looking as close to the design as possible.",
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS"],
    image: "/stats-preview-card-component-main/design/desktop-preview.jpg",
    link: "/stats-preview-card-component-main/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/stats-preview-card-component-main",
  },
  {
    id: 2,
    name: "Recipe Page",
    description:
      "This challenge is build out this recipe page and get it looking as close to the design as possible.",
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS"],
    image: "/recipe-page-main/preview.jpg",
    link: "/recipe-page-main/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/recipe-page-main",
  },
  {
    id: 3,
    name: "Rest Countries API With Color Theme Switcher",
    description: `This challenge is to integrate with the "REST Countries API" and to pull country data and display it like in the designs.`,
    difficulty: "4",
    level: "ADVANCED",
    tags: ["HTML", "CSS", "JS", "API"],
    image:
      "/rest-countries-api-with-color-theme-switcher-master/design/desktop-preview.jpg",
    link: "/rest-countries-api-with-color-theme-switcher-master/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/rest-countries-api-with-color-theme-switcher-master",
  },
  {
    id: 4,
    name: "Testimonials Grid Section",
    description: `This challenge is to build out this testimonials grid section and get it looking as close to the design as possible.`,
    difficulty: "2",
    level: "JUNIOR",
    tags: ["HTML", "CSS"],
    image: "/testimonials-grid-section-main/design/desktop-preview.jpg",
    link: "/testimonials-grid-section-main/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/testimonials-grid-section-main",
  },
  {
    id: 5,
    name: "Interactive Rating Component",
    description: `This challenge is to build out this interactive rating component and get it looking as close to the design as possible.`,
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS", "JS"],
    image: "/interactive-rating-component-main/design/desktop-preview.jpg",
    link: "/interactive-rating-component-main/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/interactive-rating-component-main",
  },
  {
    id: 6,
    name: "FAQ Accordion",
    description: `This challenge is to build out this FAQ accordion and get it looking as close to the design as possible.`,
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS", "JS"],
    image: "/faq-accordion-main/design/desktop-preview.jpg",
    link: "/faq-accordion-main/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/faq-accordion-main",
  },
  {
    id: 7,
    name: "Order Summary Component",
    description: `Your challenge is to build out this order summary card component and get it looking as close to the design as possible.`,
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS"],
    image:
      "/order-summary-component-main/Client/order-summary-component-main/design/desktop-preview.jpg",
    link: "/order-summary-component-main/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/order-summary-component-main",
  },
  {
    id: 8,
    name: "Product Preview Card Component",
    description: `Your challenge is to build out this product preview card component and get it looking as close to the design as possible.`,
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS"],
    image:
      "/product-preview-card-component-main/Client/product-preview-card-component-main/design/desktop-preview.jpg",
    link: "/product-preview-card-component-main/index.html",
    badge: "DONE",
    github:
      "https://github.com/shalev396/Frontend-Mentor-projects/tree/main/product-preview-card-component-main",
  },
];

// Define level color mapping
const levelColors = {
  1: { color: "#6abecd", class: "level-newbie" },
  2: { color: "#aad742", class: "level-junior" },
  3: { color: "#f1b604", class: "level-intermediate" },
  4: { color: "#f48925", class: "level-advanced" },
  5: { color: "#ed2c49", class: "level-guru" },
};

function renderProjects() {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = ""; // Clear any existing content

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.className = "project-card";

    // Create project badge
    const projectBadge = document.createElement("div");
    projectBadge.className = "project-badge";
    projectBadge.textContent = project.badge;

    // Create image container and image
    const imageContainer = document.createElement("div");
    imageContainer.className = "project-image-container";

    const image = document.createElement("img");
    image.className = "project-image";
    image.src = project.image;
    image.alt = project.name;
    imageContainer.appendChild(image);

    // Project details
    const details = document.createElement("div");
    details.className = "project-details";

    // Title and link
    const title = document.createElement("a");
    title.className = "project-title";
    title.textContent = project.name;
    title.href = project.link;
    title.target = "_blank";

    // Tags
    const tags = document.createElement("div");
    tags.className = "project-tags";
    project.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = `project-tag tag-${tag.toLowerCase()}`;
      tagElement.textContent = tag;
      tags.appendChild(tagElement);
    });

    // Description
    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = project.description;

    // Difficulty container
    const difficultyContainer = document.createElement("div");
    difficultyContainer.className = "difficulty-container";

    // Difficulty badge with level
    const difficulty = document.createElement("div");
    difficulty.className = "project-difficulty";

    // Badge with number and level as a single component
    const difficultyBadge = document.createElement("div");
    difficultyBadge.className = "difficulty-badge";

    const badge = document.createElement("span");
    badge.className = `badge ${levelColors[project.difficulty].class}`;
    badge.textContent = project.difficulty;

    const levelText = document.createElement("span");
    levelText.className = `level-text ${levelColors[project.difficulty].class}`;
    levelText.textContent = project.level;

    difficultyBadge.appendChild(badge);
    difficultyBadge.appendChild(levelText);
    difficulty.appendChild(difficultyBadge);

    // GitHub button
    const githubLink = document.createElement("a");
    githubLink.className = "github-btn";
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';

    // Add difficulty badge and GitHub button to container
    difficultyContainer.appendChild(difficulty);
    difficultyContainer.appendChild(githubLink);

    // Append everything to the card in the right order
    li.appendChild(imageContainer);
    li.appendChild(projectBadge);
    details.appendChild(title);
    details.appendChild(tags);
    details.appendChild(description);
    details.appendChild(difficultyContainer);
    li.appendChild(details);

    projectList.appendChild(li);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
});
