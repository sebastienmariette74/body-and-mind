const axios = require('axios').default;
import {async} from "../functions/async.js"

// ______________________ FILTRE DES PARTENAIRES/STRUCTURES PAR NOM, OU ACTIVE/DESACTIVE _________________ //

function onClickFilter(event) {
    event.preventDefault();
    let filter = $(this).attr("name");
    let page = $("#filters input:hidden").attr("value");
    let query = $(".js-query").val();
    let params = new URLSearchParams();
    params.append("filter", filter);
    params.append("page", page);
    if ($(".js-query").val() != "") {
        params.append("query", query);
    }

    let url = new URL(window.location.href);
    async(url.pathname + "?" + params.toString() + "&ajax=1", "content");

    // On met à jour l'url
    history.pushState({}, null, url.pathname + "?" + params.toString());
}

$(document).on("click", ".js-filter", onClickFilter);