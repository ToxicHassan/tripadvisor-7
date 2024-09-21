const $ = document;

// Nav Bar

const navBtns = $.querySelectorAll(".nav-btn");
const dropdownWrapper = $.querySelectorAll('.dropdown-wrapper')
const dropdownItem = $.querySelectorAll('.dropdown-item')

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropdownWrapper.forEach(wrapper => {
      wrapper.style.display = 'none'
    })
    
    btn.lastElementChild.style.display = 'block'

  });
});
dropdownItem.forEach(item => {
  item.addEventListener('click', () => {
    dropdownWrapper.forEach(wrapper => {
      wrapper.style.display = 'none'
    })
  })
})

// Nav Menu

const hamburgerBtn = $.querySelector(".hamburger-btn");
const navMenu = $.querySelector(".menu");
const navCloseMenuBtn = $.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", () => {
  navMenu.style.right = "0";
});
navCloseMenuBtn.addEventListener("click", () => {
  navMenu.style.right = "-29rem";
});

// Search Bar
const categoriesBtnWrapper = $.querySelectorAll(".categories-btn-wrapper");
const searchInput = $.querySelector("#search-input");
const searchBox = $.querySelector(".search-box");
const searchBoxBtn5 = $.querySelector(".search-box-btn-5");
const heading = $.querySelector("h1");

let btn5IsClicked = false;

let searchInputBtnsObj = [
  {
    id: "categories-btn-1",
    placeHolder:
      "مکان هایی برای رفتن، کارهایی که می‌توانید انجام دهید، هتل ها...",
    heading: "کجا؟",
  },
  { id: "categories-btn-2", placeHolder: "نام هتل یا مسیر", heading: "یه جای عالی بمون" },
  {
    id: "categories-btn-3",
    placeHolder: "جاذبه، فعالیت یا مسیر",
    heading: "یه کار سرگرم کننده انجام بده",
  },
  { id: "categories-btn-4", placeHolder: "رستوران یا مسیر", heading: "مکان هایی برای غذا خوردن پیدا کنید" },
  { id: "categories-btn-5", placeHolder: "", heading: "بهترین پرواز را پیدا کنید" },
  { id: "categories-btn-6", placeHolder: "مسیر", heading: "مکان های اجاره ای را کاوش کنید" },
];

categoriesBtnWrapper.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn5IsClicked = false;
    heading.textContent = searchBox.style.display = "flex";
    searchBoxBtn5.style.display = "none";

    let btnElemObj = searchInputBtnsObj.find((btnElem) => {
      return btnElem.id == btn.id;
    });
    
    searchInput.setAttribute("placeholder", btnElemObj.placeHolder);
    heading.textContent = btnElemObj.heading;

    if (btn.id == "categories-btn-5") {
      btn5IsClicked = true;

      searchBox.style.display = "none";

      if (window.innerWidth <= 1136) {
        searchBoxBtn5.style.display = "grid";
      } else {
        searchBoxBtn5.style.display = "flex";
      }
    }
  });
  window.addEventListener("resize", () => {
    if (btn5IsClicked && window.innerWidth <= 1136) {
      searchBoxBtn5.style.display = "grid";
    } else if (btn5IsClicked && !window.innerWidth <= 1136) {
      searchBoxBtn5.style.display = "flex";
    } else if (!btn5IsClicked) {
      searchBoxBtn5.style.display = "none";
    }
  });
});

const foodDeliveryMainImg = $.querySelector(".food-delivery-img");
const foodDeliveryResponsiveImg = $.querySelector(
  ".food-delivery-responsive-img img"
);

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    foodDeliveryMainImg.style.display = "none";
    foodDeliveryResponsiveImg.style.display = "block";
  } else {
    foodDeliveryMainImg.style.display = "block";
    foodDeliveryResponsiveImg.style.display = "none";
  }
});

// Slider Scripts

const sliderItem = $.querySelector(".slide");
const itemWidth = sliderItem.offsetWidth;

