
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExportControls } from '../ExportControls';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Package, Repeat, TrendingDown, FileText, Clock, Users, Calculator } from 'lucide-react';

export const DangoteDisciplineTab = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  return (
    <div className="space-y-6">
      <ExportControls tabName="Dangote Discipline - Cost & Efficiency Control" theme="dangote" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">🏭 Dangote Discipline – Cost & Efficiency Control</h2>
        <p className="opacity-90">Industrial-grade visibility into cost control and operational efficiency</p>
        <p className="text-sm mt-2 opacity-80">"Control your costs like a factory, measure waste like an engineer, manage vendors like a CEO."</p>
      </div>

      {/* Panel 1: Unit Economics & Input/Output Yield */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <Package className="mr-2 h-5 w-5" />
            Unit Economics & Input/Output Yield
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">📦 Cost Per Unit Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Bottle & Label</span>
                  <span className="font-bold">₦180</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ingredients</span>
                  <span className="font-bold">₦420</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Packaging</span>
                  <span className="font-bold">₦85</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-bold">₦165</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-medium">Total Cost Per Unit</span>
                  <span className="font-bold text-red-600">₦850</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">🔁 Input-to-Output Yield Tracker</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Expected Yield</span>
                    <span>20 units/1L</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Actual: 17 units</span>
                    <span>85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-red-700">Yield Shortfall</span>
                  <Badge variant="destructive">-15% Loss</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
            <div>
              <h4 className="font-medium mb-3">📉 Cost Deviation Alerts</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <span className="text-yellow-700 font-medium">Bottle Cost +8%</span>
                    <p className="text-xs text-yellow-600">Vendor price increase</p>
                  </div>
                  <Badge variant="outline" className="text-yellow-600">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <span className="text-green-700 font-medium">Ingredients Cost</span>
                    <p className="text-xs text-green-600">Within baseline</p>
                  </div>
                  <Badge variant="outline" className="text-green-600">Normal</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">📄 Recent Deviation Log</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                <div className="text-xs border-l-4 border-yellow-400 pl-3 py-2">
                  <span className="font-medium">2024-12-06 09:15</span> - Bottle cost +8% (Vendor: TopPak Ltd)
                </div>
                <div className="text-xs border-l-4 border-red-400 pl-3 py-2">
                  <span className="font-medium">2024-12-05 14:30</span> - Yield drop to 17/20 units (Production issue)
                </div>
                <div className="text-xs border-l-4 border-blue-400 pl-3 py-2">
                  <span className="font-medium">2024-12-04 11:45</span> - Delivery cost reduced -5% (New routes)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Panel 2: Wastage & Returns Audit */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <Repeat className="mr-2 h-5 w-5" />
            Wastage & Returns Audit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3">♻️ Wastage Log</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Broken Bottles</span>
                  <span className="font-bold text-red-600">8 units</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Failed Seals</span>
                  <span className="font-bold text-red-600">3 units</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rejected Cartons</span>
                  <span className="font-bold text-red-600">2 units</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-medium">Total Wastage</span>
                  <span className="font-bold text-red-600">13 units</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">🔁 Returned Goods Monitor</h4>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">3.2%</div>
                  <div className="text-sm text-gray-600">Return Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>DA Returns</span>
                    <span>₦25,500</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Customer Refunds</span>
                    <span>₦12,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">📉 Weekly Loss Report</h4>
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600">₦48,500</div>
                  <div className="text-sm text-gray-600">Total Weekly Loss</div>
                  <div className="text-xs text-red-500 mt-1">↑ 12% vs last week</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Panel 3: Vendor Oversight & Procurement Integrity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <FileText className="mr-2 h-5 w-5" />
            Vendor Oversight & Procurement Integrity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">🧾 Vendor Ledger</h4>
              <div className="space-y-3">
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-medium">TopPak Ltd</span>
                      <p className="text-sm text-gray-600">Bottles & Labels</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">Active</Badge>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span>₦180/unit</span>
                    <span>Avg: 3 days</span>
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-medium">NatureChem</span>
                      <p className="text-sm text-gray-600">Raw Ingredients</p>
                    </div>
                    <Badge variant="outline" className="text-yellow-600">Warning</Badge>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span>₦420/unit</span>
                    <span>Avg: 5 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">⚠️ Vendor Flags & Changes</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <span className="text-yellow-700 font-medium">NatureChem</span>
                    <p className="text-xs text-yellow-600">Delivery delay +2 days</p>
                  </div>
                  <Badge variant="outline" className="text-yellow-600">Flag</Badge>
                </div>
                <div className="text-xs border-l-4 border-blue-400 pl-3 py-2">
                  <span className="font-medium">2024-12-01</span> - Added FastPack as backup vendor (Approved: CEO)
                </div>
                <div className="text-xs border-l-4 border-red-400 pl-3 py-2">
                  <span className="font-medium">2024-11-28</span> - Removed SlowSupply (Quality issues, Approved: CFO)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Panel 4: Departmental Cost vs Output */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <Users className="mr-2 h-5 w-5" />
            Departmental Cost vs Output
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3">🧑‍💼 Cost per Output by Department</h4>
              <div className="space-y-3">
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Telesales</span>
                    <span className="text-green-600">₦85/order</span>
                  </div>
                  <div className="text-xs text-gray-600">47 orders closed</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Logistics</span>
                    <span className="text-blue-600">₦165/delivery</span>
                  </div>
                  <div className="text-xs text-gray-600">42 deliveries completed</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Production</span>
                    <span className="text-purple-600">₦685/unit</span>
                  </div>
                  <div className="text-xs text-gray-600">68 units produced</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">🧮 Bonus vs Output Ratio</h4>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">₦4,850</div>
                    <div className="text-sm text-gray-600">Revenue per ₦1 bonus</div>
                    <div className="text-xs text-green-500 mt-1">Above target</div>
                  </div>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Total bonuses paid</span>
                    <span>₦125,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue generated</span>
                    <span>₦606,250</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">🕓 Time to Revenue</h4>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">4.2 days</div>
                  <div className="text-sm text-gray-600">Avg Order to Cash</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Production → Pack</span>
                    <span>0.5 days</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Pack → Delivery</span>
                    <span>2.8 days</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Delivery → Payment</span>
                    <span>0.9 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Dangote Summary Report */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-800">🏭 Weekly Dangote Control Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">68</div>
              <div className="text-sm text-gray-600">Units Produced</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">₦48.5K</div>
              <div className="text-sm text-gray-600">Total Loss</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">28.5%</div>
              <div className="text-sm text-gray-600">Net Margin/SKU</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Telesales</div>
              <div className="text-sm text-gray-600">Most Efficient</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
