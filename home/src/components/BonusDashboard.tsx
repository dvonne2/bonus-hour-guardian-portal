
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Timer, TrendingUp, TrendingDown, Users, DollarSign, Award, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

interface BonusDashboardProps {
  userRole: string;
  onLogout: () => void;
}

const BonusDashboard = ({ userRole, onLogout }: BonusDashboardProps) => {
  const [bonusActions, setBonusActions] = useState<{[key: string]: string}>({});

  const staffData = [
    { name: 'Joy', role: 'Media Buyer', kpi: '567 orders', bonus: 45360, targetHit: 113, status: 'approved' },
    { name: 'Rose', role: 'Telesales', kpi: '91% DR', bonus: 39440, targetHit: 98, status: 'pending' },
    { name: 'Tolu', role: 'Creatives', kpi: '3 virals', bonus: 15000, targetHit: 100, status: 'approved' },
    { name: 'Glory', role: 'Telesales', kpi: '213 orders', bonus: 0, targetHit: 41, status: 'blocked' },
    { name: 'Lateef', role: 'DA Recruiter', kpi: '15 agents', bonus: 45000, targetHit: 150, status: 'pending' }
  ];

  const departmentData = [
    { name: 'Telesales', target: '2,500 orders/week', actual: '2,139', percentage: 85.6, rank: '🥇' },
    { name: 'Media', target: '10,000 leads/week', actual: '9,120', percentage: 91.2, rank: '🥈' },
    { name: 'Logistics', target: '100% timestamp', actual: '86%', percentage: 86, rank: '🥉' },
    { name: 'Inventory', target: '0 stockout days', actual: '3 days', percentage: 0, rank: '❌' }
  ];

  const businessMetrics = [
    { metric: 'Total Orders', value: '3,830', previous: '3,590', change: '+6.7%', trend: 'up' },
    { metric: 'Delivered Orders', value: '2,801', previous: '2,710', change: '+3.4%', trend: 'up' },
    { metric: 'Delivery Rate', value: '73.2%', previous: '75.5%', change: '-2.3%', trend: 'down' },
    { metric: 'Refunds/Returns', value: '₦92,000', previous: '₦81,000', change: '+13.5%', trend: 'down' },
    { metric: 'Ad Spend', value: '₦1.4M', previous: '₦1.2M', change: '+16.7%', trend: 'neutral' },
    { metric: 'Cost Per Order', value: '₦368', previous: '₦334', change: '+10.2%', trend: 'down' }
  ];

  const shoutouts = [
    { name: 'Joy', type: 'praise', reason: 'Beat ROAS targets 4 days in a row', icon: '🌟' },
    { name: 'Lateef', type: 'praise', reason: 'Fastest DA recruiter this week', icon: '🌟' },
    { name: 'Tolu', type: 'warning', reason: '3 absences + missed creative deadline', icon: '⚠️' },
    { name: 'Femi', type: 'blocked', reason: 'Incomplete timestamp, 2 complaints', icon: '❌' }
  ];

  const handleBonusAction = (staffName: string, action: string) => {
    setBonusActions(prev => ({ ...prev, [staffName]: action }));
    toast.success(`${action} bonus for ${staffName}`);
  };

  const exportToCSV = () => {
    toast.success('Bonus data exported to CSV successfully');
  };

  const pushToWhatsApp = () => {
    toast.success('Shoutouts pushed to WhatsApp group');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge className="bg-green-100 text-green-800">✅ Approved</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">⏳ Pending</Badge>;
      case 'blocked': return <Badge className="bg-red-100 text-red-800">❌ Blocked</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <div className="w-4 h-4" />;
    }
  };

  const totalBonusPool = staffData.reduce((sum, staff) => sum + staff.bonus, 0);
  const approvedBonus = staffData.filter(s => s.status === 'approved').reduce((sum, staff) => sum + staff.bonus, 0);
  const pendingBonus = staffData.filter(s => s.status === 'pending').reduce((sum, staff) => sum + staff.bonus, 0);
  const blockedBonus = staffData.filter(s => s.status === 'blocked').reduce((sum, staff) => sum + staff.bonus, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">🔥 Bonus Hour Dashboard</h1>
          <p className="text-gray-600 mt-1">Saturday 22:59 - Sunday 00:00 | Role: {userRole}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Timer className="w-4 h-4" />
            <span>Active until midnight</span>
          </div>
          <Button onClick={onLogout} variant="outline">Logout</Button>
        </div>
      </div>

      <Tabs defaultValue="bonus" className="space-y-6">
        <TabsList>
          <TabsTrigger value="bonus">Bonus Review</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="business">Business Health</TabsTrigger>
          <TabsTrigger value="shoutouts">Shoutouts</TabsTrigger>
        </TabsList>

        <TabsContent value="bonus" className="space-y-6">
          {/* Bonus Pool Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Total Pool</p>
                    <p className="text-2xl font-bold">₦{totalBonusPool.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Approved</p>
                    <p className="text-2xl font-bold text-green-600">₦{approvedBonus.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Timer className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600">₦{pendingBonus.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm text-gray-600">Blocked</p>
                    <p className="text-2xl font-bold text-red-600">₦{blockedBonus.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Staff Bonus Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Staff Bonus Eligibility</CardTitle>
              {(userRole === 'CEO' || userRole === 'FC') && (
                <div className="space-x-2">
                  <Button onClick={exportToCSV} variant="outline">Export CSV</Button>
                  <Button onClick={() => toast.success('All bonuses approved!')}>Approve All</Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Name</th>
                      <th className="text-left p-4">Role</th>
                      <th className="text-left p-4">KPI</th>
                      <th className="text-left p-4">Bonus</th>
                      <th className="text-left p-4">Target Hit</th>
                      <th className="text-left p-4">Status</th>
                      {(userRole === 'CEO' || userRole === 'FC') && <th className="text-left p-4">Actions</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {staffData.map((staff, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{staff.name}</td>
                        <td className="p-4 text-gray-600">{staff.role}</td>
                        <td className="p-4">{staff.kpi}</td>
                        <td className="p-4 font-bold">₦{staff.bonus.toLocaleString()}</td>
                        <td className="p-4">
                          <span className={`font-semibold ${staff.targetHit >= 100 ? 'text-green-600' : staff.targetHit >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {staff.targetHit}%
                          </span>
                        </td>
                        <td className="p-4">{getStatusBadge(bonusActions[staff.name] || staff.status)}</td>
                        {(userRole === 'CEO' || userRole === 'FC') && (
                          <td className="p-4 space-x-2">
                            <Button 
                              size="sm" 
                              onClick={() => handleBonusAction(staff.name, 'approved')}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleBonusAction(staff.name, 'blocked')}
                            >
                              Block
                            </Button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Performance Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentData.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{dept.rank}</span>
                      <div>
                        <h3 className="font-semibold">{dept.name}</h3>
                        <p className="text-sm text-gray-600">{dept.target}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{dept.actual}</p>
                      <p className={`text-sm ${dept.percentage >= 90 ? 'text-green-600' : dept.percentage >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {dept.percentage > 0 ? `${dept.percentage}%` : 'Failed'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Health Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {businessMetrics.map((metric, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{metric.metric}</h3>
                      {getTrendIcon(metric.trend)}
                    </div>
                    <p className="text-2xl font-bold mb-1">{metric.value}</p>
                    <p className="text-sm text-gray-600">
                      Previous: {metric.previous} 
                      <span className={`ml-2 ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                        {metric.change}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shoutouts" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Weekly Shoutouts & Warnings</CardTitle>
              {(userRole === 'CEO' || userRole === 'FC') && (
                <Button onClick={pushToWhatsApp}>Push to WhatsApp</Button>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {shoutouts.map((shoutout, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${
                    shoutout.type === 'praise' ? 'bg-green-50 border-green-200' : 
                    shoutout.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 
                    'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{shoutout.icon}</span>
                      <div>
                        <h3 className="font-semibold">{shoutout.name}</h3>
                        <p className="text-sm text-gray-700">{shoutout.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BonusDashboard;
