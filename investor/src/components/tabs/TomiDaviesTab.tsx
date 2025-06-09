
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExportControls } from '../ExportControls';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, FileText, Users } from 'lucide-react';

export const TomiDaviesTab = () => {
  return (
    <div className="space-y-6">
      <ExportControls tabName="Tomi Davies - Governance & Control" theme="tomi" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Tomi Davies – Governance & Control</h2>
        <p className="opacity-90">President, African Business Angel Network (ABAN)</p>
        <p className="text-sm mt-2 opacity-80">"Is this business mature enough to hold investor money, or will it leak it?"</p>
      </div>

      {/* 3-Panel Financials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-900">P&L Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue (MTD)</span>
              <span className="font-bold text-green-600">₦4,850,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">COGS</span>
              <span className="font-bold">₦2,430,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Operating Expenses</span>
              <span className="font-bold">₦1,200,000</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-800 font-medium">Net Profit</span>
              <span className="font-bold text-green-600">₦1,220,000</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-900">Balance Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Assets</span>
              <span className="font-bold">₦8,450,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Current Liabilities</span>
              <span className="font-bold">₦650,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Equity</span>
              <span className="font-bold">₦7,800,000</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-800 font-medium">Debt-to-Equity</span>
              <span className="font-bold text-green-600">0.08</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-900">Cash Flow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Operating CF</span>
              <span className="font-bold text-green-600">₦1,180,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Investing CF</span>
              <span className="font-bold text-red-600">-₦320,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Financing CF</span>
              <span className="font-bold">₦0</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-800 font-medium">Net CF</span>
              <span className="font-bold text-green-600">₦860,000</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Red Flag System & Immutable Logs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Red Flag Trigger System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-red-700">Unapproved Refund</span>
                <Badge variant="destructive">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-yellow-700">DA Exposure &gt; ₦0</span>
                <Badge variant="outline" className="text-yellow-600">Warning</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-green-700">Policy Compliance</span>
                <Badge variant="outline" className="text-green-600">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Clean
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-blue-900">
              <FileText className="mr-2 h-5 w-5" />
              Immutable Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              <div className="text-xs border-l-4 border-red-400 pl-3 py-2">
                <span className="font-medium">2024-12-06 14:23</span> - Refund Override: ₦15,000 (Admin: John)
              </div>
              <div className="text-xs border-l-4 border-blue-400 pl-3 py-2">
                <span className="font-medium">2024-12-06 12:15</span> - System Exception: Payment mismatch resolved
              </div>
              <div className="text-xs border-l-4 border-green-400 pl-3 py-2">
                <span className="font-medium">2024-12-06 10:30</span> - Board Resolution: Approved Q4 budget
              </div>
              <div className="text-xs border-l-4 border-yellow-400 pl-3 py-2">
                <span className="font-medium">2024-12-05 16:45</span> - Policy Update: DA exposure limit reduced
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Board Governance & Cap Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-blue-900">
              <Users className="mr-2 h-5 w-5" />
              Board Governance Hub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <span className="font-medium">Next Board Meeting</span>
                  <p className="text-sm text-gray-600">December 15, 2024</p>
                </div>
                <Badge className="bg-blue-100 text-blue-700">Scheduled</Badge>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Recent Resolutions</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Q4 Budget Approval</span>
                    <span className="text-green-600">✓ Passed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing Investment</span>
                    <span className="text-green-600">✓ Passed</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">Dynamic Cap Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Founder Equity</span>
                <span className="font-bold">75.0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Angel Round</span>
                <span className="font-bold">15.0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Employee Pool</span>
                <span className="font-bold">8.0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Advisors</span>
                <span className="font-bold">2.0%</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Last Updated</span>
                  <span>Dec 1, 2024</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Investor Digest */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-900">Monthly Investor Digest - Ready for Export</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">₦1.22M</div>
              <div className="text-sm text-gray-600">Net Profit (MTD)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">₦860K</div>
              <div className="text-sm text-gray-600">Cash Flow</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-gray-600">Days Runway</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2</div>
              <div className="text-sm text-gray-600">Active Flags</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
