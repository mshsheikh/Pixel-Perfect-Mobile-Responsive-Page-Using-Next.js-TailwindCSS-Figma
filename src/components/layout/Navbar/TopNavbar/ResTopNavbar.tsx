import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { NavMenu } from "../navbar.types";

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  return (
    <div className="flex flex-col items-start">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item.type === "MenuItem" && (
            <Link href={" "} className="mb-4">
              {item.label}
            </Link>
          )}
          {item.type === "MenuList" && (
            <div className="mb-4 w-full">
              <div className="text-left p-0 py-0.5 font-normal text-base">
                {item.label}
              </div>
              <div className="p-4 pb-0 border-l flex flex-col">
                {item.children.map((itemChild, idx) => (
                  <Link key={itemChild.id} href={" "} className="w-fit py-2 text-base">
                    {itemChild.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResTopNavbar;
