document.body.classList.add("body-style");

const wrapper = document.querySelector("#wrapper");
wrapper.classList.add("style");
wrapper.style.maxWidth = null;

const header = document.querySelector("#header");
header.style.background = "url(https://i.imgur.com/h1BCEYT.png)";
header.style.backgroundRepeat = "no-repeat";
header.style.backgroundPosition = "center center";
header.style.backgroundColor = "#2c2c2c";
header.style.backgroundSize = "contain";

const searchForm = document.querySelector("#searchform");
searchForm.classList.add("style");

const topBar = document.querySelector("#topbar");
topBar.classList.add("style");
topBar.style.width = "100vw";
topBar.appendChild(searchForm);

const menuContatti = document.querySelector("#menu-contatti");
menuContatti.classList.add("style");

const menuHeaderUl = document.querySelector("#menu-menu-orizzontale");
menuHeaderUl.classList.add("style");

const searchInput = document.querySelector("#searchform #s");
searchInput.classList.add("style");

const leftSidebar = document.querySelector("#leftsidebar");
if (leftSidebar) {
  leftSidebar.classList.add("style");

  const leftSidebarTitles = document.querySelectorAll(".widgettitle");
  leftSidebarTitles.forEach((el) => el.classList.add("style"));

  const leftSidebarMenus = document.querySelectorAll(".widget_nav_menu");
  leftSidebarMenus.forEach((el) => el.classList.add("style"));
  document.querySelector("#sidebarleft-100-background").style.backgroundColor =
    "#2c2c2c";
}

const rightSidebar = document.querySelector("#rightsidebar");
if (rightSidebar) {
  rightSidebar.classList.add("style");
  // ** Style for right sidebar elements **

  // iscrizioni-interne img
  document.querySelector(".menu-item-21514 img").src =
    "https://i.imgur.com/0qH8b0Y.png";

  // pago in rete img
  document.querySelector(".menu-item-12983 img").src =
    "https://i.imgur.com/rL0Jddr.png";

  // argo studenti img
  document.querySelector(".menu-item-7770 img").src =
    "https://i.imgur.com/a19knfa.png";

  // argo docenti img
  document.querySelector(".menu-item-7772 img").src =
    "https://i.imgur.com/4wwZGLN.png";

  // albo online img
  document.querySelector(".menu-item-23388 img").src =
    "https://i.imgur.com/VwPjI3G.png";

  const rightSidebarLinks = document.querySelectorAll("#rightsidebar ul li a");
  rightSidebarLinks.forEach((aEl) => {
    let imgLink = false;
    Array.from(aEl.children).forEach((children) => {
      if (children.tagName === "IMG") {
        imgLink = true;
      }
    });
    if (imgLink) {
      aEl.classList.add("rightsidebar-img-link");
    } else {
      aEl.classList.add("rightsidebar-link");
    }
  });

  const calendarTableTds = document.querySelectorAll(".em-calendar td");
  calendarTableTds.forEach((td) => {
    let isLink = false;
    Array.from(td.children).forEach((children) => {
      if (children.tagName === "A") {
        isLink = true;
      } else {
        isLink = false;
      }
    });
    if (isLink) {
      td.classList.add("calendar-link");
    } else {
      td.classList.add("calendar-day");
    }
  });

  document.querySelector(".menu-item-7181").style.display = "none";
  document.querySelector(".menu-item-7182").style.display = "none";
}

const hDates = document.querySelectorAll("span.hdate");
hDates.forEach((el) => el.classList.add("style"));

const sottoHpHome = document.querySelector("#sotto-hp");
if (sottoHpHome) sottoHpHome.style.display = "none";

if (document.querySelector(".homec hr")) {
  document.querySelector(".homec hr").style.display = "none";

  // HOME
  const circolariDiv = document.querySelector("#pasw2015_circolari-2");
  circolariDiv.classList.add("circolari-div");
  const circolariList = document.querySelector("#pasw2015_circolari-2 ul");
  circolariList.classList.add("circolari-ul");
  const circolariItems = circolariList.querySelectorAll("li h3");
  circolariItems.forEach((el) => el.classList.add("circolari-item"));
  const postsDiv = document.querySelector("#pasw2015_posts-2");
  postsDiv.classList.add("posts-div");
  const postsList = document.querySelector("#pasw2015_posts-2 ul");
  postsList.classList.add("posts-ul");
  const postsItems = postsList.querySelectorAll("li");
  postsItems.forEach((el) => el.classList.add("posts-item"));

  const showMoreLinks = document.querySelectorAll(
    ".showall_widget.after_widget_title"
  );
  showMoreLinks.forEach((el) => el.classList.add("style"));
}

// POST DETAIL
const post = document.querySelector(".post");
if (post) {
  post.classList.add("style");
  const children = Array.from(
    document.querySelector(".post .postentry").children
  );
  if (children[children.length - 2].tagName === "DIV") {
    children[children.length - 2].style.background = "rgb(44,44,44)";
    children[children.length - 2].style.border = "none";
    children[children.length - 2].style.margin = "3px 0";
    children[children.length - 2].style.padding = "10px 20px";
  }
  children[children.length - 1]
    .querySelectorAll("br")
    .forEach((el) => (el.style.display = "none"));
}

const sottoPagine = document.querySelector(".sotto-pagine");
if (sottoPagine) {
  const postentry = document.querySelector(".post .postentry");
  if (postentry) {
    postentry.insertBefore(sottoPagine, Array.from(postentry.children)[0]);
  }
  Array.from(postentry.children).map((children) => {
    if (children.innerHTML === "&nbsp;") {
      children.style.display = "none";
      console.log(children);
    }
  });

  sottoPagine.classList.add("style");
}

// adding credits to footer
const credits = document.querySelector("#footer-credits");
if (credits) {
  const p = document.createElement("p");
  p.innerHTML =
    'Stile del sito ideato da Luis Dodaj e <br />programmato da Lorenzo Corallo <br/>Applicato con estensione "Sraffa Restyle"';
  credits.append(p);
}
