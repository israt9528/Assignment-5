// function to get value of elements
function getValue(id) {
  const value = parseInt(document.getElementById(id).innerText);
  return value;
}

// count feature
const heart = document.getElementsByClassName("heart-icon");
for (let icon of heart) {
  icon.addEventListener("click", function () {
    count = getValue("count") + 1;
    const newCount = document.getElementById("count");
    newCount.innerText = count;
  });
}
