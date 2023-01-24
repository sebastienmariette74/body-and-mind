const axios = require("axios").default;
import { onClickFilter } from "../functions/onClickFilters.js";

// // ______________________ FILTRE DES PARTENAIRES/STRUCTURES PAR NOM, OU ACTIVE/DESACTIVE _________________ //
$(".js-query").on("keyup", onClickFilter);

$(".filters").on("change", onClickFilter);