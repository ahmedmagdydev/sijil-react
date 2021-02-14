let apiBaseUrl;
let siteBaseUrl;
// eslint-disable-next-line no-undef
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  apiBaseUrl = 'http://localhost:5000';
  siteBaseUrl = '/';
} else {
  // apiBaseUrl = 'https://sijil-backend.herokuapp.com';
  apiBaseUrl = 'http://localhost:5000';
  siteBaseUrl = '/_layouts/15/STS.Sijil.Portal/dist/';
}
export { apiBaseUrl, siteBaseUrl };
