// alert("this is one of the sites");

const initialLocation = window.location.href;
const modified = initialLocation.split("search?q=")[1].split("&")[0];
console.log(modified.split("+"));
if (modified.split("+").includes("-ai")) {
  console.log("this is already an -ai search.");
} else {
  const newQuery = modified + "+-ai";
  const newHref = initialLocation.split(modified).join(newQuery);
  console.log(initialLocation, modified, newQuery, newHref);
  window.location.href = newHref;
}

const form = document.getElementById("tsf");
console.log(form);

form.addEventListener("submit", (e) => {}), { capture: true };

// window.location.href = newHref;
