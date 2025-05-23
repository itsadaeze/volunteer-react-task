
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
    // Modal backdrop with blur effect and semi-transparent white overlay
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      
      {/* Modal content container with padding, rounded corners, max width, and relative positioning */}
      <div className="bg-white p-6 rounded-lg max-w-lg relative w-[95%] md:w-full">
        
        {/* Close button positioned in top-right corner */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose} // Calls onClose callback to close modal when clicked
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Opportunity title */}
        <h2 className="text-xl font-bold mb-2 text-black">{opportunity.title}</h2>

        {/* Organization name */}
        <p className="text-black mb-1">{opportunity.organization}</p>

        {/* Location */}
        <p className="text-sm text-black mb-4">{opportunity.location}</p>

        {/* Details section with spacing between items and smaller text */}
        <div className="space-y-2 text-sm text-black">
          {/* Description with fallback text if empty */}
          <p>
            <strong>Description:</strong>{" "}
            {opportunity.description || "No description provided."}
          </p>

          {/* Duration with fallback */}
          <p>
            <strong>Duration:</strong> {opportunity.duration || "N/A"}
          </p>

          {/* Skills required with fallback */}
          <p>
            <strong>Skills Required:</strong>{" "}
            {opportunity.skills || "None specified."}
          </p>

          {/* Contact email with mail icon and fallback */}
          <p className="flex items-center gap-1">
            <MailIcon className="w-4 h-4" />
            <span>{opportunity.email || "No contact provided."}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
