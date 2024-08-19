"use client";
import TopNavbar from "../../Components/Navbar.jsx";
import React, { useState } from "react";
export default function Dashboard() {
  const [companyName, setCompanyname] = useState("");
  const [is_searching, setIs_searching] = useState(false);
  const handelCompanysearch = async () => {
    console.log("company search using query is -- ", companyQuery);
    if (!companyQuery) return;
    try {
      const response = await fetch(
        "http://localhost:8000/data/comapnies-byname",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: companyQuery }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      // setCompany_list(result.data);
      // setIsquery(true);
    } catch (error) {
      console.log("error during searching company by query");
    }
  };
  return (
    <div className="w-screen h-screen ">
      <TopNavbar
        setCompanyName={setCompanyname}
        setIs_searching={setIs_searching}
      />
      {companyName ? (
        <div>These are the analytics of the company {companyName}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
