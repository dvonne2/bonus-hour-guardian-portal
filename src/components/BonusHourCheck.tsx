
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, AlertTriangle } from 'lucide-react';

const BonusHourCheck = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Check if it's Saturday after 22:59 or Sunday before 00:00
  const isBonusHour = (currentDay === 6 && (currentHour > 22 || (currentHour === 22 && currentMinute >= 59))) || 
                      (currentDay === 0 && currentHour === 0);

  if (isBonusHour) {
    return null; // Don't render this component during bonus hour
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-orange-900 p-4">
      <Card className="w-full max-w-lg shadow-2xl border-0">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">Bonus Hour Unavailable</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Current Time: {now.toLocaleString()}</span>
          </div>

          <div className="p-6 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Access Restricted</h3>
            <p className="text-red-700 mb-4">
              The Bonus Hour View is only available during the designated review window:
            </p>
            <div className="text-red-800 font-bold text-xl">
              Saturday 10:59 PM - Sunday 12:00 AM
            </div>
          </div>

          <div className="text-gray-600">
            <p>Please return during the bonus review window to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-left">
              <li>Review staff performance metrics</li>
              <li>Approve or block bonus payments</li>
              <li>View department rankings</li>
              <li>Access business health reports</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusHourCheck;
