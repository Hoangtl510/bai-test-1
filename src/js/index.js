var listNavbar = [
  {
    itemNavBar: 'Home'
  },
  {
    itemNavBar: 'About Application'
  },
  {
    itemNavBar: 'Support'
  },
  {
    itemNavBar: 'Blog'
  },
]
var listBanner = [
  {
    titleBanner: 'WP + iOS + Android',
    contentBanner: 'Based on ReactJS and React Native, HsBlog not only is a WP theme, but also let you to build your iOS + Android App Native App',
    beforeColor: 'bf-pink'
  },
  {
    titleBanner: 'Single page application',
    contentBanner: 'SPA improves your Customer Experience. When navigating from a page to another page, HsBlog WILL NOT REFRESH Browser like other themes.',
    beforeColor: 'bf-green'
  },
  {
    titleBanner: 'Drag & Drop Page Builder',
    contentBanner: 'We have created our own Page Builder for HsBlog. It allows you to build either Web Page or App Home page.',
    beforeColor: 'bf-purple',
  },
  {
    titleBanner: 'Elite Support',
    contentBanner: 'help.highspeedblog.com is our Help Center where you can find useful information on Documentation page and You can ask for us anything there.',
    beforeColor: 'bf-blue'
  },
]
var listFeatures = [
  {
    iconFeatures: 'fa-regular fa-star',
    titleFeatures: 'Favorite Posts',
    contentFeatures: 'Its a useful feature for your customers: They can SAVE an useful article and easily reach it in future under Favorite Store.',
  },
  {
    iconFeatures: 'fa-regular fa-eye',
    titleFeatures: 'Recently Viewed',
    contentFeatures: 'Every time visits an article, HSBlog will remember it. Customers can easily reach it next time under Recently Reviewed area.'
  },
  {
    iconFeatures: 'fa-regular fa-bars',
    titleFeatures: 'Awesome Mega Menu',
    contentFeatures: 'A useful feature helps you can add more information to your menu but still keep it simple and clean'
  },
  {
    iconFeatures: 'fa-regular fa-option',
    titleFeatures: 'Theme Options',
    contentFeatures: "Here you can customize Header Style, Footer Style, Heading Tags's Font, Social Networks, MailChimp, Youtube and much more ...."
  },
  {
    iconFeatures: 'fa-regular fa-diagram-venn',
    titleFeatures: 'Social Login',
    contentFeatures: 'In addition Default WordPress Login, Customer can easily signin / signup to your site with their Facebook and Apple.'
  },
  {
    iconFeatures: 'fa-brands fa-snapchat',
    titleFeatures: 'Google reCaptcha V3',
    contentFeatures: 'Protects your site website forms from spam entries while letting real people pass through with ease'
  },
]
var listPopular = [
  {
    img: '10',
    contentTitle: 'Alii autem quibus ego assentior',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '11',
    contentTitle: 'Sunt autem nusquam hoc epicurus in…',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '12',
    contentTitle: 'How To Write Better Advertising Copy',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '13',
    contentTitle: 'Omne animal simul atque in',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '14',
    contentTitle: 'Torquatos nostros quos tu tam',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '15',
    contentTitle: 'Promote With Postcards',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '16',
    contentTitle: 'Probabo, inquit, sic agam, ut ita ruant…',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '17',
    contentTitle: 'Epicurus in armatum hostem impetum',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
  {
    img: '18',
    contentTitle: 'Low Cost Advertising',
    contentDate: 'November 9, 2019  •  03 Comments'
  },
]
var isAppearMenuMobile = false
let textNavBar = ""
let textBanner = ""
let textFeatures = ""
let textPopular = ""

const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

listNavbar.forEach(element => {
  textNavBar += `<li class="navbar__menu-item">
                    <div class="item__title">${element.itemNavBar}</div>
                </li>`
});
document.getElementById("navbar__menu").innerHTML = textNavBar

listBanner.forEach(element => {
  textBanner += ` <div class="banner__wrapper--item col-xl-3 col-sm-6 box box-15px">
                    <div class="banner__title title-box ${element.beforeColor}">
                      <span>${element.titleBanner}</span>
                    </div>
                    <div class="banner__content subtitle-box">
                      ${element.contentBanner}
                    </div>
                  </div>`
});

document.getElementById("row-banner").innerHTML = textBanner

listFeatures.forEach(element => {
  textFeatures += `<div class="col-xs-12 col-sm-6 col-xl-4">
                    <div class="features__item box box-30px">
                      <div class="features__item-icon">
                        <i class="${element.iconFeatures}"></i>
                      </div>
                      <div class="features__item-content">
                        <div class="content__title">
                          ${element.titleFeatures}
                        </div>
                        <div class="content__subtitle">
                          ${element.contentFeatures}
                        </div>
                      </div>
                    </div>
                  </div>`
})
document.getElementById("row-features").innerHTML = textFeatures

listPopular.forEach(element => {
  textPopular += ` <div class="col-xs-12 col-sm-6 col-xl-4">
                    <div class="popular__content-item">
                      <div class="item__img">
                        <img src="./assets/image/${element.img}.png" alt="image">
                        <div class="tag">
                          <div class="tag__before">Design</div>
                          <div class="tag__after"></div>
                        </div>
                      </div>
                      <div class="item__content box-15px">
                        <div class="item__content-title">${element.contentTitle}</div>
                        <div class="item__content-date">${element.contentDate}</div>
                      </div>
                    </div>
                  </div>`
})
document.getElementById("row-popular").innerHTML = textPopular

function appearMenuMobile() {
  isAppearMenuMobile = !isAppearMenuMobile
  var menuMobile = document.getElementById('navbar')
  var iconMenuMobile = document.getElementById('icon__menu-mobile')
  if (isAppearMenuMobile) {
    menuMobile.classList.add('menu-mobile')
    iconMenuMobile.classList.remove('fa-bars-staggered')
    iconMenuMobile.classList.add('fa-arrow-right')
  }
  else {
    menuMobile.classList.remove('menu-mobile')
    iconMenuMobile.classList.remove('fa-arrow-right')
    iconMenuMobile.classList.add('fa-bars-staggered')
  }
}