// function to get value of elements
function getValue(id) {
  const value = parseInt(document.getElementById(id).innerText);
  return value;
}

// function to get element
function getElement(id) {
  return document.getElementById(id);
}

let callHistoryData = [];

// count feature

const heart = document.getElementsByClassName("heart-icon");
for (let icon of heart) {
  icon.addEventListener("click", function () {
    let count = getValue("count") + 1;
    const newCount = document.getElementById("count");
    newCount.innerText = count;
  });
}

// call button features
const call = document.getElementsByClassName("call-btn");
for (let btn of call) {
  btn.addEventListener("click", function (e) {
    // check for sufficient coins
    let coin = getValue("coin");
    if (coin < 20) {
      alert(`emergency-service.netlify.app says
 You don't have sufficient coins! Need at least 20 coins to make a call.`);
      return;
    }
    // make alert for click
    let serviceName =
      e.target.parentNode.parentNode.querySelector(".service-name").innerText;
    let serviceNumber =
      e.target.parentNode.parentNode.querySelector(".number").innerText;
    alert(`emergency-service.netlify.app says
 Calling ${serviceName} ${serviceNumber}...`);
    // reduce coin
    coin = coin - 20;
    const newCoin = document.getElementById("coin");
    newCoin.innerText = coin;
    // add data in the call history section
    const info = {
      title: serviceName,
      number: serviceNumber,
      date: new Date().toLocaleTimeString(),
    };
    callHistoryData.push(info);

    const callHistory = getElement("call-history");
    callHistory.innerHTML = "";

    for (let info of callHistoryData) {
      const div = document.createElement("div");
      div.innerHTML = `
    <div
            class="bg-[#fafafa] rounded-lg p-3 mb-3 flex items-center justify-between"
          >
            <div>
              <h3 class=" font-semibold">${info.title}</h3>
              <p class="text-[#5c5c5c]">${info.number}</p>
            </div>
            <div class="text-sm">${info.date}</div>
          </div>
    `;
      callHistory.appendChild(div);
    }
  });
}

// clear button features

document.getElementById("clear-btn").addEventListener("click", function () {
  getElement("call-history").style.display = "none";
});

// copy button features

const copy = document.getElementsByClassName("copy-btn");
for (let btn of copy) {
  // make alert for click
  btn.addEventListener("click", function (e) {
    let serviceNumber =
      e.target.parentNode.parentNode.querySelector(".number").innerText;
    alert(`emergency-service.netlify.app says
The number is copied: ${serviceNumber}`);
    // increase copy count
    const copyCount = getValue("copy") + 1;
    const newCopyCount = getElement("copy");
    newCopyCount.innerText = copyCount;
    // copy the number to the clipboard
    navigator.clipboard.writeText(serviceNumber);
  });
}
