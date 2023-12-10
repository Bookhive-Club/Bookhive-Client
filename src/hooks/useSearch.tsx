import { useEffect, useState } from "react";

type SearchTerms = {
  input: string;
  toFilter: any[];
  fieldsToSearch: string[];
};

export const useSearchFilter = ({
  input,
  toFilter,
  fieldsToSearch,
}: SearchTerms) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    if (input && toFilter && toFilter.length > 0 && fieldsToSearch.length > 0) {
      const filtered = toFilter.filter((value) =>
        fieldsToSearch.some(
          (field) => value[field]?.toLowerCase().includes(input.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [input, toFilter, fieldsToSearch]);

  return { filteredData, setSearchTerm };
};
