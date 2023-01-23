const $ = require("jquery");

function updateParams(filters, params) {
  $.each(filters, function (key, value) {
    if (value === "") {
      // ne rien faire
    } else if (params.get(key)) {
      params.set(key, value);
    } else {
      params.append(key, value);
    }
  });
}

function updateNewParams(filters, params) {
  $.each(filters, function (key, value) {
    if (value === "" || value === 0) {
      // ne rien faire
    } else if (params.get(key)) {
      params.set(key, value);
    } else {
      params.append(key, value);
    }
  });
}

export { updateParams, updateNewParams };
