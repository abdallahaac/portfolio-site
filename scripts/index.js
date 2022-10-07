// burger icon images - closed and open
const openBurgerImg = document.getElementById("burger-bar-img");
const closedBurgerImg = document.getElementById("burger-bar-closed-img");
// expanded burger navigation menu
const expandedBurgerNav = document.getElementById("expanded-burger-nav");

// try to rewrite as a switch case
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
