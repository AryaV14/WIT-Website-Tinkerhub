document.addEventListener("DOMContentLoaded", function () {
    var hasSubmenuItems = document.querySelectorAll(".has-submenu");

    hasSubmenuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var submenu = this.querySelector(".submenu");
        submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
      });
    });
  });