import {
    CalendarCheck,
    Clock,
    Cloud,
    CloudCog,
    Languages,
    ShieldCheck,
    Users,
  } from "lucide-react";
  import React from "react";
  import ObjectiveCard from "../ui/ObjectiveCard";
  
  function WhyDB(): JSX.Element {
    return (
      <section className="md:pt-56 pt-56 flex flex-col w-full min-h-screen p-10 md:px-60 md:pb-32 gap-10 bg-baige">
        {/* Title */}
        <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]  text-gray-800">
          Our Objectives
        </h2>
  
        {/* First Row of Cards */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
          <ObjectiveCard
            index={1}
            icon={
              <Clock
                className="rounded-full bg-pastelGreen p-4"
                color="black"
                width={65}
                height={65}
              />
            }
            title="Objective 01"
            desc="Reduce service downtime and economic loss by 80%."
          />
          <ObjectiveCard
            index={2}
            title={"Objective 02"}
            icon={
              <CloudCog
                className="rounded-full bg-pastelViolet p-4"
                color="black"
                width={65}
                height={65}
              />
            }
            desc="One of its kind cloud infra bringing info on fingertips and catering to all the parties involved for the long-term prosperity."
          />
        </div>
  
        {/* Second Row of Cards */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
          <ObjectiveCard
            index={3}
            icon={
              <Languages
                className="rounded-full bg-pastelBlue p-4"
                color="black"
                width={65}
                height={65}
              />
            }
            title={"Objective 03"}
            desc="Become pan India ready from Day 1, multilingual customer service, pan India service centers, spare parts storage, and logistics."
          />
          <ObjectiveCard
            index={4}
            icon={
              <Users
                className="rounded-full bg-baige p-4"
                color="black"
                width={65}
                height={65}
              />
            }
            title={"Objective 04"}
            desc="Service available for corporate and retail customers, helping all compete in a healthy environment."
          />
        </div>
      </section>
    );
  }
  
  export default WhyDB;