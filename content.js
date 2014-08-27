var CSS_URL = "http://localhost:8000/assets/css/app.css";

try {
  style = document.createElement("link");
  style.type = "text/css";
  style.rel = "stylesheet";
  style.href = CSS_URL;
  document.getElementsByTagName("head")[0].appendChild(style);
} catch(e) {}