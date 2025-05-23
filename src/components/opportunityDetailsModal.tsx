
import { XIcon, MailIcon } from "lucide-react";
import type { Opportunity } from "../types/opportunity";

interface Props {
  opportunity: Opportunity;  // The opportunity object whose details to display
  onClose: () => void;       // Callback to close the modal
}

export default function OpportunityDetailsModal({
  opportunity,
  onClose,
}: Props) {
  return (
  
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      
      
      <div className="bg-white p-6 rounded-lg max-w-lg relative w-[95%] md:w-full">
        
        
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose} // Calls onClose callback to close modal when clicked
        >
          <XIcon className="w-5 h-5" />
        </button>

      
        <h2 className="text-xl font-bold mb-2 text-black">{opportunity.title}</h2>

      
        <p className="text-black mb-1">{opportunity.organization}</p>


        <p className="text-sm text-black mb-4">{opportunity.location}</p>

     
        <div className="space-y-2 text-sm text-black">
      
          <p>
            <strong>Description:</strong>{" "}
            {opportunity.description || "No description provided."}
          </p>


          <p>
            <strong>Duration:</strong> {opportunity.duration || "N/A"}
          </p>

 
          <p>
            <strong>Skills Required:</strong>{" "}
            {opportunity.skills || "None specified."}
          </p>

       
          <p className="flex items-center gap-1">
            <MailIcon className="w-4 h-4" />
            <span>{opportunity.email || "No contact provided."}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
