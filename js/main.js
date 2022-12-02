// SCRIPT FOR SWITCH MODE
const switchMode = document.querySelector("#switchMode");
const html = document.querySelector("html");
let isDarkMode = false;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  switchTheme();
}

function switchTheme() {
  if (isDarkMode) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

// BASIC SCRIPT
const countriesEl = document.querySelector("#countries");
const dropDown = document.querySelector("#dropDown");
const downMenu = document.querySelector("#downMenu");
const region = document.querySelectorAll(".region");
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
const search = document.querySelector("#search");

async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
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
        <img class="object-cover w-full h-full" src="${data.flags.png}" alt="flag">
    </div>
    <div class="p-6 bg-white dark:bg-[#2B3844] text-[#111517] dark:text-white">
        <h2 class="countryName font-extrabold text-[18px] leading-[26px] mb-4">${data.name.common}</h2>
        <p class="font-semibold text-[14px] leading-4 mb-2">Population: <span
            class="font-light">${data.population}</span></p>
        <p class="regionName font-semibold text-[14px] leading-4 mb-2">Region: <span
            class="font-light ">${data.region}</span></p>
        <p class="font-semibold text-[14px] leading-4 ">Capital: <span
            class="font-light">${data.capital}</span></p>
    </div>

    `;
  countriesEl.appendChild(country);
  country.onclick = function () {
    showCountryData(data);
  };
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

const countryModal = document.querySelector("#countryModal");
const closeModal = document.querySelector("#closeModal");

// closeModal.addEventListener("click", () => {
//   countryModal.classList.add("hidden");
// });

closeModal.onclick = function () {
  countryModal.classList.add("hidden");
  console.log("click");
};

function showCountryData(data) {
  countryModal.classList.remove("hidden");
  countryModal.innerHTML = `
    <div class="container">
        <div class="flex md:flex-row flex-col items-center justify-between md:pt-[200px] pt-[136px] pb-[60px] relative">
        <button id="closeModal"
        class="absolute font-nunito md:top-[80px] top-[40px] left-0 flex items-center justify-center w-[136px] h-[40px] rounded-md shadow-search-shadow font-light text-[16px] leading-[20px] text-[#111517] dark:text-white bg-white dark:bg-[#2B3844]">
        <i class="fa-solid fa-arrow-left-long mr-[10px] mt-[2px]"></i>Back</button>
                <div class="md:w-[560px] w-full md:h-[401px] h-auto md:mb-0 mb-11 rounded-md overflow-hidden">
                <img class="object-cover w-full h-full" src="${data.flags.svg}" alt="">
                </div>
                <div>
                <div class="flex md:flex-row flex-col md:items-center items-start md:mb-[60px]">
                    <div class="text-[#111517] dark:text-white md:mr-[141px] md:mb-0 mb-11">
                    <h2 class="font-extrabold text-[32px] leading-[44px] mb-[23px]">${data.name.common}</h2>
                    <p class="font-semibold text-[16px] leading-8">Native Name: <span class="font-light">België</span></p>
                    <p class="font-semibold text-[16px] leading-8">Population: <span class="font-light">11,319,511</span>
                    </p>
                    <p class="font-semibold text-[16px] leading-8">Region: <span class="font-light">Europe</span></p>
                    <p class="font-semibold text-[16px] leading-8">Sub Region: <span class="font-light">Western
                        Europe</span></p>
                    <p class="font-semibold text-[16px] leading-8">Capital: <span class="font-light">Brussels</span></p>
                    </div>
                    <div class="text-[#111517] dark:text-white md:mb-0 mb-11">
                    <p class="font-semibold text-[16px] leading-8">Top Level Domain: <span class="font-light">.be</span></p>
                    <p class="font-semibold text-[16px] leading-8">Currencies: <span class="font-light">Euro</span></p>
                    <p class="font-semibold text-[16px] leading-8">Languages: <span class="font-light">Dutch, French,
                        German</span></p>
                    </div>
                </div>
                <div class="flex md:flex-row flex-col md:items-center items-start text-[#111517] dark:text-white gap-x-[10px]">
                    <p class="font-semibold text-[16px] leading-6 md:mr-[5px] md:mb-0 mb-4">Border Countries:</p>
                    <div class="flex flex-wrap gap-[10px]">
                    <span
                        class="py-[5px] px-[27px] shadow-search-shadow bg-white dark:bg-[#2B3844] text-[14px] leading-[19px] rounded-md">France</span>
                    <span
                        class="py-[5px] px-[27px] shadow-search-shadow bg-white dark:bg-[#2B3844] text-[14px] leading-[19px] rounded-md">Germany</span>
                    <span
                        class="py-[5px] px-[27px] shadow-search-shadow bg-white dark:bg-[#2B3844] text-[14px] leading-[19px] rounded-md">Netherlands</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `;
}
