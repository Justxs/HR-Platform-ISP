import React from "react";
import { Button } from "react-bootstrap";
import axios from "../src/Api/axios";
import useAuth from "../src/Hooks/useAuth";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";

const JobAdsTable = ({ jobAds }) => {
  const { auth } = useAuth();

  async function GeneratePDF(name, about, salary) {
    var doc = new jsPDF();

    doc.setFontSize(24);
    doc.text("Job name: " + name, 20, 50);
    doc.text("Description: " + about, 20, 60);
    doc.text("Salary: " + salary, 20, 70);
    doc.addImage("../src/assets/hr.png", "PNG", 15, 15, 15, 15);
    doc.save("job.pdf");
  }
  async function DeleteJobAd(jobId) {
    try {
      await axios.delete(`/api/job-ads/${jobId}`, {
        headers: { Authorization: `Bearer ${auth?.token}` },
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {jobAds.map((info) => (
        <tr key={info.id}>
          <td>{info.id}</td>
          <td>{info.name}</td>
          <td>{info.about}</td>
          <td>{info.salary}</td>
          <td>
            <Button
              size="sm"
              variant="primary"
              href={`/jobsad-view/${info.id}`}
            >
              View
            </Button>{" "}
            <Button
              size="sm"
              variant="warning"
              onClick={() => GeneratePDF(info.name, info.about, info.salary)}
            >
              Export
            </Button>{" "}
            <Button
              size="sm"
              variant="danger"
              onClick={() => DeleteJobAd(info.id)}
              href="/jobsad"
            >
              Delete
            </Button>{" "}
            <Button
              size="sm"
              variant="warning"
              onClick={() => {}}
              href={`/jobsad/edit/${info.id}`}
            >
              Edit
            </Button>{" "}
          </td>
        </tr>
      ))}
    </>
  );
};
export default JobAdsTable;
