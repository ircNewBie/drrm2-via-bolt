import React from 'react';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import type { Report } from '@/types';

interface ReportListProps {
  reports: Report[];
  onReportClick: (report: Report) => void;
}

export const ReportList: React.FC<ReportListProps> = ({ reports, onReportClick }) => {
  if (reports.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No reports found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {reports.map((report) => (
          <li key={report.id}>
            <button
              onClick={() => onReportClick(report)}
              className="block hover:bg-gray-50 w-full text-left"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <p className="text-sm font-medium text-blue-600 truncate">
                      {report.title}
                    </p>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                    <Badge className={getSeverityColor(report.severity)}>
                      {report.severity}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(report.dateReported)}
                  </div>
                </div>
                <div className="mt-2">
                  <div className="sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {report.location}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      {report.agency}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};