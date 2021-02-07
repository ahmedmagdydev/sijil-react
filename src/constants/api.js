let apiBaseUrl;

// eslint-disable-next-line no-undef
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiBaseUrl = "http://localhost:5000";
} else {
  apiBaseUrl = "https://sijil-backend.herokuapp.com";
}
export { apiBaseUrl };
