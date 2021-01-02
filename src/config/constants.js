const API_DEV_URL = "http://localhost:3000/api/";

const API_PROD_URL = "https://piazza-hello-heroku.herokuapp.com/api/";

const PRODUCTION = true;

const API_URL = PRODUCTION ? API_PROD_URL : API_DEV_URL;

export default API_URL;

export const MEDIA = "@media (min-width: 600px)";
