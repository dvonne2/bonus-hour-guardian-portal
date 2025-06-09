
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExportControls } from '../ExportControls';
import { Microscope, Package, Clock, Calculator, Zap, Cpu } from 'lucide-react';

export const AndyBechtolsheimTab = () => {
  return (
    <div className="space-y-6">
      <ExportControls tabName="Andy Bechtolsheim - Tech & Precision" theme="andy" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Andy Bechtolsheim – Tech & Precision</h2>
        <p className="opacity-90">Co-founder, Sun Microsystems | First major investor in Google</p>
        <p className="text-sm mt-2 opacity-80">"Do you have a technical edge or are you just dropshipping with lipstick?"</p>
      </div>

      {/* Ingredient R&D & Packaging Integrity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-gray-700">
              <Microscope className="mr-2 h-5 w-5" />
              Ingredient & Product R&D
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="ingredient-profile">
                <h4 className="font-medium text-gray-800">Moringa Leaf Extract</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Source Location</span>
                    <span className="font-medium">Kano State, Nigeria</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Extraction Method</span>
                    <span className="font-medium">Cold-press (Proprietary)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purity Level</span>
                    <span className="font-bold text-green-600">98.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lab Verification</span>
                    <span className="font-medium">✓ Batch #VV2024-156</span>
                  </div>
                </div>
              </div>
              <div className="ingredient-profile">
                <h4 className="font-medium text-gray-800">Ginger Root Complex</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time</span>
                    <span className="font-medium">72-hour fermentation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Compounds</span>
                    <span className="font-bold text-green-600">6-gingerol 2.3%</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="text-sm font-medium text-red-800">Proprietary Advantage</div>
                <div className="text-xs text-red-700 mt-1">
                  Our cold-press method preserves 40% more active compounds vs standard heat extraction
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-gray-700">
              <Package className="mr-2 h-5 w-5" />
              Packaging Integrity Workflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="integrity-step">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">1. Pre-Seal Verification</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ Complete</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Image captured: Product contents + batch number</div>
              </div>
              <div className="integrity-step">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">2. Seal Application</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ Complete</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Tamper-evident seal with unique QR code</div>
              </div>
              <div className="integrity-step">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">3. DA Receipt Confirmation</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ Complete</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Photo + GPS location + timestamp</div>
              </div>
              <div className="integrity-step">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">4. Customer Verification</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">In Progress</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">QR scan confirms unbroken seal at delivery</div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-800">Fraud Prevention Score</div>
                <div className="text-2xl font-bold text-green-600">99.2%</div>
                <div className="text-xs text-gray-600">Based on sealed package + image verification</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Process Efficiency & SKU Profitability */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-gray-700">
              <Clock className="mr-2 h-5 w-5" />
              Process Efficiency Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="efficiency-metric">
                <h4 className="font-medium text-gray-800">Order → Pick → Pack → Deliver</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Order Processing</span>
                    <span className="font-bold">3.2 min avg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Inventory Pick</span>
                    <span className="font-bold">8.7 min avg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Package & Seal</span>
                    <span className="font-bold">4.1 min avg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">DA Assignment</span>
                    <span className="font-bold">2.8 min avg</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-medium">Total Processing Time</span>
                    <span className="font-bold text-green-600">18.8 min avg</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium text-blue-800">Optimization Target</div>
                <div className="text-xs text-blue-700 mt-1">
                  Goal: Reduce to 15 min avg through automated inventory alerts
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-gray-700">
              <Calculator className="mr-2 h-5 w-5" />
              Per-SKU Profitability Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="sku-analysis">
                <h4 className="font-medium text-gray-800">Moringa Capsules (60ct)</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">COGS</span>
                    <span className="font-medium">₦8,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Selling Price</span>
                    <span className="font-medium">₦18,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Margin</span>
                    <span className="font-bold text-green-600">53.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Refund Rate</span>
                    <span className="font-medium text-yellow-600">2.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Net Margin</span>
                    <span className="font-bold text-green-600">51.2%</span>
                  </div>
                </div>
              </div>
              <div className="sku-analysis">
                <h4 className="font-medium text-gray-800">Ginger Complex (30ct)</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">COGS</span>
                    <span className="font-medium">₦6,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Selling Price</span>
                    <span className="font-medium">₦12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Margin</span>
                    <span className="font-bold text-green-600">50.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Refund Rate</span>
                    <span className="font-medium text-green-600">1.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Net Margin</span>
                    <span className="font-bold text-green-600">49.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automation Score & Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-gray-700">
              <Zap className="mr-2 h-5 w-5" />
              Automation Scorecard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="automation-category">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">Financial Operations</span>
                  <span className="font-bold text-green-600">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">Payment processing, reconciliation, refund tracking</div>
              </div>
              <div className="automation-category">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">Inventory Management</span>
                  <span className="font-bold text-yellow-600">73%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '73%'}}></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">Stock alerts, reorder points, batch tracking</div>
              </div>
              <div className="automation-category">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">Delivery Coordination</span>
                  <span className="font-bold text-green-600">91%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '91%'}}></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">DA assignment, route optimization, tracking</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg mt-4">
                <div className="text-lg font-bold text-gray-800">Overall Automation: 84%</div>
                <div className="text-xs text-gray-600">Target: 90% by Q1 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-gray-700">
              <Cpu className="mr-2 h-5 w-5" />
              Tech Stack Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="tech-layer">
                <h4 className="font-medium text-gray-800">Backend Infrastructure</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Node.js + Express API layer</div>
                  <div>• PostgreSQL for transactional data</div>
                  <div>• Redis for session management</div>
                  <div>• AWS S3 for image storage</div>
                </div>
              </div>
              <div className="tech-layer">
                <h4 className="font-medium text-gray-800">Integration Layer</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Moniepoint Payment API</div>
                  <div>• WhatsApp Business API</div>
                  <div>• Zoho CRM integration</div>
                  <div>• Google Maps for DA routing</div>
                </div>
              </div>
              <div className="tech-layer">
                <h4 className="font-medium text-gray-800">Data & Analytics</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Real-time dashboard (React)</div>
                  <div>• Automated reporting engine</div>
                  <div>• ML for demand forecasting</div>
                  <div>• Image recognition for package verification</div>
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="text-sm font-medium text-red-800">Technical Edge</div>
                <div className="text-xs text-red-700 mt-1">
                  Custom image verification algorithm reduces fake package risk by 94%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
