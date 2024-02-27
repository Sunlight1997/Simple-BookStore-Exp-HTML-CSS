const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
searchBtn.onclick = () => {
	searchForm.classList.toggle("active");
};

const loginForm = document.querySelector(".login-form-container");
const loginBtn = document.querySelector("#login-btn");
const closeLoginFormBtn = document.querySelector("#close-login-btn");

loginBtn.onclick = () => {
	loginForm.classList.toggle("active");
};
closeLoginFormBtn.onclick = () => {
	loginForm.classList.remove("active");
};

window.onscroll = () => {
	searchForm.classList.remove("active");

	if (window.scrollY > 80) {
		document.querySelector(".header .header-2").classList.add("active");
	} else {
		document.querySelector(".header .header-2").classList.remove("active");
	}
};

window.onload = () => {
	if (window.scrollY > 80) {
		document.querySelector(".header .header-2").classList.add("active");
	} else {
		document.querySelector(".header .header-2").classList.remove("active");
	}
};

function loader() {
	document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
	setTimeout(loader, 4000);
}

fadeOut();
