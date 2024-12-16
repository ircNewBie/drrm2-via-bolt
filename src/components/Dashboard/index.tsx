import React from 'react';
import { ReportList } from './ReportList';
import { FilterBar } from './FilterBar';
import { StatsOverview } from './StatsOverview';
import type { Report } from '@/types';

interface DashboardProps {
  reports: Report[];
  onReportClick: (report: Report) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ reports, onReportClick }) => {
  const [filteredReports, setFilteredReports] = React.useState<Report[]>(reports);

  const handleFilter = (filters: any) => {
    // Apply filters logic here
    const filtered = reports.filter(report => {
      if (filters.status && report.status !== filters.status) return false;
      if (filters.severity && report.severity !== filters.severity) return false;
      if (filters.agency && report.agency !== filters.agency) return false;
      return true;
    });
    setFilteredReports(filtered);
  };

  return (
    <div className="space-y-6">
      <StatsOverview reports={reports} />
      <FilterBar onFilter={handleFilter} />
      <ReportList reports={filteredReports} onReportClick={onReportClick} />
    </div>
  );
};