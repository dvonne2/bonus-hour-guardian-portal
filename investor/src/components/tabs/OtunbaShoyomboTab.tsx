
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExportControls } from '../ExportControls';
import { Wallet, TrendingUp, AlertCircle, FileText, Package2, DollarSign } from 'lucide-react';

export const OtunbaShoyomboTab = () => {
  return (
    <div className="space-y-6">
      <ExportControls tabName="Otunba Shoyombo - Owner's Dashboard" theme="otunba" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-800 to-green-700 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Otunba Shoyombo – Owner's Dashboard</h2>
        <p className="opacity-90">Traditional Nigerian Business Mogul & FMCG Investor</p>
        <p className="text-sm mt-2 opacity-80">"Where's my money? Who touched it? Did we make profit this week?"</p>
      </div>

      {/* Cash Position & Sales vs Payments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Wallet className="mr-2 h-5 w-5" />
              Daily Cash Position
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="cash-account">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">Moniepoint Business</span>
                  <span className="text-lg font-bold text-green-600">₦2,180,000</span>
                </div>
                <div className="text-xs text-gray-600">Last updated: 2 hours ago</div>
              </div>
              <div className="cash-account">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">GTB Current Account</span>
                  <span className="text-lg font-bold text-green-600">₦270,000</span>
                </div>
                <div className="text-xs text-gray-600">Last updated: This morning</div>
              </div>
              <div className="cash-account">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">Petty Cash (Office)</span>
                  <span className="text-lg font-bold text-green-600">₦45,000</span>
                </div>
                <div className="text-xs text-gray-600">Counted today</div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Cash Available</span>
                  <span className="text-2xl font-bold text-green-700">₦2,495,000</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <DollarSign className="mr-2 h-5 w-5" />
              Sales vs Cash Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="sales-tracking">
                <div className="flex justify-between text-lg mb-3">
                  <span className="font-medium">Orders Closed Today</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Order Value</span>
                    <span className="font-bold">₦1,185,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Moniepoint Confirmed</span>
                    <span className="font-bold text-green-600">₦1,185,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Variance</span>
                    <span className="font-bold text-green-600">₦0</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div className="text-sm font-medium text-green-800">Perfect Match</div>
                <div className="text-xs text-green-700 mt-1">
                  All sales confirmed via payment platform - no missing money
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* DA Balance & Inventory Movement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <AlertCircle className="mr-2 h-5 w-5" />
              Outstanding DA Balances
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="da-balance">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <span className="font-medium text-green-800">Kemi Adebayo (Lagos Island)</span>
                    <div className="text-xs text-green-600">12 packages delivered, all paid</div>
                  </div>
                  <span className="font-bold text-green-600">₦0</span>
                </div>
              </div>
              <div className="da-balance">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <span className="font-medium text-green-800">Samuel Okafor (Victoria Island)</span>
                    <div className="text-xs text-green-600">8 packages delivered, all paid</div>
                  </div>
                  <span className="font-bold text-green-600">₦0</span>
                </div>
              </div>
              <div className="da-balance">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <span className="font-medium text-green-800">Fatima Ibrahim (Ikeja)</span>
                    <div className="text-xs text-green-600">15 packages delivered, all paid</div>
                  </div>
                  <span className="font-bold text-green-600">₦0</span>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total DA Exposure</span>
                  <span className="text-2xl font-bold text-green-700">₦0</span>
                </div>
                <div className="text-xs text-green-600 mt-1">✓ All DAs have zero outstanding balance</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Package2 className="mr-2 h-5 w-5" />
              Inventory Movement Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              <div className="movement-log">
                <div className="text-sm border-l-4 border-green-400 pl-3 py-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Carton #VV-2024-189</span>
                    <span className="text-xs text-gray-500">14:23 today</span>
                  </div>
                  <div className="text-xs text-gray-600">DA: Kemi Adebayo | 12 Moringa bottles</div>
                  <div className="text-xs text-green-600">📷 Photo verified | GPS: Lagos Island</div>
                </div>
              </div>
              <div className="movement-log">
                <div className="text-sm border-l-4 border-green-400 pl-3 py-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Carton #VV-2024-188</span>
                    <span className="text-xs text-gray-500">13:45 today</span>
                  </div>
                  <div className="text-xs text-gray-600">DA: Samuel Okafor | 8 Ginger capsules</div>
                  <div className="text-xs text-green-600">📷 Photo verified | GPS: Victoria Island</div>
                </div>
              </div>
              <div className="movement-log">
                <div className="text-sm border-l-4 border-green-400 pl-3 py-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Carton #VV-2024-187</span>
                    <span className="text-xs text-gray-500">12:30 today</span>
                  </div>
                  <div className="text-xs text-gray-600">DA: Fatima Ibrahim | 15 Mixed products</div>
                  <div className="text-xs text-green-600">📷 Photo verified | GPS: Ikeja</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Profit & Refund Ledger */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <TrendingUp className="mr-2 h-5 w-5" />
              Weekly Net Profit Chart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="weekly-summary">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">₦487,000</div>
                  <div className="text-sm text-gray-600">Net Profit This Week</div>
                  <div className="text-xs text-green-600 mt-1">↑ 12% vs last week</div>
                </div>
              </div>
              <div className="profit-breakdown">
                <h4 className="font-medium text-gray-800 mb-2">Week Breakdown</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Revenue</span>
                    <span className="font-bold">₦1,250,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Product Costs (COGS)</span>
                    <span className="font-bold">₦562,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Operating Expenses</span>
                    <span className="font-bold">₦178,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">DA Commissions</span>
                    <span className="font-bold">₦23,000</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-bold text-gray-900">Net Profit</span>
                    <span className="font-bold text-green-600">₦487,000</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <FileText className="mr-2 h-5 w-5" />
              Refund Ledger
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="refund-summary">
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="font-medium text-yellow-800">Total Refunds This Week</span>
                  <span className="font-bold text-yellow-700">₦45,000</span>
                </div>
              </div>
              <div className="refund-details space-y-2">
                <div className="refund-item">
                  <div className="text-sm border-l-4 border-yellow-400 pl-3 py-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Customer: Mrs. Ogbonna</span>
                      <span className="font-bold">₦18,000</span>
                    </div>
                    <div className="text-xs text-gray-600">Reason: Package damaged in transit</div>
                    <div className="text-xs text-yellow-600">Approved by: John (Admin) | Dec 5, 16:30</div>
                  </div>
                </div>
                <div className="refund-item">
                  <div className="text-sm border-l-4 border-yellow-400 pl-3 py-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Customer: Mr. Adeleke</span>
                      <span className="font-bold">₦12,500</span>
                    </div>
                    <div className="text-xs text-gray-600">Reason: Product not effective</div>
                    <div className="text-xs text-yellow-600">Approved by: John (Admin) | Dec 4, 14:15</div>
                  </div>
                </div>
                <div className="refund-item">
                  <div className="text-sm border-l-4 border-yellow-400 pl-3 py-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Customer: Miss Adunni</span>
                      <span className="font-bold">₦14,500</span>
                    </div>
                    <div className="text-xs text-gray-600">Reason: Wrong product delivered</div>
                    <div className="text-xs text-yellow-600">Approved by: John (Admin) | Dec 3, 11:45</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Offline Spend & Owner's Equity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-800">Offline Spend Register</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="spend-item">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-800">Fuel for delivery vehicle</span>
                    <div className="text-xs text-gray-600">Dec 6, 2024 | Logged by: John</div>
                  </div>
                  <span className="font-bold">₦15,000</span>
                </div>
              </div>
              <div className="spend-item">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-800">Market park charges</span>
                    <div className="text-xs text-gray-600">Dec 5, 2024 | Logged by: Kemi</div>
                  </div>
                  <span className="font-bold">₦2,500</span>
                </div>
              </div>
              <div className="spend-item">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-800">Office supplies (receipt books)</span>
                    <div className="text-xs text-gray-600">Dec 4, 2024 | Logged by: Samuel</div>
                  </div>
                  <span className="font-bold">₦8,000</span>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">Weekly Offline Total</span>
                  <span className="font-bold">₦25,500</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-green-800">Owner's Equity Value Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="equity-summary">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">₦5,850,000</div>
                  <div className="text-sm text-gray-600">Current Equity Value</div>
                  <div className="text-xs text-green-600 mt-1">↑ ₦487K this week</div>
                </div>
              </div>
              <div className="equity-breakdown space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ownership Percentage</span>
                  <span className="font-bold">75%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Company Value</span>
                  <span className="font-bold">₦7,800,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Value Change (MTD)</span>
                  <span className="font-bold text-green-600">+₦1,220,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">ROI (Annualized)</span>
                  <span className="font-bold text-green-600">156%</span>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div className="text-sm font-medium text-green-800">Otunba's Bottom Line</div>
                <div className="text-xs text-green-700 mt-1">
                  Your investment is growing ₦487K every week with zero cash leakage
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
