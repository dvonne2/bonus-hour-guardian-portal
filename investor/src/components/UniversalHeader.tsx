
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const UniversalHeader = () => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold">Vitalvida Investor Portal</h2>
            <Badge variant="outline" className="bg-green-50 text-green-700">Live</Badge>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Cash Balance:</span>
              <span className="font-bold text-green-600">₦2,450,000</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Orders Today:</span>
              <span className="font-bold">47</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Runway:</span>
              <span className="font-bold text-blue-600">156 days</span>
            </div>
            
            <Badge variant="destructive" className="animate-pulse">
              2 Alerts
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
