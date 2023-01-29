import { updateParams, updateNewParams } from "../functions/updateParams.js";
import { async } from "../functions/async.js";


function onClickFilter() {
  let filter = $(".select-filters option:selected").val() ?? "";
  let page = $("#filters input:hidden").attr("value");
  let query = $(".js-query").val() ?? "";
  let limit = $("#limit").val();

  let filters = {
    "filter": filter,
    "page": page,
    "query": query,
    "limit": limit
  };

  let params = new URLSearchParams();
  updateParams(filters, params);
  let url = new URL(window.location.href);
  async(url.pathname + "?" + params.toString() + "&ajax=1", "content");

  let newParams = new URLSearchParams();
  updateNewParams(filters, newParams);
  
  if (newParams.toString() === "") {
    history.pushState({}, null, url.pathname);
  } else {
    history.pushState({}, null, url.pathname + "?" + newParams.toString());
  }
}

export { onClickFilter };
