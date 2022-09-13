const axios = require('axios').default;
import {async} from "../functions/async.js"

/*_______________ PAGINATION ________________________*/
$("#content").on("click", ".page-link", function (e) {
    e.preventDefault();
    let params = $(this).attr("href");
    let url = new URL(window.location.href);
    async(url.pathname + params + "&ajax=1", "content");
});


/*
$('.card').css("cursor", "pointer");

$("#content").on("click", '.card', function (e) {
    console.log($('a', this).attr('href'));
    let href = $('a', this).attr('href');
    window.location.href = href;
})
 */