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
          <InvestorCofounder companyName={companyName} />
          <Competitors
            companyName={companyName}
            setCompanyname={setCompanyname}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

const CompanyProfile = ({ companyName }) => {
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
    <div className="bg-gray-100  pt-8 flex justify-center items-start">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
          {company.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
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

const InvestorCofounder = ({ companyName }) => {
  const [investors, setInvestors] = useState([]);
  const [cofounders, setCofounders] = useState([]);
  useEffect(() => {
    const handelCompanyinvestor = async () => {
      console.log("company investor using query is -- ", companyName);
      if (!companyName) return;
      try {
        const response = await fetch(
          "http://localhost:8000/data/all-investor",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: companyName }),
          }
        );
        if (!response.ok) {
          console.log("response not ok investor");
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("comapny investor data is ", result);
        setInvestors(result.data);
      } catch (error) {
        console.log("error during searching company by query");
      }
    };
    const handelCompanyfounders = async () => {
      console.log("company search using query is -- ");
      if (!companyName) return;
      try {
        const response = await fetch(
          "http://localhost:8000/data/all-cofounder",
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
        console.log("company cofounder data is ", result);
        setCofounders(result.data);
      } catch (error) {
        console.log("error during searching company by query");
      }
    };
    handelCompanyinvestor();
    handelCompanyfounders();
  }, [companyName]);

  return (
    <div className="bg-gray-100  pt-8 flex justify-center items-start">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl flex gap-44 font-bold mb-4 text-gray-800 border-b pb-2 px-1">
          <p>Institutional Investors</p>
          <p>Cofounders</p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 max-h-[50vh] overflow-y-auto">
          <div>
            {investors.length
              ? investors.map((ind, i) => {
                  return <p id={i}>{ind.name}</p>;
                })
              : null}
          </div>
          <div>
            {cofounders.length
              ? cofounders.map((ind, i) => {
                  return <p id={i}>{ind.name}</p>;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const Competitors = ({ companyName, setCompanyname }) => {
  const [competitors, setCompetitors] = useState([]);
  useEffect(() => {
    const handelCompanycompetitors = async () => {
      console.log("company investor using query is -- ", companyName);
      if (!companyName) return;
      try {
        const response = await fetch(
          "http://localhost:8000/data/all-competitors",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: companyName }),
          }
        );
        if (!response.ok) {
          console.log("response not ok investor");
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Competitors of company are ", result);
        setCompetitors(result.data);
      } catch (error) {
        console.log("error during searching company by query");
      }
    };

    handelCompanycompetitors();
  }, [companyName]);

  return (
    <div className="bg-gray-100 min-h-screen pt-8 flex justify-center items-start">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl flex  font-bold mb-4 text-gray-800 border-b pb-2 px-1">
          <p>Competitors</p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-9 max-h-[50vh] overflow-y-auto">
          <div>
            {competitors.length
              ? competitors.map((ind, i) => {
                  return (
                    <p
                      key={i}
                      onClick={() => {
                        setCompanyname(ind.name);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="border-[2px] text-blue-900 px-4 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-200 transition-all duration-300 cursor-pointer text-center w-full"
                    >
                      {ind.name}
                    </p>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
