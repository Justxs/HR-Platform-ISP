import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import useAuth from "../src/Hooks/useAuth";
import axios from "../src/Api/axios";
import { Alert, Card, ListGroup, Stack } from "react-bootstrap";

function JobAdView() {
  const [jobAd, setJobAd] = useState();
  const { auth } = useAuth();
  const params = useParams();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/job-ads/${params.id}`, {
        headers: { "Content-Type": "application/json" },
      });

      setJobAd(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  const handleApply = async (id) => {
    try {
      await axios.post(
        `/api/job-ads/${id}/applications`,
        JSON.stringify({ userId: 0 }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
    } catch {
      setSuccess(false);
    }
  };

  if (!jobAd) return <></>;

  return (
    <div className="container w-25 bg-white rounded">
      <h1 className="text-center">Job offer</h1>
      {success && <Alert variant="success">Applied successfuly!</Alert>}
      <Stack direction="vertical" gap={3}>
        <div>Name: {jobAd.name}</div>
        <div>About: {jobAd.about}</div>
        <div>
          Creation date: {new Date(jobAd.creationDate).toLocaleDateString()}
        </div>
        <div>
          Requirements:
          <ListGroup className="list-group-flush">
            {jobAd.requirements.map((y) => {
              return <ListGroup.Item key={y.id}>{y.technology}</ListGroup.Item>;
            })}
          </ListGroup>
        </div>
        <Button
          disabled={success}
          variant="primary"
          onClick={() => handleApply(jobAd.id)}
        >
          Apply
        </Button>
      </Stack>
    </div>
  );
}

export default JobAdView;
