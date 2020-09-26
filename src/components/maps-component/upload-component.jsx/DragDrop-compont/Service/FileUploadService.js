// import React from 'react';
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { remove } from "react-icons-kit/fa/remove";
// import { Icon } from "react-icons-kit";

import http from "../../http-common";

const upload = (file, onUploadProgress) => {

  let data = new FormData();

  data.append("uploadfile", file);

  return http.post("/scooterdata/api/uploadfile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/api/:id");
};

export default {
  upload,
  getFiles,
};




 