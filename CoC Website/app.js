// =============================================================================
// app.js - Clash of Cards - UI Logic
// =============================================================================
// Depends on: cards.js (must be loaded first)
// =============================================================================

// -----------------------------------------------------------------------------
// Build a card's inner HTML from its data object
// -----------------------------------------------------------------------------
function buildCardContent(card) {
  if (card.image) {
    return `<img src="${card.image}" alt="${card.name}">`;
  }

  // Helper: only render a row if the value exists and isn't falsy
  const row = (label, value) =>
    value !== undefined && value !== null && value !== ""
      ? `<p><strong>${label}:</strong> ${value}</p>`
      : "";

  return `
    ${row("Type", card.type)}
    ${row("Subtype", card.subtype)}
    ${row("Archetype", card.archetype)}
    ${row("HP", card.hp)}
    ${row("ATK", card.atk)}
    ${row("DEF", card.def)}
    ${row("DEX", card.dex)}
    ${row("ENG", card.eng)}
    ${row("Passives", card.passives)}
    ${row("Ability", card.ability)}
    ${row("Active", card.active)}
    ${row("Extra", card.extra)}
  `;
}

// -----------------------------------------------------------------------------
// Render a list of card objects into #results
// -----------------------------------------------------------------------------
function displayResults(cardList) {
  const container = document.getElementById("results");

  if (cardList.length === 0) {
    container.innerHTML = `<p class="no-results">No cards found. Try a different search or filter.</p>`;
    return;
  }

  container.innerHTML = cardList
    .map(
      (card) => `
        <div class="card" onclick="openModal(this)">
          <h2>${card.name}</h2>
          ${buildCardContent(card)}
        </div>
      `,
    )
    .join("");
}

// -----------------------------------------------------------------------------
// Filter cards based on search input and checkboxes, then re-render
// -----------------------------------------------------------------------------
function filterCards() {
  const query = document.getElementById("search").value.toLowerCase().trim();
  const showTypes = {
    Character: document.getElementById("character").checked,
    Item: document.getElementById("item").checked,
    Skillset: document.getElementById("skillset").checked,
    Event: document.getElementById("event").checked,
    Art: document.getElementById("art").checked,
  };

  const matches = cards.filter((card) => {
    const matchesQuery = card.name.toLowerCase().includes(query);
    const matchesType = showTypes[card.type] === true;
    return matchesQuery && matchesType;
  });

  displayResults(matches);
}

// -----------------------------------------------------------------------------
// Event listeners - search input + all checkboxes
// -----------------------------------------------------------------------------
document.getElementById("search").addEventListener("input", filterCards);

["character", "item", "skillset", "event", "art"].forEach((id) => {
  document.getElementById(id).addEventListener("change", filterCards);
});

// -----------------------------------------------------------------------------
// Modal
// -----------------------------------------------------------------------------
function openModal(cardElement) {
  const modal = document.getElementById("card-modal");
  const wrapper = document.getElementById("modal-content-wrapper");

  const clonedCard = cardElement.cloneNode(true);
  clonedCard.onclick = null; // remove the click-to-open handler on the clone

  wrapper.innerHTML = "";
  wrapper.appendChild(clonedCard);

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("card-modal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal on Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// -----------------------------------------------------------------------------
// Initial render
// -----------------------------------------------------------------------------
filterCards();
