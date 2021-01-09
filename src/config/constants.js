const API_DEV_URL = "http://localhost:3000/api/";

const API_PROD_URL = "https://my-wallet-gpbpiazza.herokuapp.com/api/";

const PRODUCTION = false;

const API_URL = PRODUCTION ? API_PROD_URL : API_DEV_URL;

export default API_URL;

export const MEDIA = "@media (min-width: 600px)";
