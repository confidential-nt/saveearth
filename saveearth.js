const time = document.getElementById("remainTime");
const thirtySec = 30;
const saveEarth = document.getElementById("saveBtn");

function savingEarth() {
  clearInterval(timer);
  alert("지구를 구했다!");
}

function getTimeDifference() {
  const currentTime = new Date().getSeconds();
  if (currentTime <= 30) {
    const result = thirtySec - currentTime;
    time.innerText = `${result}`;
    time.style.color = "red";

    if (result == 0) {
      alert("지구멸망!");
    }
  } else {
    time.style.color = "black";
    time.innerText = "wait";
  }
}

let timer = setInterval(getTimeDifference, 1000);

saveEarth.addEventListener("click", savingEarth);
