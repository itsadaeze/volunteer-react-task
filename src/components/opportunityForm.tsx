import { useState } from "react";

import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import type { Opportunity } from "../types/opportunity";

interface Props {
  // callback function prop to add a new opportunity
  onAdd: (op: Opportunity) => void;
}

export default function OpportunityForm({ onAdd }: Props) {
  // State to hold any email validation error message
  const [emailError, setEmailError] = useState("");

  // State to hold the form data with initial empty/default values
  const [form, setForm] = useState<Opportunity>({
    id: Date.now(), // Unique ID based on current timestamp
    title: "",
    organization: "",
    location: "",
    datePosted: new Date().toISOString().split("T")[0], // Current date formatted as YYYY-MM-DD
    category: "",
    description: "",
    duration: "",
    skills: "",
    email: "",
  });

  // Handler for input, select, and textarea changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Update the form state by changing only the field that was edited
    setForm((prev) => ({ ...prev, [name]: value }));

    // If the changed field is "email", validate the email format
    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailError(isValid ? "" : "Enter a valid email");
    }
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // If email is empty or invalid, alert the user and prevent submission
    if (!form.email || emailError) {
      alert("Please enter a valid email before submitting.");
      return;
    }

    // Call the onAdd prop with the form data and assign a new id
    onAdd({ ...form, id: Date.now() });

    // Reset the form state to initial empty values after successful submission
    setForm({
      id: Date.now(),
      title: "",
      organization: "",
      location: "",
      datePosted: new Date().toISOString().split("T")[0],
      category: "",
      email: "",
      description: "",
      duration: "",
      skills: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded mb-6 shadow-sm">
    
      <h2 className="font-bold text-lg  flex items-center gap-2 text-black mt-5 mb-5">
        <ClipboardDocumentListIcon className="w-6 h-6 text-black" />
        Add New Opportunity
      </h2>

   
      <div className="grid grid-cols-2 gap-4 text-black ">
       
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border px-2 py-1 rounded-lg mt-4"
          required
        />

        <input
          name="organization"
          value={form.organization}
          onChange={handleChange}
          placeholder="Organization"
          className="border px-2 py-1 rounded-lg mt-4"
          required
        />

   
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border px-2 py-1 rounded-lg mt-4"
          required
        />

 
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border px-2 py-1 rounded-lg mt-4"
          required
        >
          <option value="">Select Category</option>
          <option value="Environment">Environment</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
        </select>

        
        <input
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration (e.g. 3 months)"
          className="border px-2 rounded-lg mt-4 py-1"
        />

  
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Contact Email"
          className="border px-2 rounded-lg mt-4 py-1"
        />
        {/* Display email error message if any */}
        {emailError && (
          <p className="text-red-600 text-sm col-span-2">{emailError}</p>
        )}

  
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Opportunity description"
          className="border px-2 py-1 rounded-lg mt-4 w-full"
          rows={3}
        />


        <input
          name="skills"
          value={form.skills}
          onChange={handleChange}
          placeholder="Skills required (comma-separated)"
          className="border px-2 py-1 rounded-lg mt-2 w-full"
        />
      </div>


      <button
        type="submit"
        className=" bg-blue-600 hover:bg-blue-700 text-white w-full px-4 py-2 mt-7 rounded-lg transition"
      >
        Add
      </button>
    </form>
  );
}
