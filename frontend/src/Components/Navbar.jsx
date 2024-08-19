"use client";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card.tsx";

import { useEffect, useState } from "react";

export default function TopNavbar({ setCompanyName, setIs_searching }) {
  const [companyQuery, setCompanyquery] = useState("");
  const [companyCat, setCompanycat] = useState("");
  const [isQuery, setIsquery] = useState(false);
  const [companySelected, setCompanyselected] = useState("");
  const [categories, setCategories] = useState([
    { name: "Loading categories" },
    { name: "Loading categories" },
  ]);
  const [company_list, setCompany_list] = useState([]);
  const handelCompanyselected = (name) => {
    setCompany_list([]);
    setCompanyquery("");
    setCompanycat("");
    // setIsquery("");
    setIs_searching(true);
    setCompanyName(name);
    console.log(name);
  };
  const DropdownTriggerAPI = async () => {
    try {
      if (categories.length > 10) return;
      const response = await fetch("http://localhost:8000/data/allcategories"); // Replace with your API endpoint
      const result = await response.json();
      // console.log("result of categories responses ", result);
      setCategories(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
      setCompany_list(result.data);
      setIs_searching(false);
      setIsquery(true);
    } catch (error) {
      console.log("error during searching company by query");
    }
  };
  useEffect(() => {
    const handelselectedCat = async () => {
      if (!companyCat) return;
      console.log("selected cat is ", companyCat);
      try {
        const response = await fetch(
          "http://localhost:8000/data/comapnies-bycat",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: companyCat }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setIsquery(false);
        setCompany_list(result.data);
        setIs_searching(false);
        console.log("companies data by cat ", result);
      } catch (error) {
        console.log("error during searching company by query");
      }
    };
    handelselectedCat();
  }, [companyCat]);
  useEffect(() => {
    console.log("company_list is updated");
    // setIs_searching(false);
  }, [company_list]);
  return (
    <div className=" w-full h-fit">
      <div className="bg-violet-300 items-center flex gap-2 justify-center w-full h-12">
        <input
          className="h-7"
          placeholder="search by company name"
          value={companyQuery}
          onChange={(e) => {
            setCompanyquery(e.target.value);

            setIs_searching(false);
          }}
        />
        <Search className="w-7 h-7 mr-12" onClick={handelCompanysearch} />
        <DropdownMenu onOpenChange={DropdownTriggerAPI}>
          <DropdownMenuTrigger className="text-lg border-[1px] border-blue-500 ">
            Search by category
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-xl bg-white  w-[12vw] max-h-[25vh] overflow-y-auto">
            {/* <DropdownMenuLabel className="text-lg">
              My Account
            </DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            {categories.map((ind, i) => {
              return (
                <DropdownMenuItem
                  className="text-lg cursor-pointer"
                  id={ind.name}
                  onClick={() => setCompanycat(ind.name)}
                >
                  {ind.name}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {(companyQuery && isQuery) || companyCat ? (
        <div className="">
          <p className="text-lg">
            Search results : {isQuery ? companyQuery : companyCat}{" "}
          </p>
          {company_list ? (
            // <div className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[95vh] overflow-y-auto">
            <div className="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 h-[95vh] overflow-y-auto">
              {company_list.map((ind) => {
                return (
                  //   <Card className="bg-slate-500 text-white w-[20vw] h-fit cursor-pointer">
                  <Card
                    onClick={() => handelCompanyselected(ind.name)}
                    className="bg-blue-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                  >
                    <CardHeader className="p-4 border-b">
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        {ind.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        {ind.overview}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-gray-700">
                        AnnualRevenueUSD : {ind.annualRevenueUSD || "NA"}
                      </p>
                      <p>foundedYear : {ind.foundedYear || "NA"}</p>
                      <p>isAcquired : {ind.isAcquired || "NA"}</p>
                      <p>totalFundingUSD : {ind.totalFundingUSD || "NA"}</p>
                      <p>
                        totalEmployeeCount : {ind.totalEmployeeCount || "NA"}
                      </p>
                      <p>usesFacebookAds : {ind.usesFacebookAds || "NA"}</p>
                      <p>usesShopify : {ind.usesShopify || "NA"}</p>
                      <p>domainName : {ind.domainName || "NA"}</p>
                    </CardContent>

                    {/* <CardFooter>
                <p>Click to view analysis and further details</p>
            </CardFooter> */}
                  </Card>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
