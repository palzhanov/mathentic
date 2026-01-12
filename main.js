const sections = [
  {
    id: "interview",
    title: "Interview Problems",
    summary: "Fast, clean solutions for common whiteboard-style questions.",
    problems: [
      {
        statement: "The Emperor’s pepper was stolen; those who steal pepper always lie. The press secretary says he knows who stole it. Is he guilty?",
        tags: ["logic", "paradox"],
        videoUrl: "#"
      },
      {
        statement: "Two equal glasses: one with coffee, one with milk. You may pour any amount back and forth. Can you make the amount of milk in the first glass exceed the coffee?",
        tags: ["mixing", "ratios"],
        videoUrl: "#"
      },
      {
        statement: "Drink half a coffee, refill that amount with milk; drink a third, refill with milk; drink a sixth, refill with milk; then drink the rest. Did you drink more milk or more coffee?",
        tags: ["probability", "mixing"],
        videoUrl: "#"
      },
      {
        statement: "Among 21 coins (10 genuine, 11 counterfeit; counterfeit is 1 gram lighter), one coin is chosen. With one weighing on a digital scale, decide if it is counterfeit.",
        tags: ["weighing", "coins"],
        videoUrl: "#"
      },
      {
        statement: "How to identify the two heaviest stones among 64 stones of different weights?",
        tags: ["selection", "weighing"],
        videoUrl: "#"
      },
      {
        statement: "Given four spheres of distinct masses 101 g, 102 g, 103 g, 105 g and a digital scale, determine each mass using only two weighings.",
        tags: ["weighing", "logic"],
        videoUrl: "#"
      }
    ]
  },
  {
    id: "riddles",
    title: "Riddles and Brain-Teasers",
    summary: "Puzzles that sharpen intuition and probability instincts.",
    problems: [
      {
        statement: "Decide whether to switch doors in the Monty Hall setup and explain the probability.",
        tags: ["probability", "intuition"],
        videoUrl: "https://www.youtube.com/watch?v=4Lb-6rxZxx0"
      },
      {
        statement: "Move four people across a bridge with one torch in the minimum total time.",
        tags: ["search", "greedy"],
        videoUrl: "https://www.youtube.com/watch?v=7yDmGnA8Hw0"
      },
      {
        statement: "Use the shared clues to deduce Cheryl's exact birthday.",
        tags: ["logic", "number theory"],
        videoUrl: "https://www.youtube.com/watch?v=Ep3OkZzL9dc"
      }
    ]
  },
  {
    id: "contest",
    title: "Contest Math",
    summary: "Higher-octane problems for Olympiad and contest prep.",
    problems: [
      {
        statement: "For all $n \\in \\mathbb{N}$, $f(n) = g(n)$ where $f(n) = 1 - \\tfrac12 + \\tfrac13 - \\cdots + \\tfrac{1}{2n+1} - \\tfrac{1}{2n}$ and $g(n) = \\tfrac{1}{n+1} + \\cdots + \\tfrac{1}{2n}$.",
        tags: ["series", "harmonic"],
        videoUrl: "https://youtu.be/f1qNVrSRaDI"
      },
      {
        statement: "Find a closed form for $a_n = \\sqrt{\\,2 + \\sqrt{\\,2 + \\cdots + \\sqrt{\\,2 + \\sqrt{2}}\\,}}$ with $n$ nested radicals.",
        tags: ["radicals"],
        videoUrl: "https://youtu.be/s0dGqaoKXXY"
      },
      {
        statement: "If $\\alpha + \\tfrac{1}{\\alpha} \\in \\mathbb{Z}$, prove $\\alpha^n + \\tfrac{1}{\\alpha^n} \\in \\mathbb{Z}$ for all $n \\in \\mathbb{N}$.",
        tags: ["induction"],
        videoUrl: "https://youtu.be/0SbsZbYjOgs"
      },
      {
        statement: "Prove $1 < \\tfrac{1}{n+1} + \\tfrac{1}{n+2} + \\cdots + \\tfrac{1}{3n+1} < 2$.",
        tags: ["inequality", "series"],
        videoUrl: "https://youtu.be/rfLyi8VTIP4"
      },
      {
        statement: "Show $(n+1)(n+2)\\cdots(2n) = 2^n \\cdot 1 \\cdot 3 \\cdot 5 \\cdots (2n-1)$ for all $n \\in \\mathbb{N}$.",
        tags: ["induction"],
        videoUrl: "https://youtu.be/pLPjwhGO4RM"
      },
      {
        statement: "If $z + \\tfrac{1}{z} = 2\\cos \\alpha$, then $z^n + \\tfrac{1}{z^n} = 2\\cos(n\\alpha)$ for all $n \\in \\mathbb{N}$.",
        tags: ["induction", "trig"],
        videoUrl: "https://youtu.be/mgzE199gJh8"
      },
      {
        statement: "Given $2n+1$ points on the unit circle on the same side of some diameter, prove $\\lvert\\overrightarrow{OP_1}+\\cdots+\\overrightarrow{OP_{2n+1}}\\rvert \\ge 1$.",
        tags: ["induction", "vectors"],
        videoUrl: "https://youtu.be/KrEmWEuqzK8"
      },
      {
        statement: "All numbers of the form 1007, 10017, 10117, … are divisible by 53.",
        tags: ["number theory", "divisibility"],
        videoUrl: "https://youtu.be/vXiofCpPTzc"
      },
      {
        statement: "All numbers of the form 12008, 120308, 1203308, … are divisible by 19.",
        tags: ["number theory", "divisibility"],
        videoUrl: "#"
      },
      {
        statement: "Given $2n$ points in space and $n^2 + 1$ drawn segments between them, show there exists a triangle formed by drawn segments.",
        tags: ["graph theory", "pigeonhole"],
        videoUrl: "https://youtu.be/alK1sML8XJ8"
      },
      {
        statement: "n identical cars on a circular track share just enough gas for one lap total. Show some car can complete a lap by collecting gas from others en route.",
        tags: ["invariants", "greedy"],
        videoUrl: "#"
      },
      {
        statement: "Every road is one-way; every pair of cities has exactly one direct road. Show there is a city reachable from any other with at most one intermediate city.",
        tags: ["graph theory", "tournaments"],
        videoUrl: "#"
      },
      {
        statement: "Show by induction that $f(n) = \\sum_{k=0}^{n} \\binom{n+k}{k} \\tfrac{1}{2^k} = 2^n$.",
        tags: ["induction", "binomial"],
        videoUrl: "#"
      },
      {
        statement: "For any natural $N$, prove $\\sqrt{\\,2 \\sqrt{\\,3 \\sqrt{\\,4 \\cdots \\sqrt{(N-1)\\sqrt{N}}\\,}}} < 3$.",
        tags: ["inequality", "radicals"],
        videoUrl: "https://youtu.be/8SMtp9vv8sQ"
      },
      {
        statement: "If $a, b, q = \\tfrac{a^2 + b^2}{ab + 1}$ are integers $\\ge 0$, then $q = \\gcd(ab)^2$ (IMO 1988). Prove by induction on $ab$.",
        tags: ["number theory", "IMO"],
        videoUrl: "#"
      },
      {
        statement: "In each cell of the 5x5 board there is a beetle. At some point, all the beetles crawl onto adjacent (horizontal or vertical) cells. Will this necessarily leave an empty cell?",
        tags: ["logic", "coloring"],
        videoUrl: "https://youtu.be/O3P7YViJt_Q"
      },
      {
        statement: "Tiling 10x10 board by tetrominoes",
        tags: ["logic", "coloring"],
        videoUrl: "https://youtu.be/O3P7YViJt_Q"
      },
      {
        statement: "We build an exponential tower $ \\sqrt{2}^{\\sqrt{2}^{\\sqrt{2}^{\\,\\cdot^{\\,\\cdot^{\\,\\cdot}}}}} $ by defining $a_0 = 1, a_{n+1} = (\\sqrt{2})^{\\,a_n},  n \\in \\mathbb{N}_0.$ Show that the sequence $(a_n)$ is monotonically increasing and bounded above by $2$.",
        tags: ["series"],
        videoUrl: "https://youtu.be/t7SO6YiG5HM"
      }
    ]
  },
  {
    id: "calculus",
    title: "Calculus",
    summary: "Limits, derivatives, and integrals for quick practice.",
    problems: [
      {
        statement: "Placeholder calculus problem. Add your own calculus prompts here.",
        tags: ["calculus"],
        videoUrl: "#"
      }
    ]
  },
  {
    id: "geometry",
    title: "Geometry",
    summary: "Euclidean and analytic geometry problems.",
    problems: [
      {
        statement: "Placeholder geometry problem. Add your own geometry prompts here.",
        tags: ["geometry"],
        videoUrl: "#"
      }
    ]
  }
];

