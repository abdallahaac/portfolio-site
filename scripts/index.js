// burger icon images - closed and open
const openBurgerImg = document.getElementById("burger-bar-img");
const closedBurgerImg = document.getElementById("burger-bar-closed-img");
// expanded burger navigation menu
const expandedBurgerNav = document.getElementById("expanded-burger-nav");
// portfolio btn on desktop navbar
const portfolioNavBtn = document.getElementById("portfolio");
//drop down menu that is hidden by default
const dropdownMenu = document.getElementById("dropdown-menu");

// switch burger icon image when clicked
openBurgerImg.addEventListener("click", () => {
	openBurgerImg.style.visibility = "hidden";
	if ((openBurgerImg.style.visibility = "hidden")) {
		closedBurgerImg.style.visibility = "visible";
		expandedBurgerNav.style.visibility = "visible";
	}

	if ((closedBurgerImg.style.visibility = "visible")) {
		closedBurgerImg.addEventListener("click", () => {
			openBurgerImg.style.visibility = "visible";
			closedBurgerImg.style.visibility = "hidden";
			expandedBurgerNav.style.visibility = "hidden";
		});
	}
});

// make the drop down visible when the mouse is over the portfolio nav btn
portfolioNavBtn.addEventListener("mouseover", () => {
	dropdownMenu.style.visibility = "visible";

	if ((dropdownMenu.style.visibility = "visible")) {
		portfolioNavBtn.addEventListener("mouseleave", () => {
			dropdownMenu.style.transitionDelay = "100ms";
			dropdownMenu.style.visibility = "hidden";
		});
	}

	if ((dropdownMenu.style.visibility = "visible")) {
		dropdownMenu.addEventListener("mouseover", () => {
			dropdownMenu.style.visibility = "visible";
		});
	}
	if ((dropdownMenu.style.visibility = "visible")) {
		dropdownMenu.addEventListener("mouseleave", () => {
			dropdownMenu.style.transitionDelay = "100ms";
			dropdownMenu.style.visibility = "hidden";
		});
	}
});
