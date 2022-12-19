import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "../src/Api/axios";

function UploadCVPage() {
  const [base64, setBase64] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/api/cv",
        JSON.stringify({
          fileBase64: base64,
          userId: 0,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setUploaded(true);
      setShowErr(false);
    } catch {
      setShowErr(true);
    }
  };

  const handleFileSelected = (e) => {
    setUploaded(false);
    setShowErr(false);
    convertToBase64(e.target.files[0], setBase64);
  };

  return (
    <div className="p-2 container">
      <h1>Upload CV</h1>
      {uploaded && (
        <Alert variant="success" className="w-25">
          Uploaded!
        </Alert>
      )}
      {showErr && (
        <Alert variant="danger" className="w-25">
          Failed to upload!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select CV file:</Form.Label>
          <Form.Control
            onChange={handleFileSelected}
            className="w-25"
            type="file"
            accept="application/pdf"
          />
        </Form.Group>
        <br />
        <Button disabled={base64 === ""} type="submit">
          Upload
        </Button>
      </Form>
    </div>
  );
}

function convertToBase64(file, setBase64) {
  if (typeof file === "undefined") {
    setBase64("");
  }
  let fileReader = new FileReader();

  fileReader.onload = function (fileLoadedEvent) {
    let base64 = fileLoadedEvent.target.result;
    const start = "base64,";
    setBase64(base64.substring(base64.indexOf(start) + start.length));
  };

  fileReader.readAsDataURL(file);
}

export default UploadCVPage;