function dirHandler(sliderClass, dir) {
  let slider = $.querySelector(sliderClass);
  console.log(slider);
  if (dir == "prev") {
    slider.scrollBy({ left: itemWidth * 4.12, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: -itemWidth * 4.12, behavior: "smooth" });
  }
}

const exploreArrow = $.querySelectorAll(".explore-arrow");

exploreArrow.forEach((arrow) => {
  arrow.style.display = "none";
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1136) {
      arrow.style.display = "none";
    } else {
      arrow.style.display = "flex";
    }
  });
});

const adSectionImg = $.querySelector(".ad-section-img");
window.addEventListener("resize", () => {
  if (window.innerWidth <= 576) {
    adSectionImg.src = "imgs/Ads/ad1-img3.jpg";
  } else {
    adSectionImg.src = "imgs/Ads/ad1-img2.jpg";
  }
});
/////////////////////////

const footerRegionCashBtn = $.querySelector(".footer-region-cash-btn");
const footerRegionCountryBtn = $.querySelector(".footer-region-country-btn");
const arrowUp1 = $.querySelector(".up-arrow1");
const arrowUp2 = $.querySelector(".up-arrow2");
const arrowDown1 = $.querySelector(".down-arrow1");
const arrowDown2 = $.querySelector(".down-arrow2");
const footerRegionDropdownCash = $.querySelector(
  ".footer-region-dropdown-cash"
);
const footerRegionDropdownCountry = $.querySelector(
  ".footer-region-dropdown-country"
);

const footerRegionCashObj = {
  btn: footerRegionCashBtn,
  arrowUp: arrowUp1,
  arrowDown: arrowDown1,
  isClicked: false,
  dropdown: footerRegionDropdownCash,
};

const footerRegionCountryObj = {
  btn: footerRegionCountryBtn,
  arrowUp: arrowUp2,
  arrowDown: arrowDown2,
  isClicked: false,
  dropdown: footerRegionDropdownCountry,
};

footerBtnHandler(footerRegionCashObj);
footerBtnHandler(footerRegionCountryObj);

function footerBtnHandler(btnObj) {
  btnObj.btn.addEventListener("click", () => {
    if (!btnObj.isClicked) {
      btnObj.arrowUp.style.display = "none";
      btnObj.arrowDown.style.display = "block";
      btnObj.dropdown.style.display = "block";
    } else {
      btnObj.arrowUp.style.display = "block";
      btnObj.arrowDown.style.display = "none";
      btnObj.dropdown.style.display = "none";
    }
    btnObj.isClicked = !btnObj.isClicked;
  });
}

/////////////////////////////
const footerLastPartText = $.querySelector(".footer-last-part-text");
const moreBtn = $.querySelector("#more-btn");

moreBtn.addEventListener("click", () => {
  moreBtn.remove();
  footerLastPartText.insertAdjacentHTML(
    "afterend",
    `
    <p class="footer-last-part-text">
      Tripadvisor LLC هیچ تضمینی برای در دسترس بودن قیمت های اعلام شده در سایت ها و برنامه های ما نمی دهد. قیمت‌های فهرست‌شده ممکن است نیاز به اقامت با مدت خاصی داشته باشند یا دارای تاریخ خاموشی، شرایط تحصیلی یا سایر محدودیت‌های قابل اجرا باشند. Tripadvisor LLC مسئولیتی در قبال محتوای وب‌سایت‌های خارجی که متعلق به Tripadvisor یا اداره نمی‌شوند ندارد. قیمت‌های شاخص هتل که در صفحات «کاوش» ما نمایش داده می‌شوند، تخمین‌هایی هستند که از داده‌های قیمت‌گذاری تاریخی استخراج شده‌اند.
    </p>
    <p class="footer-last-part-text">
      Tripadvisor LLC یک آژانس رزرو یا اپراتور تور نیست. هنگامی که با یکی از شرکای ما رزرو می کنید، لطفاً مطمئن شوید که سایت آنها را برای افشای کامل همه هزینه های قابل اعمال بررسی کنید.
    </p>
    `
  );
});
