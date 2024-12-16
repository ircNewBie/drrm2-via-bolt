export interface Report {
  id: string;
  title: string;
  description: string;
  location: string;
  agency: string;
  status: 'pending' | 'in-progress' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  dateReported: Date;
  attachments: File[];
  reporterInfo: {
    name: string;
    agency: string;
    contact: string;
  };
}

export interface Agency {
  id: string;
  name: string;
  type: 'city' | 'school' | 'government';
  jurisdiction: string;
}