const catalog = document.getElementById("catalog");
const chipsContainer = document.getElementById("filter-chips");
const filterBar = document.querySelector(".filter-bar");
const filterToggle = document.getElementById("filter-toggle");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.querySelector(".nav-overlay");
const navClose = document.querySelector(".nav-close");
const selectedTags = new Set();
let tagsVisible = true;
const mode = (document.body.dataset.mode || "sections").trim();
const allowedSections = (document.body.dataset.allowed || "all")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const videoIcon = `
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 7.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9ZM9.5 8.75 16 12l-6.5 3.25v-6.5Z"/>
  </svg>
`;

function createTag(content, extraClass = "") {
  const span = document.createElement("span");
  span.className = `tag ${extraClass}`.trim();
  span.textContent = content;
  return span;
}

function matchesTags(problemTags = []) {
  if (!selectedTags.size) return true;
  return [...selectedTags].every((tag) => problemTags.includes(tag));
}

function createCard(problem, number, sectionTitle) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.animationDelay = `${number * 18}ms`;

  const body = document.createElement("div");
  body.className = "card-body";

  const metaLine = document.createElement("div");
  metaLine.className = "meta-line";

  const sectionTag = document.createElement("span");
  sectionTag.className = "section-tag";
  sectionTag.textContent = sectionTitle;
  metaLine.appendChild(sectionTag);

  (problem.tags || []).forEach((tag) => {
    metaLine.appendChild(createTag(tag));
  });

  body.appendChild(metaLine);

  const statement = document.createElement("p");
  statement.className = "statement";
  statement.innerHTML = problem.statement || problem.focus || "";
  body.appendChild(statement);

  card.appendChild(body);

  const link = document.createElement("a");
  link.className = "video-link";
  link.href = problem.videoUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.innerHTML = `${videoIcon} Watch video solution`;
  card.appendChild(link);

  return card;
}

