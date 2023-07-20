import axios from "axios";

// These are default values for axios requests
axios.defaults.baseURL = "https://pp5-django-api-b2580fe4fff7.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;