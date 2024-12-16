import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface FilterBarProps {
  onFilter: (filters: any) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onFilter }) => {
  const [filters, setFilters] = React.useState({
    status: '',
    severity: '',
    agency: '',
    search: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search reports..."
            value={filters.search}
            onChange={handleChange}
          />
        </div>

        <select
          name="status"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={filters.status}
          onChange={handleChange}
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>

        <select
          name="severity"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={filters.severity}
          onChange={handleChange}
        >
          <option value="">All Severity</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>

        <select
          name="agency"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={filters.agency}
          onChange={handleChange}
        >
          <option value="">All Agencies</option>
          <option value="city">City</option>
          <option value="school">School</option>
          <option value="government">Government</option>
        </select>
      </div>
    </div>
  );
};