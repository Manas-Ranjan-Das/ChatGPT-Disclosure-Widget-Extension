console.log("Content script loaded.");

setInterval(
    function timeoutHandler(params) {
        document.querySelectorAll(".markdown:not(.processed)").forEach(makeDisclosable);
    },
    5000
)


function makeDisclosable(element) {
  if (!element) return;

  const summaryText = ( element.innerText.trim().slice(0, 49) || "[empty]" ) + ' . . .';

  const details = document.createElement("details");
  const summary = document.createElement("summary");

  details.open = true;
  summary.textContent = summaryText;

  element.replaceWith(details);
  details.appendChild(summary);
  details.appendChild(element);
  element.classList.add("processed");
  return details;
}