const mobileNavBtn = document.querySelector('.mobile-nav__btn');
const mobileNavList = document.querySelector('.mobile-nav__list')
const cover = document.querySelector('#cover')
const provinceIconDown = document.querySelector('#provinceIconDown')
const jobCategoriesIconDown = document.querySelector('#jobCategoriesIconDown')
const homeBtn = document.querySelector('#home-header__btn')
const bodyElem = document.body
const mobileUserList = document.querySelector('.mobile-user__list')
const mobileMessageList = document.querySelector('.mobile-message__list')
const desktopMessageList = document.querySelector('.desktop-message__list')
const mobileUser = document.querySelector('.mobile-user')
const mobileMessage = document.querySelector('.mobile-message')
const desktopMessage = document.querySelector('.desktop-message')
const mobilUserSvg = document.querySelector('.mobile-user__svg');
const mobilMessageSvg = document.querySelector('.mobile-message__svg');
const desktopMessageSvg = document.querySelector('.desktop-message__svg');
const tooltips = document.querySelectorAll('.tool-tip');

let newOption = null

mobileNavBtn.addEventListener('click', event=> {
    let btn = event.target.closest('.mobile-nav__btn')
    if(btn){
        btn.classList.toggle('active')

        if (mobileNavList.style.maxHeight && mobileNavList.style.maxHeight !== "0px") {
          
            mobileNavList.style.maxHeight = "0px"; // بستن آکوردیون
            mobileNavList.classList.remove('visible')
            cover.classList.remove('cover--show')
        } else {
            mobileNavList.style.maxHeight = mobileNavList.scrollHeight + "px"; // باز کردن آکوردیون
            mobileNavList.classList.add('visible')
             cover.classList.add('cover--show')
        }
            }
})
cover.addEventListener('click', ()=> {
    cover.classList.remove('cover--show')
    mobileNavBtn.classList.remove('active')
    mobileNavList.style.maxHeight = "0px";
    mobileNavList.classList.remove('visible')
})
const iranProvinces = [
  { id: 1, name: "آذربایجان شرقی" },
  { id: 2, name: "آذربایجان غربی" },
  { id: 3, name: "اردبیل" },
  { id: 4, name: "اصفهان" },
  { id: 5, name: "البرز" },
  { id: 6, name: "ایلام" },
  { id: 7, name: "بوشهر" },
  { id: 8, name: "تهران" },
  { id: 9, name: "چهارمحال و بختیاری" },
  { id: 10, name: "خراسان جنوبی" },
  { id: 11, name: "خراسان رضوی" },
  { id: 12, name: "خراسان شمالی" },
  { id: 13, name: "خوزستان" },
  { id: 14, name: "زنجان" },
  { id: 15, name: "سمنان" },
  { id: 16, name: "سیستان و بلوچستان" },
  { id: 17, name: "فارس" },
  { id: 18, name: "قزوین" },
  { id: 19, name: "قم" },
  { id: 20, name: "کردستان" },
  { id: 21, name: "کرمان" },
  { id: 22, name: "کرمانشاه" },
  { id: 23, name: "کهگیلویه و بویراحمد" },
  { id: 24, name: "گلستان" },
  { id: 25, name: "گیلان" },
  { id: 26, name: "لرستان" },
  { id: 27, name: "مازندران" },
  { id: 28, name: "مرکزی" },
  { id: 29, name: "هرمزگان" },
  { id: 30, name: "همدان" },
  { id: 31, name: "یزد" }
];
const jobCategories = [
  { id: 'it', name: 'فناوری اطلاعات و نرم‌افزار' },
  { id: 'engineering', name: 'مهندسی' },
  { id: 'education', name: 'آموزش و تدریس' },
  { id: 'healthcare', name: 'پزشکی و سلامت' },
  { id: 'construction', name: 'ساختمان و عمران' },
  { id: 'marketing', name: 'فروش و بازاریابی' },
  { id: 'finance', name: 'مالی و حسابداری' },
  { id: 'legal', name: 'حقوقی' },
  { id: 'transportation', name: 'حمل و نقل' },
  { id: 'arts', name: 'هنر و طراحی' },
  { id: 'administration', name: 'اداری و دفتری' },
  { id: 'services', name: 'خدمات' },
  { id: 'hospitality', name: 'گردشگری و هتلداری' },
  { id: 'manufacturing', name: 'تولید و کارخانه' },
  { id: 'media', name: 'رسانه و ارتباطات' }
];
homeBtn.addEventListener('click',function(event){
  event.preventDefault()
  
})
document.addEventListener('DOMContentLoaded', function () {
  const provinceSelect = document.getElementById('provinceSelect');
  newOption = document.createElement('option');
    newOption.value = '';
    newOption.innerText = 'انتخاب استان';
    provinceSelect.appendChild(newOption);
  // پر کردن لیست استان‌ها
  iranProvinces.forEach(element => {
    newOption = document.createElement('option');
    newOption.value = element.id;
    newOption.innerText = element.name;
    provinceSelect.appendChild(newOption);
  });
  const choices1 = new Choices(provinceSelect, {
    searchEnabled: true,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
 
  });
  // ==========================job Categories Select=====================================
   const categorySelect = document.getElementById('categorySelect');
  newOption = document.createElement('option');
    newOption.value = '';
    newOption.innerText = 'همه دسته بندی ها';
    
    categorySelect.appendChild(newOption);
  // پر کردن لیست استان‌ها
  jobCategories.forEach(element => {
    newOption = document.createElement('option');
    newOption.value = element.id;
    newOption.innerText = element.name;
    categorySelect.appendChild(newOption);
  });
  const choices2 = new Choices(categorySelect, {
    searchEnabled: true,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
 
  });

});

