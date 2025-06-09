
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExportControls } from '../ExportControls';
import { TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

export const RonConwayTab = () => {
  return (
    <div className="space-y-6">
      <ExportControls tabName="Ron Conway - Scale Engine" theme="ron" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Ron Conway – Scale Engine</h2>
        <p className="opacity-90">Founder, SV Angel | "The Godfather of Silicon Valley"</p>
        <p className="text-sm mt-2 opacity-80">"Does this startup have a system that scales with capital and reduces founder dependence?"</p>
      </div>

      {/* Real-Time Orders & Growth Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <Zap className="mr-2 h-5 w-5" />
              Real-Time Orders Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">47</span>
                <span className="text-sm text-gray-600">Orders Today</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Revenue/Hour (Avg)</span>
                <span className="font-bold text-green-600">₦28,400</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>12:00 PM - Order #1247</span>
                  <span className="text-green-600">₦35,000</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>11:45 AM - Order #1246</span>
                  <span className="text-green-600">₦22,500</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>11:30 AM - Order #1245</span>
                  <span className="text-green-600">₦18,000</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <TrendingUp className="mr-2 h-5 w-5" />
              Spend-to-Growth Ratio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">3.2x</div>
                <div className="text-sm text-gray-600">ROAS (This Week)</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Ad Spend (Weekly)</span>
                  <span className="font-bold">₦240,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue Generated</span>
                  <span className="font-bold text-green-600">₦768,000</span>
                </div>
                <div className="flex justify-between">
                  <span>New Orders</span>
                  <span className="font-bold">156</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CAC vs LTV & System Workflow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <Target className="mr-2 h-5 w-5" />
              CAC vs LTV Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-xl font-bold text-red-600">₦1,540</div>
                  <div className="text-xs text-gray-600">CAC (Current)</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-xl font-bold text-green-600">₦4,850</div>
                  <div className="text-xs text-gray-600">LTV (90-day)</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-700">3.15:1</div>
                <div className="text-sm text-gray-600">LTV:CAC Ratio</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>WhatsApp Channel</span>
                  <span className="text-green-600">₦890 CAC</span>
                </div>
                <div className="flex justify-between">
                  <span>Instagram Ads</span>
                  <span className="text-yellow-600">₦1,240 CAC</span>
                </div>
                <div className="flex justify-between">
                  <span>DA Referrals</span>
                  <span className="text-green-600">₦450 CAC</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <BarChart3 className="mr-2 h-5 w-5" />
              System Workflow Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flow-step">
                <div className="text-sm font-medium">1. Order Placed</div>
                <div className="text-xs text-gray-600">Moniepoint Payment → CRM Entry</div>
                <div className="text-xs text-green-600">✓ 99.2% Success Rate</div>
              </div>
              <div className="flow-step">
                <div className="text-sm font-medium">2. Inventory Check</div>
                <div className="text-xs text-gray-600">Real-time stock verification</div>
                <div className="text-xs text-green-600">✓ 97.8% Auto-confirmed</div>
              </div>
              <div className="flow-step">
                <div className="text-sm font-medium">3. Package & Assign</div>
                <div className="text-xs text-gray-600">DA allocation via algorithm</div>
                <div className="text-xs text-green-600">✓ 15 min avg processing</div>
              </div>
              <div className="flow-step">
                <div className="text-sm font-medium">4. Delivery</div>
                <div className="text-xs text-gray-600">GPS tracking + customer confirm</div>
                <div className="text-xs text-green-600">✓ 94.5% same-day delivery</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Growth Simulation & Daily Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Growth Simulation Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Scenario: Double Ad Spend</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Current Spend:</span>
                    <div className="font-bold">₦240K/week</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Projected Spend:</span>
                    <div className="font-bold">₦480K/week</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Expected Orders:</span>
                    <div className="font-bold text-green-600">+280 orders</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Net Profit Impact:</span>
                    <div className="font-bold text-green-600">+₦850K/month</div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                * Based on current CAC:LTV ratios and operational capacity
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Daily Active Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">₦665K</div>
                <div className="text-xs text-gray-600">Revenue Today</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-xl font-bold text-yellow-600">3</div>
                <div className="text-xs text-gray-600">Stockouts</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">28</div>
                <div className="text-xs text-gray-600">Repeat Buyers</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-xl font-bold text-red-600">2</div>
                <div className="text-xs text-gray-600">Returns</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
