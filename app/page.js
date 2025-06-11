import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Fragment } from "react";

const navDowns = [
  {
    name: "SAP Talent Cloud",
    submenu: [],
  },
  {
    name: "Enterprise Talent Cloud",
    submenu: [],
  },
  {
    name: "AI-Powered Vetting",
    submenu: [],
  },
  {
    name: "Tech Talent Solutions",
    submenu: [],
  },
  {
    name: "About Us",
    submenu: [],
  },
];

const linesList = [
  [
    "Keyword matching",
    "Optional coding test",
    "Ignored communication",
    "Unknown availability",
    "No context",
  ],
  [
    "JD-to-Profile Match via AI",
    "Stack depth + delivery track record",
    "Soft skill + sentiment scoring",
    "Live availability, time zone, readiness",
    "Domain + persona + delivery fit scoring",
  ],
];

const candidateData = [
  {
    image: "./m_image1.png",
    role: "Backend Engineer (Node + Microservices)",
    jdMatch: 93,
    more: {
      Persona: "Positive, CEFR C1, Clear communicator",
      Availability: "immediate",
      "Domain Fit": "Fintech, 6+ years",
      "Reference Score": 5,
      Readiness: "Ready in 48 hours",
    },
  },
  {
    image: "./m_image2.png",
    role: "Backend Engineer (Node + Microservices)",
    jdMatch: 89,
    more: {
      Persona: "Positive, CEFR C1, Clear communicator",
      Availability: "immediate",
      "Domain Fit": "Fintech, 4+ years",
      "Reference Score": 4,
      Readiness: "Ready in 48 hours",
    },
  },
  {
    image: "./m_image3.png",
    role: "Backend Engineer (Node + Microservices)",
    jdMatch: 95,
    more: {
      Persona: "Positive, CEFR C1, Clear communicator",
      Availability: "15 days",
      "Domain Fit": "Fintech, 7+ years",
      "Reference Score": 5,
      Readiness: "Ready in 48 hours",
    },
  },
];

