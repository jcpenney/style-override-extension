try {
  style = document.createElement("link");
  style.type = "text/css";
  style.rel = "stylesheet";
  style.href = "http://localhost:8000/css/app.css";
  document.getElementsByTagName("head")[0].appendChild(style);
} catch(e) {}