function createSection(section, filteredProblems, nextNumber) {
  const wrapper = document.createElement("section");
  wrapper.className = "problem-section";
  wrapper.id = section.id;

  const header = document.createElement("div");
  header.className = "section-header";

  const h2 = document.createElement("h2");
  h2.textContent = section.title;

  const summary = document.createElement("p");
  summary.textContent = section.summary;

  header.append(h2, summary);
  wrapper.appendChild(header);

  const cards = document.createElement("div");
  cards.className = "cards";

  if (filteredProblems.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No problems in this section with the selected tags.";
    cards.appendChild(empty);
  } else {
    filteredProblems.forEach((problem) => {
      cards.appendChild(createCard(problem, nextNumber(), section.title));
    });
  }

  wrapper.appendChild(cards);
  return wrapper;
}

function visibleSections() {
  if (allowedSections.includes("all")) return sections;
  return sections.filter((section) => allowedSections.includes(section.id));
}

function renderCatalog() {
  catalog.innerHTML = "";
  let globalIndex = 1;
  const nextNumber = () => globalIndex++;

  visibleSections().forEach((section) => {
    const filtered = section.problems.filter((problem) => matchesTags(problem.tags));
    catalog.appendChild(createSection(section, filtered, nextNumber));
  });

  if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
    window.MathJax.typesetPromise();
  }
}

function collectTags() {
  const tags = new Set();
  visibleSections().forEach((section) => {
    section.problems.forEach((problem) => {
      (problem.tags || []).forEach((tag) => tags.add(tag));
    });
  });
  return [...tags].sort((a, b) => a.localeCompare(b));
}

function renderChips() {
  const allTags = collectTags();
  chipsContainer.innerHTML = "";
  allTags.forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${selectedTags.has(tag) ? "active" : ""}`.trim();
    button.textContent = tag;
    button.addEventListener("click", () => {
      if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
      } else {
        selectedTags.add(tag);
      }
      renderChips();
      renderCatalog();
    });
    chipsContainer.appendChild(button);
  });
}

function setTagVisibility(show) {
  tagsVisible = show;
  if (tagsVisible) {
    filterBar.classList.remove("collapsed");
    filterToggle.textContent = "Hide tags";
  } else {
    filterBar.classList.add("collapsed");
    filterToggle.textContent = "Show tags";
  }
}

function renderSummary() {
  if (!catalog) return;
  const map = {
    interview: { href: "interview.html" },
    riddles: { href: "riddles.html" },
    contest: { href: "contest.html" }
  };
  const list = document.createElement("div");
  list.className = "topic-list";

  visibleSections().forEach((section) => {
    const card = document.createElement("article");
    card.className = "topic-card";

    const info = document.createElement("div");
    info.className = "topic-info";

    const title = document.createElement("h3");
    title.textContent = section.title;
    info.appendChild(title);

    const summary = document.createElement("p");
    summary.textContent = section.summary;
    info.appendChild(summary);

    const meta = document.createElement("div");
    meta.className = "topic-meta";
    const count = document.createElement("span");
    count.className = "topic-count";
    count.textContent = `${section.problems.length} problems`;
    meta.appendChild(count);

    const link = document.createElement("a");
    link.className = "pill outline small";
    link.href = map[section.id]?.href || "#";
    link.textContent = "Open";
    meta.appendChild(link);

    card.append(info, meta);
    list.appendChild(card);
  });

  catalog.innerHTML = "";
  catalog.appendChild(list);
}

filterToggle?.addEventListener("click", () => {
  setTagVisibility(!tagsVisible);
});

navToggle?.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

navOverlay?.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
});

navClose?.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
});

if (mode === "summary") {
  renderSummary();
} else {
  renderChips();
  renderCatalog();
  setTagVisibility(true);
}
