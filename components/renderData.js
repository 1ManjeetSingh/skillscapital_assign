import React from "react";

const RenderData = ({ data }) => {
    
  if (data === null) return <span>null</span>;

  if (typeof data === "string" || typeof data === "number")
    return <span>{data}</span>;

  if (Array.isArray(data)) {
    return (
      <ul className="pl-4 list-type-none">
        {data.map((item, idx) => (
          <li key={idx}>
            <RenderData data={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (typeof data === "object") {
    return (
      <div className="pl-4 space-y-1">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <strong className="capitalize">{key}: </strong>{" "}
            <RenderData data={value} />
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default RenderData;
