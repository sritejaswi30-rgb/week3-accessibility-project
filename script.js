const searchForm = document.querySelector('#article-search');
const searchInput = document.querySelector('#search-input');
const clearButton = document.querySelector('#clear-search');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const articleCards = [...document.querySelectorAll('.article-card')];
const resultsStatus = document.querySelector('#results-status');
const emptyState = document.querySelector('#empty-state');
let activeCategory = 'all';

function updateArticles() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  articleCards.forEach((card) => {
    const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
    const matchesSearch = !query || card.textContent.toLocaleLowerCase().includes(query);
    const isVisible = matchesCategory && matchesSearch;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  resultsStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'article' : 'articles'} found.`;
  emptyState.hidden = visibleCount !== 0;
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateArticles();
});

searchInput.addEventListener('input', updateArticles);

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  activeCategory = 'all';
  filterButtons.forEach((button) => {
    const selected = button.dataset.category === 'all';
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  updateArticles();
  searchInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('is-selected', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    updateArticles();
  });
});

// Inline disclosure keeps the article text in the normal reading and tab order.
document.querySelectorAll('.read-link').forEach((button) => {
  button.addEventListener('click', () => {
    const article = document.getElementById(button.dataset.article);
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    article.hidden = isExpanded;
    button.setAttribute('aria-expanded', String(!isExpanded));
    button.innerHTML = isExpanded ? 'Read article <span aria-hidden="true">↗</span>' : 'Close article <span aria-hidden="true">↑</span>';
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

// Escape closes the open disclosure and returns focus to its controlling button.
document.addEventListener('keydown', (event) => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (event.key === 'Escape' && isOpen) {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    // Keep keyboard focus on a visible control after hiding the navigation.
    menuToggle.focus();
  }
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
updateArticles();
