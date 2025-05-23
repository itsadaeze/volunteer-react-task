interface Props {
  search: string;
  category: string;
  onSearchChange: (val: string) => void;
  onCategoryChange: (val: string) => void;
}

export default function FilterBar({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex justify-between  gap-4 mb-4 mt-10">
      
      {/* search based on title or organization */}
      <input
        type="text"
        placeholder="Search title or organization..."
        className="border rounded-xl px-3 py-2  md:w-1/4"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

       {/* filters based on category */}
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border rounded-xl px-3  py-2 md:w-[20%]"
      >
        <option value="">All Categories</option>
        <option value="Environment">Environment</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
      </select>
    </div>
  );
}