export default function Home() {
  return (
    <div className="bg-[#f4f6fc] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* <------------------ navbar -----------------------> */}
      <nav className="flex items-center justify-center w-full h-[10vh] min-h-[60px] bg-white">
        <div className="flex w-fit h-full gap-8 items-center text-[#282938]">
          <h1 className="text-[#1C1E53] text-[20px] font-bold mr-6">
            SkillsCapital
          </h1>

          {navDowns.map((item, index) => {
            return (
              <h2 key={index} className="flex items-center text-[14px] gap-2">
                <span>{item.name}</span>
                <span>
                  <FaAngleDown />
                </span>
              </h2>
            );
          })}

          <button className="flex border border-gray-300 rounded-full pl-4 pr-2 py-2 gap-2 text-[16px] ml-6">
            <span className="text-[#282938] font-[600]">Find Talent</span>
            <span className="p-1 bg-[#fcd980] rounded-full">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </nav>

      <main className="flex flex-col w-full items-center sm:items-start">
        {/* <---------------------- first section ----------------------> */}
        <section className="flex w-full h-[90vh] min-h-[400px]">
          {/* Right part */}
          <div className="flex justify-end w-1/2 h-full bg-gradient-to-r from-[#002C59] to-[#003361] px-10 text-white">
            <div className="flex w-full flex-col gap-4 justify-center max-w-[552px]">
              <div className="text-[48px] font-bold">
                <span>
                  Hire Smarter. Scale Faster. Deliver With Confidence.
                </span>
              </div>

              <div className="text-[16px]">
                <span>
                  Our AI-powered vetting engine ensures every tech consultant
                  you interview is already proven —
                  <i className="text-[#b0a372]">
                    technically, behaviorally, and contextually.
                  </i>
                </span>
              </div>

              <div className="flex gap-4 mt-10">
                <button className="flex bg-[#fcd980] rounded-full rounded-full px-10 py-2 gap-2 text-[16px] font-bold">
                  <span className="text-[#282938]">See Vetted Talent </span>
                </button>
                <button className="flex rounded-full items-center px-2 py-2 gap-2 text-[16px]">
                  <span>Get Precision Match Report</span>
                  <span>
                    <FaArrowRightLong />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* left part */}
          <div className="relative inset-0 flex items-center justify-center w-1/2 h-full">
            <img
              src="/image 2148.png"
              alt="background image 1"
              className="object-cover w-full h-full z-[0]"
            />
            <div className="absolute flex w-full h-full top-0 left-0 bg-[linear-gradient(to_right,_#003361_10%,rgba(0,0,0,0))]"></div>
          </div>
        </section>

        {/* <-------------------- second section ------------------------> */}
        <section className="flex flex-col w-full md:px-[4vw] py-16 items-center gap-10">
          <div className="flex flex-col gap-4 w-fit">
            <p className="flex max-w-[620px] text-[#282938] text-[50px] text-center font-bold leading-[64px]">
              It’s Not Just About Skills, It’s About Who Delivers
            </p>
            <p className="flex w-full justify-center text-[#464646] text-[16px]">
              Smarter vetting means faster starts, stronger delivery, and fewer
              surprises.
            </p>
          </div>

          <div className="flex w-full justify-center gap-3">
            {/* first card */}
            <div className="flex flex-col p-8 gap-2 bg-[#1a1f36] rounded-xl max-w-sm">
              <img
                className="w-[100px] h-auto"
                src="./Frame 4221.svg"
                alt="icon"
              />
              <h3 className="text-[28px] font-[600]">Fewer Interviews</h3>
              <p className="font-[400] text-[rgba(255,255,255,0.7)]">
                Our AI-powered vetting engine minimizes the need for multiple
                interviews by presenting only the most relevant, high-fit tech
                consultants. Each candidate is pre-assessed for technical
                skills, behavioral traits, and contextual alignment, ensuring a
                more precise match. This means you spend less time screening and
                more time focusing on building your team and achieving your
                business goals.
              </p>
            </div>

            {/* 2nd and 3rd card */}
            <div className="flex flex-col max-w-sm gap-2">
              <div className="flex flex-col p-8 gap-1 bg-white rounded-xl max-w-sm">
                <img
                  className="w-[100px] h-auto"
                  src="./Frame 4222.svg"
                  alt="icon"
                />
                <h3 className="text-[28px] text-[#282938] font-[600]">
                  Faster Time to Start
                </h3>
                <p className="font-[400] text-[rgba(40,41,56,0.7)]">
                  Quickly onboard vetted talent and kick off projects in less
                  than 5 days.
                </p>
              </div>
              <div className="flex flex-col p-8 gap-1 bg-white rounded-xl max-w-sm">
                <img
                  className="w-[100px] h-auto"
                  src="./Frame 4224.svg"
                  alt="icon"
                />
                <h3 className="text-[28px] text-[#282938] font-[600]">
                  Project Velocity
                </h3>
                <p className="font-[400] text-[rgba(40,41,56,0.7)]">
                  Accelerate sprint progress with talent that hits the ground
                  running.
                </p>
              </div>
            </div>

            {/* 4th and 5th card */}
            <div className="flex flex-col max-w-sm gap-2">
              <div className="flex flex-col p-8 gap-1 bg-white rounded-xl max-w-sm">
                <img
                  className="w-[100px] h-auto"
                  src="./Frame 4223.svg"
                  alt="icon"
                />
                <h3 className="text-[28px] text-[#282938] font-[600]">
                  Continuity Confidence
                </h3>
                <p className="font-[400] text-[rgba(40,41,56,0.7)]">
                  Rely on consistent, committed talent with lower churn and
                  fewer disruptions.
                </p>
              </div>
              <div className="flex flex-col p-8 gap-1 bg-white rounded-xl max-w-sm">
                <img
                  className="w-[100px] h-auto"
                  src="./Frame 4225.svg"
                  alt="icon"
                />
                <h3 className="text-[28px] text-[#282938] font-[600]">
                  Stakeholder Trust
                </h3>
                <p className="font-[400] text-[rgba(40,41,56,0.7)]">
                  Build confidence with full visibility into talent persona and
                  delivery reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <-------------------- Third section ------------------------> */}
        <section className="flex flex-col w-full md:px-[4vw] py-16 items-center gap-10">
          <div className="flex flex-col gap-4 w-fit">
            <p className="flex max-w-[668px] text-[#282938] text-[50px] text-center font-bold leading-[64px]">
              More Than Just Code Tests
            </p>
            <p className="flex w-full justify-center text-[#464646] text-[16px]">
              From skill match to business impact — vetting that sees the whole
              picture.
            </p>
          </div>

          <div className="flex w-full justify-center gap-6">
            {/* 1st card */}
            <div className="flex flex-col w-full p-8 gap-6 bg-white rounded-xl max-w-xl">
              <div className="flex gap-4">
                <img
                  className="w-[64px] h-auto"
                  src="./svg1.svg"
                  alt="dvg-icon"
                />
                <h3 className="flex items-center text-[28px] text-[#282938] font-[600]">
                  Traditional Vetting
                </h3>
              </div>

              <div className="flex flex-col gap-2 w-full">
                {linesList[0].map((line, index) => {
                  return (
                    <Fragment key={index}>
                      <p className="font-[400] text-[rgba(40,41,56,0.7)]">
                        {line}
                      </p>
                      <span
                        className={`h-[1px] w-full bg-[rgba(40,41,56,0.7)] ${
                          index == linesList[1].length - 1 ? "hidden" : ""
                        }`}
                      ></span>
                    </Fragment>
                  );
                })}
              </div>
            </div>

            {/* 2nd card */}
            <div className="flex flex-col w-full p-8 gap-6 bg-[#1a1f36] rounded-xl max-w-xl">
              <div className="flex gap-4">
                <img
                  className="w-[64px] h-auto"
                  src="./svg2.svg"
                  alt="dvg-icon"
                />
                <h3 className="flex items-center text-[28px] font-[600]">
                  SkillsCapital Vetting
                </h3>
              </div>

              <div className="flex flex-col gap-2 w-full">
                {linesList[1].map((line, index) => {
                  return (
                    <Fragment key={index}>
                      <p className="font-[400] text-[rgba(255,255,255,0.7)]">
                        {line}
                      </p>
                      <span
                        className={`h-[1px] w-full bg-[rgba(255,255,255,0.7)] ${
                          index == linesList[1].length - 1 ? "hidden" : ""
                        }`}
                      ></span>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* <-------------------- Forth section ------------------------> */}
        <section className="flex flex-col w-full md:px-[4vw] py-16 items-center gap-10">
          <div className="flex flex-col gap-4 w-fit">
            <p className="flex max-w-[668px] text-[#282938] text-[50px] text-center font-bold leading-[64px]">
              Precision Match, Explained
            </p>
            <p className="flex w-full justify-center text-[#464646] text-[16px]">
              Rigorous Screening, Real Expertise—So You Hire with Confidence.
            </p>
          </div>

          <div className="flex w-full justify-center gap-6">
            {/* 1st card */}
            <div className="flex flex-col items-center w-full gap-6">
              <img className="md:px-[6vw]" src="./Group 2431.png" alt="image" />
              <button className="flex w-fit items-center bg-[#fcd980] text-[#282938] rounded-full rounded-full px-10 py-3 gap-2 text-[16px] font-bold">
                <span>View Match Engine Demo</span>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </section>

        {/* <------------------- Fifth Section --------------------> */}
        <section className="flex flex-col w-full md:px-[4vw] py-12 items-center gap-10 bg-[url('/bluebg.png')] bg-right-top bg-no-repeat bg-cover filter brightness-70">
          
          <div className="flex flex-col gap-4 w-fit">
            <p className="flex max-w-[720px] text-[50px] text-center font-bold leading-[64px]">
              The Talent You Can Count On
            </p>
            <p className="flex w-full justify-center text-[16px]">
              Precision-vetted professionals with proven domain expertise and
              delivery track record.
            </p>
          </div>

          <div className="flex flex-wrap w-full justify-start xl:justify-center gap-6">
            {candidateData.map((item, idx) => {
              let bgColorClass = "bg-green-600";
              if (item.jdMatch < 50) {
                bgColorClass = "bg-red-600";
              } else if (item.jdMatch < 80) {
                bgColorClass = "bg-orange-600";
              } else {
                bgColorClass = "bg-green-600";
              }

              return (
                <div key={idx} className="bg-white max-w-[360px] rounded-xl">
                  <img
                    className="rounded-t-xl"
                    src={item.image}
                    alt="candidate image"
                  />

                  <div className="flex flex-col text-[#282938] px-4 py-2 gap-1">
                    <p className="font-[600]">
                      Role: <span>{item.role}</span>
                    </p>
                    <span
                      className={`h-[1px] w-full bg-[rgba(40,41,56,0.7)] my-2`}
                    ></span>
                    <p className="text-[14px] mb-1">
                      JD Match: <span>{item.jdMatch}%</span>
                    </p>
                    <p className="flex justify-start w-full h-[24px] py">
                      <span
                        className={`flex h-full rounded-lg ${bgColorClass}`}
                        style={{ width: `${item.jdMatch}%` }}
                      ></span>
                    </p>
                    <span
                      className={`h-[1px] w-full bg-[rgba(40,41,56,0.7)] my-2`}
                    ></span>
                    <div className="flex flex-col gap-1">
                      {Object.entries(item.more).map(([key, value]) => (
                        <p key={key} className="flex text-[14px]">
                          <span className="flex font-[600] min-w-[160px]">
                            {key}:
                          </span>
                          <span className="">{value}</span>
                        </p>
                      ))}
                    </div>
                    <button className="flex w-full justify-center items-center bg-[#282938] text-white rounded-full rounded-full px-10 py-3 my-2 gap-2 text-[14px]">
                      <span>View Full Persona Report</span>
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
