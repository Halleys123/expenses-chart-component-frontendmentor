const data = [
  {
    myBalance: 7850,
    interest: 5,
    total: 8250,
    currentDay: 1,
    graph: [32.6, 40.6, 12.7, 86.5, 65.0, 34.09, 32.6],
  },
];

const balance = document.querySelector(".balanceMoney");
const interest = document.querySelector(".rate");
const total = document.querySelector(".finalTextAmmount");
const graph = document.querySelectorAll(".days");
const days = document.querySelectorAll(".dayName");
const dayData = document.querySelectorAll(".dataDay");

balance.innerHTML = "$" + data[0].myBalance;
interest.innerHTML = `+${data[0].interest}%`;
total.innerHTML = `$${data[0].total}`;

graph.forEach((item, index) => {
  item.style.height = `${data[0].graph[index]}%`;
  if (item.classList.contains(`day${data[0].currentDay}`)) {
    item.classList.add("currentDay");
  }
  console.log(item);
  item.addEventListener("mouseover", () => {
    console.log("hover");
    if (item.classList.contains("currentDay")) {
      item.classList.add("hoverCurrent");
    } else {
      item.classList.add("hoverNCurrent");
    }
    dayData[index].classList.add("dataDayHover");
  });
  item.addEventListener("mouseout", () => {
    console.log("hover");
    if (item.classList.contains("currentDay")) {
      item.classList.remove("hoverCurrent");
    } else {
      item.classList.remove("hoverNCurrent");
    }
    dayData[index].classList.remove("dataDayHover");
  });
});
dayData.forEach((item, index) => {
  item.innerHTML = `$ ${data[0].graph[index]}`;
});
