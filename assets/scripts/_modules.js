const axios = require("axios").default;
import { async } from "../functions/async.js";

/* _____________ ACTIVATION/DESACTIVATION DE MODULE ____________________________*/

$(".activate-module").css("cursor", "pointer");

let name, slug, role, moduleId, switchChecked, modulepartner;

$("#modules").on("click", ".activate-module", function (e) {
  console.log('clic');
  modulepartner = ($(this).data("modulepartner") == "1") ? "activé" : "désactivé" ;
  switchChecked = !$(this).is(":checked");
  e.preventDefault();
  if (
    $(this).data("disabled") === "disabled" ||
    $(this).data("role") != "admin"
  ) {
    e.preventDefault();
  } else {
    e.preventDefault();

    $("#modal-module").css("display", "block");
    
    name = $(this).data("name");
    let href = window.location.pathname.split("/");
    if (href.includes("partenaires")) {
      if (switchChecked) {
        $(".modal-body-module .question1").text(
          `Etes-vous sûr de vouloir désactiver`
        );
        $(".modal-body-module .question2").text(`${name}`);
        $(".modal-body-module .para1").text(
          `En désactivant ce droit, vous désactiverez celui des structures dont dépend ce partenaire.`
        );
      } else {
        $(".modal-body-module .question1").text(
          `Etes-vous sûr de vouloir activer`
        );
        $(".modal-body-module .question2").text(`${name}`);
        $(".modal-body-module .para1").text(
          `Cette action ne concerne que ce partenaire. Ce droit devra être activé au cas par cas pour chaque structure dont dépend le partenaire.`
        );
      }
    } else if (switchChecked) {
      e.preventDefault();
      
      $(".modal-body-module .question").css("display", "block");

      $(".modal-body-module .question1").text(
        `Etes-vous sûr de vouloir désactiver`
      );
      $(".modal-body-module .question2").text(`${name}`);
      
      $(".modal-body-module .para1").text(
        `Cette action n'a aucune influence sur le droit du partenaire dont dépend cette structure.`
      );

      $("#btn-module").css("display", "block");
        $("#btn-module-cancel").text("ANNULER");
        $("#btn-module-cancel").css("backgroundColor", "#dc3545");

    } else {
      e.preventDefault();
      
      if (modulepartner === "désactivé") {

        $(".modal-body-module .question").css("display", "none");
        $(".modal-body-module .para1").text(
          `Vous ne pouvez pas activer le droit de cette structure car celui du partenaire n'est pas activé.`
        );
        $("#btn-module").css("display", "none");
        $("#btn-module-cancel").text("VALIDER");
        $("#btn-module-cancel").css({
          "backgroundColor": "#0d6efd",
          "border": "none",
          "outline": "none"
        });

      } else {

        $(".modal-body-module .question").css("display", "block");
        $(".modal-body-module .question1").text(
          `Etes-vous sûr de vouloir activer`
        );
        $(".modal-body-module .question2").text(`${name}`);        
        $(".modal-body-module .para1").text(
          `Cette action n'a aucune influence sur le droit du partenaire dont dépend cette structure.`
        );        
        $("#btn-module").css("display", "flex");
        $("#btn-module-cancel").text("ANNULER");
        $("#btn-module-cancel").css("backgroundColor", "#dc3545");
      }
    }

    slug = $(this).data("slug");
    role = $(this).data("role");
    moduleId = $(this).data("idmodule");
  }
});

$(".btn-module").on("click", function (e) {
  e.preventDefault();
  let url = "";
  let href = window.location.pathname.split("/");
  if (role === "admin") {
    if (href.includes("partenaires")) {
      url = `${window.location.protocol}//${window.location.host}/partenaires/${slug}/${moduleId}/active-module`;
    } else {
      url = `${window.location.protocol}//${window.location.host}/structures/${slug}/${moduleId}/active-module`;
    }
    async(url, "modules");
  } else {
    e.preventDefault();
  }
  $("#modal-module").css("display", "none");
  $(".activate-module").css("cursor", "pointer")
});

$(".btn-module-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-module").css("display", "none");
  $(".activate-module").css("cursor", "pointer")
});
