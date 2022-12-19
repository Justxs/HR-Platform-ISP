import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button, Form, InputGroup } from "react-bootstrap";
import JobAdsTable from "../components/JobAdsTable";
import useAuth from "../src/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function JobAdsPage() {
  const { auth } = useAuth();
  const Navigate = useNavigate();
  const [jobAds, setJobAds] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [filteredAds, setFilteredAds] = useState([]);
  const [filter, setFilter] = useState("");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${auth.token}`,
  };

  useEffect(() => {
    axios
      .get("http://localhost:5183/api/job-ads", { headers })
      .then((res) => {
        setJobAds(res.data);
        setFilteredAds(res.data);
      })
      .catch((res) => {
        setErrMsg(res);
      });
  }, []);

  useEffect(() => {
    if (filter === "") {
      setFilteredAds(jobAds);
      return;
    }

    setFilteredAds(jobAds.filter((x) => x.about.includes(filter)));
  }, [filter]);

  return (
    <div className="container bg-white rounded">
      <h1>Jobs List</h1>
      <p className="text-danger">{errMsg}</p>
      <>
        <Form.Label>Filter by description:</Form.Label>
        <InputGroup className="w-25">
          <Form.Control
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <Button variant="secondary" onClick={() => setFilter("")}>
            X
          </Button>
        </InputGroup>
      </>
      <Table responsive>
        <thead>
          <tr>
            {/* hardcoded*/}
            <th>#</th>
            <th>Name</th>
            <th>Salary</th>
            <th>About</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <JobAdsTable jobAds={filteredAds} />
        </tbody>
      </Table>
    </div>
  );
}

export default JobAdsPage;
