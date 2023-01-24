const axios = require('axios').default;
import {async} from "../functions/async.js";
console.log('pagination');

console.log($('.page-item'));

/*_______________ PAGINATION ________________________*/
$("#content").on("click", ".page-link", function (e) {
    e.preventDefault();
    console.log('clic');
    let params = $(this).attr("href");
    console.log(params);
    let url = new URL(window.location.href);
    async(url.pathname + params + "&ajax=1", "content");
});
