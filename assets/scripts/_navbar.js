/*_______________ TOPNAV ________________________*/


window.addEventListener("DOMContentLoaded", (event) => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.classList.toggle("sb-sidenav-toggled");
            localStorage.setItem(
                "sb|sidebar-toggle",
                document.body.classList.contains("sb-sidenav-toggled")
            );
        });
    }
});

/*_______________ SIDENAV ________________________*/

let navLinks = $(".nav-link");
let current = location.href;

for (let navLink of navLinks) {
    if (
        navLink.href == current ||
        navLink.href.split("/").slice(0, 4)[3] ==
        current.split("/").slice(0, 4)[3]
    ) {
        navLink.className.replace("active", "");
        navLink.className += " active";
        navLink.style.color = "#fff";
    }
}

if (current.split("/")[4] === "partenaire" || current.split("/")[4] === "structure") {
    $('.nav-dead-link').css('color', 'white')
}