provinceSelect.addEventListener('showDropdown', () => {
    provinceIconDown.style.transform = 'rotate(180deg)'
});

// رویداد زمانی که dropdown بسته میشه
provinceSelect.addEventListener('hideDropdown', () => {
  provinceIconDown.style.transform = 'rotate(0)'
});
categorySelect.addEventListener('showDropdown', () => {
    jobCategoriesIconDown.style.transform = 'rotate(180deg)'
});

// رویداد زمانی که dropdown بسته میشه
categorySelect.addEventListener('hideDropdown', () => {
  jobCategoriesIconDown.style.transform = 'rotate(0)'
});


mobilUserSvg.addEventListener('click', event => {
    cover.classList.remove('cover--show')
    mobileNavBtn.classList.remove('active')
    mobileNavList.style.maxHeight = "0px";

  let svgTag = event.target.closest('.mobile-user__svg');
  if (svgTag) {
    console.log(svgTag)
    svgTag.parentElement.lastElementChild.classList.toggle('mobile-user__list--open');
  }
});
mobilMessageSvg.addEventListener('click', event => {
  cover.classList.remove('cover--show')
    mobileNavBtn.classList.remove('active')
    mobileNavList.style.maxHeight = "0px";
  let svgTag = event.target.closest('.mobile-message__svg');
  if (svgTag) {
    svgTag.parentElement.lastElementChild.classList.toggle('mobile-message__list--open');
  }
});
desktopMessageSvg.addEventListener('click', event => {
  let svgTag = event.target.closest('.desktop-message__svg');
  if (svgTag) {
    svgTag.parentElement.lastElementChild.classList.toggle('desktop-message__list--open');
  }
});

document.addEventListener('click', event => {
  if(!event.target.closest('.mobile-user__svg') && !event.target.closest('.mobile-user__list')){
    if(mobileUserList.classList.contains('mobile-user__list--open')){
      mobileUserList.classList.remove('mobile-user__list--open')
    }
  }
  if(!event.target.closest('.mobile-message__svg') && !event.target.closest('.mobile-message__list')){
    if(mobileMessageList.classList.contains('mobile-message__list--open')){
      mobileMessageList.classList.remove('mobile-message__list--open')
    }
  }
  if(!event.target.closest('.desktop-message__svg') && !event.target.closest('.desktop-message__list')){
    if(desktopMessageList.classList.contains('desktop-message__list--open')){
      desktopMessageList.classList.remove('desktop-message__list--open')
    }
  }
})
// =======================SWIPER BRAND==============================

