const axios = require("axios").default;
import { async } from "../functions/async.js";

// ____________________ MODAL SUPPRESSION D'UN PARTENAIRE/STRUCTURE ____________________//

$(".modal_trigger").on("click", function (e) {
  $("#modal-delete").css("display", "block");
});

$("#content").on("click", ".modal-trigger", function (e) {
  $("#modal-delete").css("display", "block");
  let href = $(this).data("slug") + "/" + $(this).data("id");
  $(".modal-footer-delete a").attr("href", href);
  let name = $(this).data("name");
  $(".modal-body-delete .question1").text("Voulez-vous supprimer ");
  $(".modal-body-delete .question2").text(name);
});

$("#cards").on("click", ".modal-trigger", function (e) {
  $("#modal-delete").css("display", "block");
  let href = $(this).data("slug") + "/" + $(this).data("id");
  $(".modal-footer-delete a").attr("href", href);
  let name = $(this).data("name");
  $(".modal-body-delete .question1").text("Voulez-vous supprimer ");
  $(".modal-body-delete .question2").text(name);
});

$(".btn-delete-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-delete").css("display", "none");
});

$("#cards").on("click", ".sendEmail", function (e) {
  if ($(this).is(":checked")) {
    let params = new URLSearchParams();
    params.append("sendEmail", "true");
    let url = new URL(window.location.href);
    async(url.pathname + "?" + params.toString());
  }
});
