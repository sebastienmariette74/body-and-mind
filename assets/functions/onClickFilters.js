import { updateParams, updateNewParams } from "../functions/updateParams.js";
import { async } from "../functions/async.js";


function onClickFilter() {
  let filter = $(".select-filters option:selected").val() ?? "";
  let page = $("#filters input:hidden").attr("value");
  let query = $(".js-query").val() ?? "";

  let filters = {
    filter: filter,
    page: page,
    query: query,
  };

  let params = new URLSearchParams();

  updateParams(filters, params);

  let url = new URL(window.location.href);
  async(url.pathname + "?" + params.toString() + "&ajax=1", "content");

  let newParams = new URLSearchParams();
  updateNewParams(filters, newParams);

  // Mise à jour de l'url
  if (newParams.toString() === "") {
    history.pushState({}, null, url.pathname);
  } else {
    history.pushState({}, null, url.pathname + "?" + newParams.toString());
  }
}

export { onClickFilter };
