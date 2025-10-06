console.log("Content script loaded.");

var extLogs = [];

setInterval(
    function timeoutHandler(params) {
        const elements = document.querySelectorAll('.markdown:not(.processed):not(details .markdown)').forEach(makeDisclosable);
        
    },
    5000
)


function makeDisclosable(element) {
  extLogs.push(element);
  
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