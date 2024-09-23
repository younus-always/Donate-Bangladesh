function targetId(id) {
  return document.getElementById(id);
}

// Donated Buttons ...
targetId("donate-btn").addEventListener("click", function () {
  const donatBalance = parseFloat(targetId("donate-balance").innerText);
  const input = parseFloat(targetId("donate-field").value);
  const topBalance = parseFloat(targetId("top-balance").innerText);
  const totalBalance = topBalance - input;
  if (isNaN(input) || input <= 0) {
    alert("Input Your valid Amount");
    return;
  } else if (totalBalance <= 0) {
    alert(`You don't have enough money`);
  } else {
    const sumInput = donatBalance + input;
    targetId("donate-balance").innerHTML = sumInput.toFixed(2);
    targetId("top-balance").innerHTML = totalBalance.toFixed(2);
    targetId("donate-field").value = "";
  }

  const parentDiv = targetId("parent");
  const div = document.createElement("div");
  div.className = "p-6 rounded-lg border";
  div.innerHTML = `
    <h2 class="text-lg font-bold mb-2">${input} Taka is Donate for Flood at Noakhali, Bangladesh</h2>
    <p class="">Date: ${new Date()}</p>
    `;
  parentDiv.insertBefore(div, parentDiv.firstChild);
});

targetId("donate-btn2").addEventListener("click", function () {
  const donatBalance = parseFloat(targetId("donate-balance2").innerText);
  const input = parseFloat(targetId("donate-field2").value);
  const topBalance = parseFloat(targetId("top-balance").innerText);
  const totalBalance = topBalance - input;
  if (isNaN(input) || input <= 0) {
    alert("Input Your valid Amount");
    return;
  } else if (totalBalance <= 0) {
    alert(`You don't have enough money`);
  } else {
    const sumInput = donatBalance + input;
    targetId("donate-balance2").innerHTML = sumInput.toFixed(2);
    targetId("top-balance").innerHTML = totalBalance.toFixed(2);
    targetId("donate-field2").value = "";
  }

  const parentDiv = targetId("parent");
  const div = document.createElement("div");
  div.className = "p-6 rounded-lg border";
  div.innerHTML = `
    <h2 class="text-lg font-bold mb-2">${input} Taka is Donate for Flood Relief in Feni, Bangladesh</h2>
    <p class="">Date: ${new Date()}</p>
    `;
  parentDiv.insertBefore(div, parentDiv.firstChild);
});

targetId("donate-btn3").addEventListener("click", function () {
  const donatBalance = parseFloat(targetId("donate-balance3").innerText);
  const input = parseFloat(targetId("donate-field3").value);
  const topBalance = parseFloat(targetId("top-balance").innerText);
  const totalBalance = topBalance - input;
  if (isNaN(input) || input <= 0) {
    alert("Input Your valid Amount");
    return;
  } else if (totalBalance <= 0) {
    alert(`You don't have enough money`);
  } else {
    const sumInput = donatBalance + input;
    targetId("donate-balance3").innerHTML = sumInput.toFixed(2);
    targetId("top-balance").innerHTML = totalBalance.toFixed(2);
    targetId("donate-field3").value = "";
  }

  const parentDiv = targetId("parent");
  const div = document.createElement("div");
  div.className = "p-6 rounded-lg border";
  div.innerHTML = `
    <h2 class="text-lg font-bold mb-2">${input} Taka is Donate for Aid for Injured in the Quoata Movement</h2>
    <p class="">Date: ${new Date()}</p>
    `;
  parentDiv.insertBefore(div, parentDiv.firstChild);
});

// Input value error messeage...
targetId("donate-field").addEventListener("input", function (e) {
  const inputEvent = e.target.value;
  if (isNaN(inputEvent) || inputEvent <= 0) {
    targetId('error').classList.remove('hidden');
  }else {
     targetId('error').classList.add('hidden');
  }
});

targetId("donate-field2").addEventListener("input", function (e) {
  const inputEvent = e.target.value;
  if (isNaN(inputEvent) || inputEvent <= 0) {
    targetId('error-2').classList.remove('hidden');
  }else {
     targetId('error-2').classList.add('hidden');
  }
});

targetId("donate-field3").addEventListener("input", function (e) {
  const inputEvent = e.target.value;
  if (isNaN(inputEvent) || inputEvent <= 0) {
    targetId('error-3').classList.remove('hidden');
  }else {
     targetId('error-3').classList.add('hidden');
  }
});

// History Tab
targetId("history").addEventListener("click", function () {
  targetId("history").classList.add(
    "bg-lime-400",
    "border-lime-400",
    "hover:bg-lime-300"
  );
  targetId("history").classList.remove("border-gray-300", "hover:bg-gray-300");
  targetId("donation").classList.remove(
    "bg-lime-400",
    "border-lime-400",
    "hover:bg-lime-300"
  );
  targetId("donation").classList.add("border-gray-300", "hover:bg-gray-300");
  targetId("history-hide").classList.remove("hidden");
  targetId("donation-hide").classList.add("hidden");
  targetId("donation-hide2").classList.add("hidden");
  targetId("donation-hide3").classList.add("hidden");

  targetId("history-hide").classList.remove("hidden");
});

// Donation Tab
targetId("donation").addEventListener("click", function () {
  targetId("donation").classList.add("bg-lime-400", "border-lime-400");
  targetId("donation").classList.remove("border-gray-300", "hover:bg-gray-300");
  targetId("history").classList.add("border-gray-300", "hover:bg-gray-300");
  targetId("history").classList.remove(
    "border-lime-400",
    "bg-lime-400",
    "hover:bg-lime-300"
  );

  targetId("history-hide").classList.add("hidden");
  targetId("donation-hide").classList.remove("hidden");
  targetId("donation-hide2").classList.remove("hidden");
  targetId("donation-hide3").classList.remove("hidden");
});
