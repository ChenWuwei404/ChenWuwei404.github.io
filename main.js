//@ts-check

/**@type {Array<String>} */
let categories = [];

(function() {
  articlesData.forEach(article => {
    article.category.forEach(tag => {
      if (!categories.includes(tag)) {
        categories.push(tag);
      }
    })
  });
})();

// --- 状态 ---
let articles = [...articlesData];
/**@type {String | null} */
let currentCategory = null;
let searchQuery = "";

// --- DOM 引用 ---
const grid = document.getElementById("articlesGrid");
/**@type {HTMLInputElement} */
// @ts-ignore
const searchInput = document.getElementById("searchInput");
const filterContainer = document.getElementById("categoryFilters");

function getFilteredArticles() {
  return articles.filter(article => {
    if (currentCategory !== null) {
      if (!article.category.includes(currentCategory)) return false;
    }
    if (searchQuery !== "") {
      if (!(
        article.title.includes(searchQuery) ||
        article.excerpt.includes(searchQuery)
      )) return false;
    }
    return true;
  });
}

function renderArticles() {
  grid?.replaceChildren(
    ...getFilteredArticles()
      .map(createArticleCard)
  );
}

function renderTags() {
  let tags = categories.map(category => {
    let tag = document.createElement('div');
    tag.className = "filter-btn";
    tag.role = "button";
    tag.textContent = category;
    tag.dataset.category = category;
    tag.addEventListener("click", function(e) {
      if (tag.dataset.category == currentCategory) {
        currentCategory = null;
        tag.dataset.active = "false";
      } else {
        // @ts-ignore
        currentCategory = tag.dataset.category;
        tags.forEach(tag => tag.dataset.active = "false");
        tag.dataset.active = "true";
      }
      renderArticles();
    })
    return tag;
  })
  filterContainer?.append(...tags);
}

function initPageSearch() {
  searchInput.addEventListener('input', (e) => {
    // if (e.isComposing) return;
    searchQuery = searchInput.value;
    renderArticles();
  });
}

function init() {
  renderArticles();
  renderTags();
  initPageSearch();
}

document.addEventListener("DOMContentLoaded", init);
