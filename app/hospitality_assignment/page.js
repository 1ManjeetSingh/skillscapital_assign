"use client";

import React, { useState, useEffect } from "react";
import data from "./hospitality_assignment_data.json";
import RenderData from "@/components/renderData";

const HospitalityAssignment = () => {
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const [filtered_data, setFiltered_data] = useState([]);

  useEffect(() => {
    setFiltered_data(
      data.filter((item) => {
        const matchesYear = year === "" || item.duration.includes(year);
        const matchesType = type === "" || item.propertyType.includes(type);
        return matchesYear && matchesType;
      })
    );
  }, [year, type]);

  return (
    <div className="flex flex-col px-2 md:px-[2vw]">
      <h1 className="text-2xl font-[500] mx-auto my-0 pt-4 pb-10 hidden sm:flex">
        Hospitality_Assignment_Data
      </h1>
      <h1 className="text-2xl font-[500] mx-auto my-0 pt-4 pb-10 flex sm:hidden">
        Hospitality_Data
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-start w-full gap-6 pb-2">
        <div className="flex flex-wrap w-fit gap-4">
          <label className="flex w-fit min-w-[100px] sm:min-w-[30px]">
            Year:
          </label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded-sm px-2"
          />
        </div>

        <div className="flex flex-wrap w-fit gap-4">
          <label className="flex w-fit min-w-[100px]">PropertyType:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-sm px-2"
          />
        </div>
      </div>
      <span className={`h-[1px] w-full bg-[#fff] mb-4`}></span>
      {filtered_data.map((item) => (
        <div key={item.id} className="flex flex-col py-2 gap-4">
          <h2 className="text-xl underline">Id: {item.id}</h2>

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-1/4 gap-3 min-w-[300px]">
              <p>Property</p>
              <h3 className="text-lg border w-fit px-4 shadow-[1px_1px_1px_#fff]">
                {item.property}
              </h3>
            </div>

            <div className="flex flex-col w-1/4 gap-2 min-w-[300px]">
              <p>Property-type</p>
              <h3 className="text-lg border w-fit px-4 shadow-[1px_1px_1px_#fff]">
                {item.propertyType}
              </h3>
            </div>

            <div className="flex flex-col w-1/4 gap-2 min-w-[300px]">
              <p>IsFlagship</p>
              <h3 className="text-lg border w-fit px-4 shadow-[1px_1px_1px_#fff]">
                {item.isFlagship ? "true" : "false"}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-1/4 gap-3 min-w-[300px]">
              <p>Role</p>
              <h3 className="text-lg border w-fit px-4 shadow-[1px_1px_1px_#fff]">
                {item.role}
              </h3>
            </div>

            <div className="flex flex-col w-1/4 gap-2 min-w-[300px]">
              <p>Location</p>
              <h3 className="text-lg border w-fit px-4 shadow-[1px_1px_1px_#fff]">
                {item.location}
              </h3>
            </div>

            <div className="flex flex-col w-1/4 gap-2 min-w-[300px]">
              <p>Duration</p>
              <h3 className="text-lg border w-fit px-4 shadow-[1px_1px_1px_#fff]">
                {item.duration}
              </h3>
            </div>
          </div>

          <div className="flex w-full gap-6">
            <div className="flex flex-col w-full gap-3">
              <p className="text-lg pt-2">Projects:</p>
              <div className="flex flex-wrap gap-6">
                {item?.projects.map((project) => (
                  <div
                    key={project?.id}
                    className="flex flex-col w-2/5 min-w-[300px] py-4 pr-2 md:pr-4 gap-2 border rounded-sm"
                  >
                    <RenderData data={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <span className={`h-[1px] w-full bg-[#fff] my-4`}></span>
        </div>
      ))}
    </div>
  );
};

export default HospitalityAssignment;
