document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("../data/domains.json");
  const data = await response.json();

  // Populates domain and taboola select boxes
  const populateSelectBox = (selectId, domains) => {
    const select = document.getElementById(selectId);

    domains.forEach((domain) => {
      const option = document.createElement("option");

      option.value = domain.value;
      option.textContent = domain.name;
      select.appendChild(option);
    });
  };

  // Populate both DOMAIN and TABOOLA field
  populateSelectBox("domainSelect", data.domains);
  populateSelectBox("taboolaSelect", data.domains);

  // Load saved parameters
  const loadSavedParameters = () => {
    const domainSelect = localStorage.getItem("domainSelect");
    const taboolaSelect = localStorage.getItem("taboolaSelect");

    document.getElementById("domainSelect").value = domainSelect || "";
    document.getElementById("taboolaSelect").value = taboolaSelect || "";
  };

  loadSavedParameters();

  // Handle the apply button click
  const applyButton = document.getElementById("applyButton");

  applyButton.addEventListener("click", async () => {
    const domainEnabled = document.getElementById("domainEnabled").checked;
    const domainSelect = document.getElementById("domainSelect").value;

    const taboolaEnabled = document.getElementById("taboolaEnabled").checked;
    const taboolaSelect = document.getElementById("taboolaSelect").value;

    const googleConsoleEnabled =
      document.getElementById("googleConsole").checked;

    // Save parameters to localStorage
    localStorage.setItem("domainSelect", domainSelect);
    localStorage.setItem("taboolaSelect", taboolaSelect);

    // Get the current tab
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    let baseUrl = tab.url.split("?")[0];
    let parameters = [];

    // Check which parameters to add to the URL
    if (domainEnabled) parameters.push(`domain=${domainSelect}`);

    if (taboolaEnabled) parameters.push(`taboola_sim_domain=${taboolaSelect}`);

    if (googleConsoleEnabled) parameters.push(`google_console=1`);

    // Builds the final URL
    let finalUrl = baseUrl;
    if (parameters.length > 0) {
      finalUrl += "?" + parameters.join("&");
    }

    // Update the tab URL
    chrome.tabs.update(tab.id, { url: finalUrl });
  });
});
