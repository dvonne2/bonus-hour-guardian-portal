
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExportControls } from '../ExportControls';
import { Brain, Shield, Globe, Lightbulb } from 'lucide-react';

export const PeterThielTab = () => {
  return (
    <div className="space-y-6">
      <ExportControls tabName="Peter Thiel - Strategic Advantage" theme="thiel" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Peter Thiel – Strategic Advantage</h2>
        <p className="opacity-90">Co-founder, PayPal & Palantir | Author, Zero to One</p>
        <p className="text-sm mt-2 opacity-80">"Are you building something 10x better, or are you copying others with more marketing?"</p>
      </div>

      {/* Founder's Insight Log & Unique Moat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-800">
              <Brain className="mr-2 h-5 w-5" />
              Founder's Insight Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                <h4 className="font-medium text-slate-800 mb-2">Core Belief #1</h4>
                <p className="text-sm text-gray-700">
                  "Africans don't trust online health supplements because they can't touch/verify quality. 
                  We solve this with physical DA network + visible packaging integrity."
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                <h4 className="font-medium text-slate-800 mb-2">Category POV</h4>
                <p className="text-sm text-gray-700">
                  "Everyone else ships packages. We ship health transformations with visible proof 
                  at every step - from ingredient sourcing to delivery confirmation."
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                <h4 className="font-medium text-slate-800 mb-2">What Others Don't See</h4>
                <p className="text-sm text-gray-700">
                  "WhatsApp-based CAC is 60% lower because Nigerians trust peer recommendations 
                  over ads. Our DA network is actually a trust distribution system."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-800">
              <Shield className="mr-2 h-5 w-5" />
              Unique Moat Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="moat-item">
                <h4 className="font-medium text-slate-700">Formula Origin</h4>
                <div className="text-sm text-gray-600">Proprietary sourcing from verified Nigerian suppliers</div>
                <div className="text-xs text-green-600 mt-1">Moat Strength: High</div>
              </div>
              <div className="moat-item">
                <h4 className="font-medium text-slate-700">Supply Chain Edge</h4>
                <div className="text-sm text-gray-600">Direct relationships bypass 3 middlemen layers</div>
                <div className="text-xs text-green-600 mt-1">Moat Strength: Medium</div>
              </div>
              <div className="moat-item">
                <h4 className="font-medium text-slate-700">Cultural IP</h4>
                <div className="text-sm text-gray-600">Understanding of Nigerian health skepticism + solution</div>
                <div className="text-xs text-blue-600 mt-1">Moat Strength: Very High</div>
              </div>
              <div className="moat-item">
                <h4 className="font-medium text-slate-700">DA Network</h4>
                <div className="text-sm text-gray-600">150+ delivery agents as trust ambassadors</div>
                <div className="text-xs text-green-600 mt-1">Moat Strength: High</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* TAM Simulator & Contrarian Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-800">
              <Globe className="mr-2 h-5 w-5" />
              TAM Simulator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="tam-level">
                <h4 className="font-medium text-slate-700">Nigeria (Current)</h4>
                <div className="flex justify-between text-sm">
                  <span>Addressable Market</span>
                  <span className="font-bold">₦185B</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Current Penetration</span>
                  <span>0.003%</span>
                </div>
              </div>
              <div className="tam-level">
                <h4 className="font-medium text-slate-700">West Africa (Phase 2)</h4>
                <div className="flex justify-between text-sm">
                  <span>Projected Market</span>
                  <span className="font-bold">₦850B</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Timeline</span>
                  <span>18-24 months</span>
                </div>
              </div>
              <div className="tam-level">
                <h4 className="font-medium text-slate-700">African Diaspora (Phase 3)</h4>
                <div className="flex justify-between text-sm">
                  <span>Global Opportunity</span>
                  <span className="font-bold">$2.8B</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Advantage</span>
                  <span>Authentic African wellness</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-800">
              <Lightbulb className="mr-2 h-5 w-5" />
              Contrarian Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="contrarian-metric">
                <h4 className="font-medium text-slate-700">WhatsApp CAC Advantage</h4>
                <div className="flex justify-between text-sm">
                  <span>Industry Average CAC</span>
                  <span>₦2,400</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Our WhatsApp CAC</span>
                  <span className="font-bold text-green-600">₦890</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">62% cost advantage via trust network</div>
              </div>
              <div className="contrarian-metric">
                <h4 className="font-medium text-slate-700">DA Referral Conversion</h4>
                <div className="flex justify-between text-sm">
                  <span>Cold Traffic Conversion</span>
                  <span>2.3%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>DA Referral Conversion</span>
                  <span className="font-bold text-green-600">18.7%</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">8x higher via personal recommendation</div>
              </div>
              <div className="contrarian-metric">
                <h4 className="font-medium text-slate-700">Physical Verification Value</h4>
                <div className="text-sm text-gray-600">
                  60% of customers say they bought because they could "see the DA open the package"
                </div>
                <div className="text-xs text-blue-600 mt-1">Unique in digital supplement space</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Barrier Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-800">Barrier Tracker - Competition Resistance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="barrier-category">
              <h4 className="font-medium text-slate-700 mb-3">Distribution Barriers</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>DA Network Depth</span>
                  <span className="font-bold text-green-600">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Geographic Coverage</span>
                  <span className="font-bold text-blue-600">Medium</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Trust Relationships</span>
                  <span className="font-bold text-green-600">High</span>
                </div>
              </div>
            </div>
            <div className="barrier-category">
              <h4 className="font-medium text-slate-700 mb-3">Customer Loyalty</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Repeat Purchase Rate</span>
                  <span className="font-bold">67%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>NPS Score</span>
                  <span className="font-bold text-green-600">+74</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Brand Switching Cost</span>
                  <span className="font-bold text-green-600">High</span>
                </div>
              </div>
            </div>
            <div className="barrier-category">
              <h4 className="font-medium text-slate-700 mb-3">Operational Moats</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Supply Chain Lock-in</span>
                  <span className="font-bold text-blue-600">Medium</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Regulatory Knowledge</span>
                  <span className="font-bold text-green-600">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cultural Understanding</span>
                  <span className="font-bold text-green-600">Very High</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
