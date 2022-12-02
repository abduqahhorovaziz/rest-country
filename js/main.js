// SCRIPT FOR SWITCH MODE
// const switchMode = document.querySelector("#switchMode");
// const html = document.querySelector("html");
// let isDarkMode = false;

// function toggleTheme() {
//   isDarkMode = !isDarkMode;
//   switchTheme();
// }

// function switchTheme() {
//   if (isDarkMode) {
//     html.classList.add("dark");
//   } else {
//     html.classList.remove("dark");
//   }
// }

const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
};

const themeCheck = () => {
  if(userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    return;
  }
  sunIcon.classList.add("hidden")
}

const themeSwitch = () => {
  if(document.documentElement.classList.contains("dark")){
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle()
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
}

sunIcon.addEventListener("click", () => {
  themeSwitch();
})

moonIcon.addEventListener("click", () => {
  themeSwitch();
})

themeCheck()

// BASIC SCRIPT
const countriesEl = document.querySelector("#countries");
const dropDown = document.querySelector("#dropDown");
const downMenu = document.querySelector("#downMenu");
const region = document.querySelectorAll(".region");
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
const search = document.querySelector("#search");

async function getCountry() {
  const url = await fetch("https://restcountries.com/v2/all");
  const res = await url.json();
  res.forEach((element) => {
    showCountry(element);
  });
}
getCountry();

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `
    <div class="w-full h-[160px]">
        <img class="w-full h-full" src="${data.flags.png}" alt="flag">
    </div>
    <div class="p-6 bg-white dark:bg-[#2B3844] text-[#111517] dark:text-white">
        <h2 class="countryName font-extrabold text-[18px] leading-[26px] mb-4">${data.name}</h2>
        <p class="font-semibold text-[14px] leading-4 mb-2">Population: <span
            class="font-light">${data.population}</span></p>
        <p class="regionName font-semibold text-[14px] leading-4 mb-2">Region: <span
            class="font-light ">${data.region}</span></p>
        <p class="font-semibold text-[14px] leading-4 ">Capital: <span
            class="font-light">${data.capital}</span></p>
    </div>

    `;
  countriesEl.appendChild(country);
  country.addEventListener("click", () => {
    showCountryDetail(data);
  });
}

dropDown.addEventListener("click", () => {
  downMenu.classList.toggle("hidden");
});

region.forEach((element) => {
  element.addEventListener("click", () => {
    downMenu.classList.add("hidden");
    console.log(element);
    Array.from(regionName).forEach((elem) => {
      console.log(elem.innerText);
      if (
        elem.innerText.includes(element.innerText) ||
        element.innerText == "All"
      ) {
        elem.parentElement.parentElement.style.display = "block";
      } else {
        elem.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

search.addEventListener("input", () => {
  Array.from(countryName).forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      elem.parentElement.parentElement.style.display = "block";
    } else {
      elem.parentElement.parentElement.style.display = "none";
    }
  });
});

// closeModal.onclick = function () {
//   countryModal.classList.add("hidden");
//   console.log("click");
// };
const countryModal = document.querySelector("#countryModal");

function showCountryDetail(data) {
  countryModal.classList.toggle("hidden");
  countryModal.innerHTML = `
    <div class="container">
        <div class="flex md:flex-row flex-col items-center justify-between md:pt-[200px] pt-[136px] pb-[60px] relative overflow-auto">
        <button class="closeModal z-50 absolute font-nunito md:top-[80px] top-[40px] left-0 flex items-center justify-center w-[136px] h-[40px] rounded-md shadow-search-shadow font-light text-[16px] leading-[20px] text-[#111517] dark:text-white bg-white dark:bg-[#2B3844]">
        <i class="fa-solid fa-arrow-left-long mr-[10px] mt-[2px]"></i>Back</button>
                <div class="md:w-[560px] w-full md:h-[401px] h-auto md:mb-0 mb-11 rounded-md overflow-hidden">
                <img class="w-full h-full" src="${
                  data.flags.svg
                }" alt="">
                </div>
                <div>
                <div class="flex md:flex-row flex-col md:items-center items-start md:mb-[60px]">
                    <div class="text-[#111517] dark:text-white md:mr-[141px] md:mb-0 mb-11">
                    <h2 class="font-extrabold text-[32px] leading-[44px] mb-[23px]">${
                      data.name
                    }</h2>
                    <p class="font-semibold text-[16px] leading-8">Native Name: <span class="font-light">${
                      data.nativeName
                    }</span></p>
                    <p class="font-semibold text-[16px] leading-8">Population: <span class="font-light">${
                      data.population
                    }</span>
                    </p>
                    <p class="font-semibold text-[16px] leading-8">Region: <span class="font-light">${
                      data.region
                    }</span></p>
                    <p class="font-semibold text-[16px] leading-8">Sub Region: <span class="font-light">${
                      data.subregion
                    }</span></p>
                    <p class="font-semibold text-[16px] leading-8">Capital: <span class="font-light">${
                      data.capital
                    }</span></p>
                    </div>
                    <div class="text-[#111517] dark:text-white md:mb-0 mb-11">
                    <p class="font-semibold text-[16px] leading-8">Top Level Domain: <span class="font-light">${
                      data.topLevelDomain
                    }</span></p>
                    <p class="font-semibold text-[16px] leading-8">Currencies: <span class="font-light">${data.currencies.map(
                      (elem) => elem.name
                    )}</span></p>
                    <p class="font-semibold text-[16px] leading-8">Languages: <span class="font-light">${data.languages.map(
                      (elem) => elem.name
                    )}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `;

  const closeModal = countryModal.querySelector(".closeModal");

  closeModal.addEventListener("click", () => {
    countryModal.classList.toggle("hidden");
    console.log("hello");
  });
}
