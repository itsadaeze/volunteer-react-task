import { useEffect, useState } from "react";


import FilterBar from "../components/filterBar";
import OpportunityForm from "../components/opportunityForm";
import axios from "axios";
import OpportunityDetailsModal from "../components/opportunityDetailsModal";
import OpportunityCard from "../components/opportunityCard";
import type { Opportunity } from "../types/opportunity";

export default function Home() {
  // State to hold all volunteer opportunities fetched from json-server
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  // Search input state to filter opportunities by title or organization
  const [search, setSearch] = useState("");

  // Category filter state to filter opportunities by category
  const [category, setCategory] = useState("");

  // Boolean state to control visibility of the add opportunity form modal
  const [showFormModal, setShowFormModal] = useState(false);

  const [selectedOpportunity, setSelectedOpportunity] =
    useState<Opportunity | null>(null);

  // On component mount, fetch opportunities from the json-server
  useEffect(() => {
    axios
      .get("http://localhost:3001/opportunities")
      .then((res) => setOpportunities(res.data)) // Set fetched opportunities in state
      .catch((err) => console.error(err));      // Log error if fetch fails
  }, []);

  // Handler for adding a new opportunity via POST request
  const handleAdd = async (newOp: Opportunity) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/opportunities",
        newOp
      );
      // Add the new opportunity to the top of the list
      setOpportunities((prev) => [res.data, ...prev]);
      setShowFormModal(false); // Close the form modal after successful add
    } catch (err) {
      console.error("Failed to add:", err); // Log error if POST fails
    }
  };

  // Filter opportunities based on search text and selected category
  const filtered = opportunities.filter(
    (op) =>
      // Check if title or organization matches the search (case-insensitive)
      (op.title.toLowerCase().includes(search.toLowerCase()) ||
        op.organization.toLowerCase().includes(search.toLowerCase())) &&
      // If category is selected, filter by category; otherwise include all
      (category ? op.category === category : true)
  );

  return (
    <div className="max-w-[2500px] py-10">
      
     
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl md:text-3xl font-bold">Volunteer Opportunities</h1>
        <button
          onClick={() => setShowFormModal(true)} // Show add form modal when clicked
          className="bg-blue-600 text-white text-sm md:text-lg px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add Opportunity
        </button>
      </div>

      <FilterBar
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

  
      <div className="grid gap-4 grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {filtered.map((op) => (
          <OpportunityCard
            key={op.id}
            opportunity={op}
            onClick={() => setSelectedOpportunity(op)} // Open details modal on click
          />
        ))}
      </div>

      {/* Modal for adding a new opportunity */}
      {showFormModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg relative">
            {/* Close button to hide the add opportunity form */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowFormModal(false)}
            >
              ✕
            </button>
          
            <OpportunityForm onAdd={handleAdd} />
          </div>
        </div>
      )}

      {/* Modal for displaying details of the selected opportunity */}
      {selectedOpportunity && (
        <OpportunityDetailsModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)} // Close modal on close action
        />
      )}
    </div>
  );
}

