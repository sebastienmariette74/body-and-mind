const axios = require("axios").default;
import { async } from "../functions/async.js";

// ____________________ MODAL ACTIVATION D'UN PARTENAIRE/STRUCTURE ____________________//

$(".modal-switch-user").css("cursor", "pointer");

let slug = "";
let name = "";

$("#cards").on("click", ".modal-switch-user", function (e) {
  if (
    $(this).data("disabled") === "disabled" ||
    $(this).data("role") != "admin"
  ) {
    e.preventDefault();
    if ($(this).data("disabled") === "disabled") {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .question").css("display", "none");
      $(".modal-body-switch .para1").text(
        `La salle ne peut pas être activée quand le partenaire est désactivé.`
      );
      $("#btn-switch").css("display", "none");
      $("#btn-switch-cancel").text("VALIDER");
      $("#btn-switch-cancel").css({
        "backgroundColor": "#0d6efd",
        "border": "none",
        "outline": "none"
      });
    }
  } else {
    e.preventDefault();
    let switchChecked = $(this).is(":checked");
    name = $(this).data("name");
    if (!switchChecked) {
      $(".modal-body-switch .question1").text(
        `Etes-vous sûr de vouloir désactiver `
      );
      $(".modal-body-switch .question2").text(name);
      let url = "";
      let href = window.location.pathname.split("/");
      if (href.includes("partenaires")) {
        $(".modal-body-switch .para1").css("display", "block");
        $(".modal-body-switch .para1").text(
          `En désactivant ce partenaire, vous désactiverez toutes les structures auquel elles sont rattachées.`
        );
      }
    } else {
      $(".modal-body-switch .question1").text(
        `Etes-vous sûr de vouloir activer `
      );
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
    }

    $("#modal-switch").css("display", "block");
    slug = $(this).data("slug");
  }
});

$("#content").on("click", ".modal-switch-user", function (e) {
    if (
        $(this).data("disabled") === "disabled" ||
        $(this).data("role") != "admin"
    ) {
        e.preventDefault();
        if ($(this).data("disabled") === "disabled") {
        $("#modal-switch").css("display", "block");
        $(".modal-body-switch .question").css("display", "none");
        $(".modal-body-switch .para1").text(
            `La salle ne peut pas être activée quand le partenaire est désactivé.`
        );
        $("#btn-switch").css("display", "none");
        $("#btn-switch-cancel").text("VALIDER");
        $("#btn-switch-cancel").css({
          "backgroundColor": "#0d6efd",
          "border": "none",
          "outline": "none"
        });
        }
    } else {
        e.preventDefault();
        let switchChecked = $(this).is(":checked");
        name = $(this).data("name");
        if (!switchChecked) {
        $(".modal-body-switch .question1").text(
            `Etes-vous sûr de vouloir désactiver `
        );
        $(".modal-body-switch .question2").text(name);
        let href = window.location.pathname.split("/");
        if (href.includes("partenaires")) {
            $(".modal-body-switch .para1").css("display", "block");
            $(".modal-body-switch .para1").text(
            `En désactivant ce partenaire, vous désactiverez toutes les structures auquel elles sont rattachées.`
            );
        }
        } else {
        $(".modal-body-switch .question1").text(
            `Etes-vous sûr de vouloir activer `
        );
        $(".modal-body-switch .question2").text(name);
        $(".modal-body-switch .para1").css("display", "none");
        }
        $("#modal-switch").css("display", "block");
        slug = $(this).data("slug");
    }

});

$(".btn-switch").on("click", function (e) {
  e.preventDefault();

  let params = new URLSearchParams(window.location.search);
  let paramsToString = params.toString();
  let url = "";
  let href = window.location.pathname.split("/");
  if (href.includes("partenaires")) {
    url = `${window.location.protocol}//${window.location.host}/partenaires/${slug}/active-user/?${paramsToString}`;
  } else {
    url = `${window.location.protocol}//${window.location.host}/structures/${slug}/active-user/?${paramsToString}`;
    if (href[2] != "") {
      let date = new Date();
      date.setTime(date.getTime() + 1000);
      $.cookie("card", "ok", {
        expires: date,
        path: "/;SameSite=None",
        secure: true,
      });
    }
  }
  async(url, "content");
  $("#modal-switch").css("display", "none");
});

$(".btn-switch-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-switch").css("display", "none");
});