var swiper = new Swiper(".SwiperBrand", {
  // فعال‌سازی دکمه‌های ناوبری
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // فعال‌سازی اسلاید خودکار
  autoplay: {
    delay: 3000, // هر ۳ ثانیه
    disableOnInteraction: false, // حتی اگر کاربر کلیک کند، متوقف نشود
    pauseOnMouseEnter: true // این خط مهم است!
  },

  // تعداد اسلایدهای نمایشی بسته به سایز صفحه
  breakpoints: {
    // موبایل
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    380:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576:{
      slidesPerView: 4,
      spaceBetween: 10,
    },
    767:{
      slidesPerView: 5,
      spaceBetween: 10,
    },
    992:{
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1200:{
      slidesPerView: 7,
      spaceBetween: 10,
    },
    1200:{
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },

  // اسلاید به صورت لوپ (بی‌نهایت) ادامه داشته باشد
  loop: true,
});



var swiper = new Swiper(".mobile-lastOpening", {
      slidesPerView: "auto",
    grid: {
      rows: 2,
      fill: "row", // ردیفی پر بشه
    },
    spaceBetween: 20,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });

tooltips.forEach(function(tooltip){
  if((tooltip.firstElementChild.textContent == '') && (tooltip.lastElementChild.textContent == '')){
    tooltip.style.display = 'none'
  }
})
// =======================COMPANY SLIDER==============================
var swiper = new Swiper(".companySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 'auto', // برای سایزهای کوچیک
  spaceBetween: 20,
  breakpoints: {
    1024: { // سایز lg به بالا
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: { // سایز lg به بالا
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1536: { // سایز lg به بالا
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


let mobileCategoryBtnToggle = document.querySelectorAll('.mobile-category__btn-toggle')
mobileCategoryBtnToggle = Array.from(mobileCategoryBtnToggle)
mobileCategoryBtnToggle.forEach(btn => {
  btn.addEventListener('click', event => {
    let targetBtn = event.target.closest('.mobile-category__btn-toggle')
    if(targetBtn){
      targetBtn.classList.toggle('active')
      if (targetBtn.parentElement.parentElement.style.maxHeight && targetBtn.parentElement.parentElement.style.maxHeight !== "28px") {
            targetBtn.parentElement.parentElement.style.maxHeight = "28px"
        } else {
            mobileCategoryBtnToggle.forEach(btn => {
              if(btn != targetBtn){
                btn.parentElement.parentElement.style.maxHeight = "28px"
                btn.classList.remove('active')
              }
              
            })
            targetBtn.parentElement.parentElement.style.maxHeight = targetBtn.parentElement.parentElement.scrollHeight + "px"; // باز کردن آکوردیون
        }
    }
  })
})
let mobileCategoryMoreLink = document.querySelectorAll('.mobile-category__more-link')
mobileCategoryMoreLink = Array.from(mobileCategoryMoreLink)
mobileCategoryMoreLink.forEach(link => {
  link.addEventListener('click', event=> {
    let targetLink = event.target.closest('.mobile-category__more-link')
    if(targetLink){
      targetLink.classList.toggle('active')
      let ulTag = targetLink.parentElement.querySelector('.mobile-category__list')
      if (ulTag.style.maxHeight && ulTag.style.maxHeight !== "318px") {
            ulTag.style.maxHeight = "318px"
            targetLink.firstElementChild.textContent = 'موارد بیشتر'
        } else {
            ulTag.style.maxHeight = ulTag.scrollHeight + "px";
            targetLink.firstElementChild.textContent = 'موارد کمتر' // باز کردن آکوردیون
             ulTag.parentElement.style.maxHeight = ulTag.parentElement.scrollHeight + "px"; // باز کردن آکوردیون
             ulTag.parentElement.parentElement.style.maxHeight = ulTag.parentElement.parentElement.scrollHeight + "px"; // باز کردن آکوردیون
        }
    }
  })
})

const desktopLinkMore = document.querySelector('.desktop-link-more')
const desktopCategoryWrapper = document.querySelector('.desktop-category-wrapper')

desktopLinkMore.addEventListener('click', ()=> {
  desktopLinkMore.classList.toggle('active')
  if (desktopCategoryWrapper.style.maxHeight && desktopCategoryWrapper.style.maxHeight !== "404px") {
      desktopCategoryWrapper.style.maxHeight = "404px"
      desktopLinkMore.firstElementChild.textContent = 'موارد بیشتر'
  } else {
      desktopCategoryWrapper.style.maxHeight = desktopCategoryWrapper.scrollHeight + "px";
      desktopLinkMore.firstElementChild.textContent = 'موارد کمتر' // باز کردن آکوردیون
  }
})



var swiper = new Swiper('.blugSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1536: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }
});



let mFooterDropdownBtns = document.querySelectorAll('.mFooter-dropdown__btn')
mFooterDropdownBtns = Array.from(mFooterDropdownBtns)
mFooterDropdownBtns.forEach(btn => {
  btn.addEventListener('click', event=> {
    let targetBtn = event.target.closest('.mFooter-dropdown__btn')
    if(targetBtn){
      mFooterDropdownBtns.forEach(btn => {
        if(btn != targetBtn){
          btn.classList.remove('active')
          btn.parentElement.lastElementChild.style.maxHeight = "0px"
        }
      })
      targetBtn.classList.toggle('active')
      let ulTarget = targetBtn.parentElement.lastElementChild
      if (ulTarget.style.maxHeight && ulTarget.style.maxHeight !== "0px") {
        ulTarget.style.maxHeight = "0px"
        
      }else {
          ulTarget.style.maxHeight = ulTarget.scrollHeight + "px";
          
      }
    }
  })
})
