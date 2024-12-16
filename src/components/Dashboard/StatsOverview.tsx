import React from 'react';
import type { Report } from '@/types';
import {
  ShieldExclamationIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

interface StatsOverviewProps {
  reports: Report[];
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ reports }) => {
  const stats = React.useMemo(() => {
    return {
      total: reports.length,
      pending: reports.filter(r => r.status === 'pending').length,
      inProgress: reports.filter(r => r.status === 'in-progress').length,
      resolved: reports.filter(r => r.status === 'resolved').length,
    };
  }, [reports]);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Reports"
        value={stats.total}
        icon={ShieldExclamationIcon}
        color="bg-blue-500"
      />
      <StatCard
        title="Pending"
        value={stats.pending}
        icon={ClockIcon}
        color="bg-yellow-500"
      />
      <StatCard
        title="In Progress"
        value={stats.inProgress}
        icon={ExclamationTriangleIcon}
        color="bg-orange-500"
      />
      <StatCard
        title="Resolved"
        value={stats.resolved}
        icon={CheckCircleIcon}
        color="bg-green-500"
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ComponentType<any>;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className={`flex-shrink-0 rounded-md p-3 ${color} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-lg font-semibold text-gray-900">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);