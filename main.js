const slideShowData = [
  {
    id: 1,
    img: "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/1:1/w_741,h_741,c_limit/best-face-oil.png",
    name: "Dash UI8",
    story: "Call of duty 1",
    viewers: 28.1,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/5e/c4/66/5ec4667b9339dce586a28bb0722e5b7d.jpg",
    name: "Unity Game",
    story: "Call of duty 2",
    viewers: 28.1,
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/2680/8698/products/f9c4d08e98024d7775a2101f39b1b0a21d208dc0_700x700.jpg?v=1599946491",
    name: "Daniel Bro",
    story: "Call of duty 3",
    viewers: 28.1,
  },
  {
    id: 4,
    img: "https://www.artmajeur.com/medias/hd/d/e/dekartist/artwork/11693186_face-50x50-cm-acrylic-on-canvas-2015.jpg",
    name: "Amazing",
    story: "Call of duty 4",
    viewers: 28.1,
  },
  {
    id: 5,
    img: "https://tophinhanhdep.com/wp-content/uploads/2021/10/Lion-Face-Wallpapers.jpg",
    name: "King Kong",
    story: "Call of duty 5",
    viewers: 28.1,
  },
  {
    id: 6,
    img: "https://i.pinimg.com/736x/5e/c4/66/5ec4667b9339dce586a28bb0722e5b7d.jpg",
    name: "Support",
    story: "Call of duty 6",
    viewers: 28.1,
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/2680/8698/products/f9c4d08e98024d7775a2101f39b1b0a21d208dc0_700x700.jpg?v=1599946491",
    name: "Damage Atk",
    story: "Call of duty 7",
    viewers: 28.1,
  },
  {
    id: 8,
    img: "https://www.artmajeur.com/medias/hd/d/e/dekartist/artwork/11693186_face-50x50-cm-acrylic-on-canvas-2015.jpg",
    name: "Luccian",
    story: "Call of duty 8",
    viewers: 28.1,
  },
  {
    id: 9,
    img: "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/1:1/w_741,h_741,c_limit/best-face-oil.png",
    name: "Luxury",
    story: "Call of duty 9",
    viewers: 28.1,
  },
  {
    id: 10,
    img: "https://tophinhanhdep.com/wp-content/uploads/2021/10/Lion-Face-Wallpapers.jpg",
    name: "Iam Yasuo  ",
    story: "Call of duty 10",
    viewers: 28.1,
  },
];

// let sideBar = document.querySelector(".sidebar");
// let header = document.querySelector(".content-header");
// let contentBody = document.querySelector(".content-body");
// let topText = document.querySelector(".top-trending-text");
// let recommendText = document.querySelector(".post-recommendation-text");
// let trendingText = document.querySelector(".post-trending-tags-text");
// let toggleSideBar = document.querySelector(".toggle-sidebar");
const root = document.querySelector(".root");
const logoBurger = document.getElementById("btn-burger");
const channelsList = document.querySelector(".channels-list");
const topTrendingWeeks = document.querySelector(".trending-weeks");
const choiceWrapperEl = document.querySelector(".list-choice-objects ");
// const darkMode = document.querySelector('.toggle-mode')


// const darkModeSetting = () => {
//   sideBar.style.backgroundColor = "black";
//   sideBar.style.color = "white";
//   header.style.backgroundColor = "black";
//   header.style.color = "white";
//   contentBody.style.backgroundColor = "black";
//   topText.style.color = "white";
//   recommendText.style.color = "white";
//   trendingText.style.color = "white";

//   sideBar.style.backgroundColor = "white";
//   sideBar.style.color = "black";
//   header.style.backgroundColor = "white";
//   header.style.color = "black";
//   contentBody.style.backgroundColor = "white";
//   topText.style.color = "black";
//   recommendText.style.color = "black";
//   trendingText.style.color = "black";
// };

const slideStep = 1;
const slideView = 5;
let slideViewStart = 0;
let slideViewEnd = slideView;
const lastSlide = slideShowData.length - 1;
const renderSlideShow = (data) => {
  let slideShow = data.slice(slideViewStart, slideViewEnd).map(
    (item) => `
  <div class="channel">
                  <img
                    class="channel-avatar"
                    src="${item.img}"
                    width="56px"
                    height="56px"
                    alt=""
                  />
                  <div class="channel-info">
                    <div class="channel-name">
                      <div class="text-name">${item.name}</div>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="16" height="16" rx="8" fill="#7FBA7A" />
                        <path
                          d="M6.8 9L5.2 7.4L4 8.6L6.8 11.4L12 6.2L10.8 5L6.8 9Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="channel-story">${item.story}</div>
                    <div class="channel-status">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#FF754C" />
                      </svg>

                      <div class="channel-viewers">${item.viewers}k views</div>
                    </div>
                  </div>
                </div>
  `
  );
  channelsList.innerHTML = slideShow.join("");
};

const HandleSlideShow = (icon) => {
  if (icon == "next" && slideViewEnd > lastSlide) {
    slideViewStart = 0;
    slideViewEnd = slideView;
    renderSlideShow(slideShowData);
  } else {
    if (icon == "next") {
      if (slideViewEnd <= lastSlide) {
        slideViewStart += slideStep;
        slideViewEnd += slideStep;
      }
      renderSlideShow(slideShowData);
    }
  }
  if (icon == "prev" && slideViewStart == 0) {
    slideViewStart = slideShowData.length - slideView;
    slideViewEnd = slideShowData.length;
    renderSlideShow(slideShowData);
  } else {
    if (icon == "prev") {
      if (slideViewStart > 0) {
        slideViewStart -= slideStep;
        slideViewEnd -= slideStep;
      }
      renderSlideShow(slideShowData);
    }
  }
};
choiceWrapperEl.addEventListener("click", function (e) {
  const choiceElDefault = document.querySelector(".choice-default");
  const choiceElChecked = choiceWrapperEl.querySelector(".choice.checked");
  if (choiceWrapperEl == e.target) {
    return choiceElDefault;
  } else {
    if (!(choiceElDefault.innerText == e.target.innerText)) {
      choiceElChecked.classList.remove("checked");
      e.target.classList.add("checked");
      choiceElDefault.innerText = e.target.innerText;
    }
  }
});

document.onclick = function (event) {
  const sideBar = document.querySelector(".sidebar");
  const logoBurger = document.getElementById("btn-burger");
  const logoBurgerInside = document.getElementById("btn-burger-inside");
  const toggleSideBar = document.querySelector(".toggle-sidebar");
  if (event.target == logoBurger || sideBar.contains(event.target)) {
    sideBar.classList.add("active");
    toggleSideBar.classList.remove("active");
  } else {
    sideBar.classList.remove("active");
    toggleSideBar.classList.add("active");
  }
  if (event.target == logoBurgerInside) {
    sideBar.classList.remove("active");
    toggleSideBar.classList.add("active");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  renderSlideShow(slideShowData);
});
