"use client";
import TopNavbar from "../../Components/Navbar.jsx";
import React, { useEffect, useState } from "react";
export default function Dashboard() {
  const [companyName, setCompanyname] = useState("Lenskart");
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
      {companyName && is_searching ? (
        <div className="">
          <CompanyProfile companyName={companyName} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

const CompanyProfile = ({ companyName }) => {
  const company2 = {
    name: "Tech Innovations Ltd.",
    industry: "Software Development",
    location: "San Francisco, CA",
    founded: "2010",
    employees: "200+",
    revenue: "$50M+",
    description:
      "Tech Innovations Ltd. is a leading software development company specializing in AI-driven solutions and cloud services.",
    website: "https://techinnovations.com",
  };
  const [company, setCompany] = useState(companyName);
  useEffect(() => {
    const handelCompanysearch = async () => {
      console.log("company search using query is -- ", companyName);
      if (!companyName) return;
      try {
        const response = await fetch(
          "http://localhost:8000/data/comapnies-byname",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: companyName }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCompany(result.data[0]);
      } catch (error) {
        console.log("error during searching company by query");
      }
    };
    handelCompanysearch();
  }, [companyName]);
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex justify-center items-start">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
          {company.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">usesFacebookAds: </span>
              {company.usesFacebookAds}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">usesShopify: </span>
              {company.usesShopify}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">acquisitionType: </span>
              {company.acquisitionType}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">annualEBITDAAsOn: </span>
              {company.annualEBITDAAsOn}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">annualNetProfitAsOn: </span>
              {company.annualNetProfitAsOn}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">soonicornClubEventDate: </span>
              {company.soonicornClubEventDate}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">websiteStatusLastUpdated: </span>
              {company.websiteStatusLastUpdated}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">isAcquired: </span>
              {company.isAcquired}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">latestValuationAsOn: </span>
              {company.latestValuationAsOn}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">acquisitionList: </span>
              {company.acquisitionList}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">latestFundingDate: </span>
              {company.latestFundingDate}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">Founded: </span>
              {company.foundedYear}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Employees: </span>
              {company.totalEmployeeCount}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">isDeadpooled: </span>
              {company.isDeadpooled}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">isIPO: </span>
              {company.isIPO}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">annualRevenueAsOn: </span>
              {company.annualRevenueAsOn}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">isFunded: </span>
              {company.isFunded}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Description: </span>
              {company.description}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">totalFunding : </span>
              {company.totalFundingUSD} $
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">latestValuation: </span>
              {company.latestValuationUSD} $
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">editorsRating: </span>
              {company.editorsRating}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">annualEBITDA: </span>
              {company.annualEBITDAUSD} $
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">AnnualRevenue : </span>
              {company.annualRevenueUSD} $
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">annualNetProfitUSD : </span>
              {company.annualNetProfitUSD} $
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">latestFundingAmountUSD : </span>
              {company.latestFundingAmountUSD} $
            </p>
            <p className="text-blue-600 hover:text-blue-800 mt-4">
              <a
                href={`https://${company.domainName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
