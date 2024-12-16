import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldExclamationIcon, ClipboardDocumentCheckIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Disaster Risk Management System
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A comprehensive platform for monitoring and managing disaster-related events, 
              calamities, and incidents. Enabling efficient reporting and response coordination 
              across government agencies.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/new-report"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Submit Report
              </Link>
              <Link
                to="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
              >
                View Dashboard <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Comprehensive Monitoring
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage disaster risks
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <ShieldExclamationIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-auto flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Incident Reporting
                </h3>
                <p className="mt-1 flex flex-auto text-base leading-7 text-gray-600">
                  Submit detailed reports with photos and videos of incidents, accidents, 
                  or calamities in your area.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-auto flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Response Tracking
                </h3>
                <p className="mt-1 flex flex-auto text-base leading-7 text-gray-600">
                  Monitor government agencies' responses and actions towards reported 
                  incidents in real-time.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <BuildingLibraryIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-auto flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Agency Coordination
                </h3>
                <p className="mt-1 flex flex-auto text-base leading-7 text-gray-600">
                  Efficient coordination between different government agencies for 
                  faster disaster response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};