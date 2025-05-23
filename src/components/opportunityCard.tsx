
import { BriefcaseIcon, MapPinIcon } from "lucide-react";
import type { Opportunity } from "../types/opportunity";

interface Props {
  // The opportunity data to display
  opportunity: Opportunity;
  onClick?: () => void;
}

export default function OpportunityCard({ opportunity, onClick }: Props) {
  return (

    <div
      className="border p-6 rounded-2xl bg-gray-40 shadow-xl hover:shadow-xl hover:text-black hover:bg-gray-50 transition duration-200 cursor-pointer"
      onClick={onClick}
    >
     
      <h3 className="text-xl font-bold mt-2 ">{opportunity.title}</h3>

      <p className=" font-medium flex items-center gap-1 mt-2">
        <BriefcaseIcon className="w-4 h-4" /> {opportunity.organization}
      </p>

    
      <p className="text-sm font-medium flex items-center gap-1 mt-2">
        <MapPinIcon className="w-4 h-4" /> {opportunity.location}
      </p>

   
      <p className="text-sm text-gray-400 font-bold mt-2">
        Posted on {opportunity.datePosted}
      </p>
    </div>
  );
}
