
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Printer, CheckCircle, Clock, AlertCircle, Upload, Eye, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DocumentItem {
  id: string;
  name: string;
  filename: string;
  status: 'complete' | 'in-progress' | 'not-ready';
  category: string;
  investors: string[];
  lastUpdated: string;
  uploadedBy: string;
  description: string;
}

const documentData: DocumentItem[] = [
  // Financials
  { id: '1', name: 'P&L Statement (Last 12 Months)', filename: '01_PnL_Last12Months.xlsx', status: 'complete', category: 'financials', investors: ['all'], lastUpdated: '2024-12-06', uploadedBy: 'CFO', description: 'Monthly profit & loss breakdown' },
  { id: '2', name: 'Balance Sheet (Current)', filename: '02_BalanceSheet_Current.xlsx', status: 'complete', category: 'financials', investors: ['all'], lastUpdated: '2024-12-06', uploadedBy: 'CFO', description: 'Current assets, liabilities, equity' },
  { id: '3', name: 'Cash Flow Statement (YTD)', filename: '03_CashFlow_YTD.xlsx', status: 'complete', category: 'financials', investors: ['all'], lastUpdated: '2024-12-06', uploadedBy: 'CFO', description: 'Cash movement summary' },
  { id: '4', name: 'Weekly Net Profit Snapshot', filename: '04_WeeklyNetProfit_Snapshot.pdf', status: 'complete', category: 'financials', investors: ['otunba'], lastUpdated: '2024-12-06', uploadedBy: 'FC', description: 'Weekly profit trends for ownership oversight' },
  { id: '5', name: 'CAC/LTV/Margin Analysis', filename: '05_CAC_LTV_MarginAnalysis.xlsx', status: 'in-progress', category: 'financials', investors: ['ron', 'andy'], lastUpdated: '2024-12-05', uploadedBy: 'Marketing', description: 'Customer acquisition cost, lifetime value, gross margin' },
  { id: '6', name: 'Spend-to-Growth Ratio', filename: '06_SpendToGrowth_Ratio.xlsx', status: 'complete', category: 'financials', investors: ['ron'], lastUpdated: '2024-12-06', uploadedBy: 'Marketing', description: 'Ad spend vs. order growth trend' },
  { id: '7', name: 'Cap Table & Investor History', filename: '07_CapTable_FounderAndInvestors.xlsx', status: 'complete', category: 'financials', investors: ['tomi', 'all'], lastUpdated: '2024-12-01', uploadedBy: 'Legal', description: 'Clean, updated equity table with history' },

  // Operations & Systems
  { id: '8', name: 'Workflow Map (Zoho-Moniepoint)', filename: '08_WorkflowMap_Zoho_Moniepoint.pdf', status: 'complete', category: 'operations', investors: ['andy', 'ron'], lastUpdated: '2024-12-04', uploadedBy: 'Tech Lead', description: 'Visual system architecture' },
  { id: '9', name: 'Order-to-Cash Flowchart', filename: '09_OrderToCash_Flowchart.pdf', status: 'complete', category: 'operations', investors: ['andy', 'otunba'], lastUpdated: '2024-12-04', uploadedBy: 'Operations', description: 'Sale → Delivery → Payment process' },
  { id: '10', name: 'Package Integrity Process', filename: '10_PackageIntegrity_Process.pdf', status: 'in-progress', category: 'operations', investors: ['andy', 'otunba'], lastUpdated: '2024-12-05', uploadedBy: 'Operations', description: 'Sealing, DA handoff, verification process' },
  { id: '11', name: 'Inventory Movement Protocol', filename: '11_Inventory_Movement_Protocol.pdf', status: 'complete', category: 'operations', investors: ['otunba'], lastUpdated: '2024-12-06', uploadedBy: 'Inventory', description: 'How cartons are moved and logged' },
  { id: '12', name: 'Automation Scorecard', filename: '12_Automation_Scorecard.xlsx', status: 'not-ready', category: 'operations', investors: ['andy', 'ron'], lastUpdated: '2024-12-03', uploadedBy: 'Tech Lead', description: '% of tasks automated per department' },

  // Governance & Legal
  { id: '13', name: 'Board Resolutions 2024', filename: '13_Board_Resolutions_2024.pdf', status: 'complete', category: 'governance', investors: ['tomi'], lastUpdated: '2024-12-01', uploadedBy: 'Legal', description: 'Key decisions with dates' },
  { id: '14', name: 'Shareholder Agreement', filename: '14_Shareholder_Agreement.pdf', status: 'complete', category: 'governance', investors: ['tomi', 'all'], lastUpdated: '2024-11-15', uploadedBy: 'Legal', description: 'Legally binding equity structure' },
  { id: '15', name: 'Founder Agreement & Vesting', filename: '15_Founder_Agreement_And_Vesting.pdf', status: 'complete', category: 'governance', investors: ['tomi', 'thiel'], lastUpdated: '2024-11-15', uploadedBy: 'Legal', description: 'Roles, responsibilities, vesting schedule' },
  { id: '16', name: 'Staff Contracts Template', filename: '16_Staff_Contracts_Template.pdf', status: 'complete', category: 'governance', investors: ['tomi'], lastUpdated: '2024-11-20', uploadedBy: 'HR', description: 'Employment or contractor agreement formats' },
  { id: '17', name: 'NDA Template', filename: '17_NDA_Template.pdf', status: 'complete', category: 'governance', investors: ['all'], lastUpdated: '2024-11-20', uploadedBy: 'Legal', description: 'Mutual NDAs for partnerships/investors' },
  { id: '18', name: 'Compliance Policy Overview', filename: '18_Compliance_Policy_Overview.pdf', status: 'in-progress', category: 'governance', investors: ['tomi', 'otunba'], lastUpdated: '2024-12-05', uploadedBy: 'Compliance', description: 'Refund, inventory, fraud, data control SOPs' },

  // Vision & Strategy
  { id: '19', name: 'Investor Pitch Deck', filename: '19_Investor_Pitch_Deck.pdf', status: 'complete', category: 'strategy', investors: ['all'], lastUpdated: '2024-12-06', uploadedBy: 'Founder', description: 'Clear, visual pitch (10–12 slides)' },
  { id: '20', name: 'Mission & Business Model Canvas', filename: '20_Mission_Model_Canvas.pdf', status: 'complete', category: 'strategy', investors: ['thiel', 'all'], lastUpdated: '2024-12-06', uploadedBy: 'Founder', description: 'Founder\'s vision + economic logic' },
  { id: '21', name: 'TAM Assessment (Africa & Diaspora)', filename: '21_TAM_Assessment_Africa_Diaspora.pdf', status: 'complete', category: 'strategy', investors: ['thiel', 'ron'], lastUpdated: '2024-12-05', uploadedBy: 'Strategy', description: 'Market size breakdown' },
  { id: '22', name: 'Moat & Defensibility Map', filename: '22_Moat_Defensibility_Map.pdf', status: 'in-progress', category: 'strategy', investors: ['thiel', 'andy'], lastUpdated: '2024-12-05', uploadedBy: 'Founder', description: 'Why others can\'t replicate your advantage' },
  { id: '23', name: 'Founder Insight Memo', filename: '23_Founder_Memo.pdf', status: 'complete', category: 'strategy', investors: ['thiel'], lastUpdated: '2024-12-06', uploadedBy: 'Founder', description: '1-pager explaining: "Why me, why now?"' },
  { id: '24', name: 'Exit Strategy vs Long-Term Vision', filename: '24_ExitStrategy_vs_LongTermVision.pdf', status: 'not-ready', category: 'strategy', investors: ['thiel', 'ron'], lastUpdated: '2024-12-03', uploadedBy: 'Strategy', description: 'IPO, acquisition, or domination path' },

  // Owner Oversight (Otunba Special)
  { id: '25', name: 'Live Cash Balance Report', filename: '25_LiveCashBalance_Report.xlsx', status: 'complete', category: 'owner-oversight', investors: ['otunba'], lastUpdated: '2024-12-06', uploadedBy: 'Finance', description: 'Bank, Moniepoint, Cash on hand' },
  { id: '26', name: 'Offline Spends Log', filename: '26_OfflineSpends_Log.xlsx', status: 'complete', category: 'owner-oversight', investors: ['otunba'], lastUpdated: '2024-12-06', uploadedBy: 'Finance', description: 'Fuel, logistics, market cash' },
  { id: '27', name: 'Refunds Report (Last 90 Days)', filename: '27_Refunds_Report_Last90Days.pdf', status: 'complete', category: 'owner-oversight', investors: ['otunba', 'tomi'], lastUpdated: '2024-12-06', uploadedBy: 'Customer Service', description: 'All refunds with reason & approver' },
  { id: '28', name: 'DA Exposure Report', filename: '28_DA_Exposure_Report.xlsx', status: 'complete', category: 'owner-oversight', investors: ['otunba'], lastUpdated: '2024-12-06', uploadedBy: 'Operations', description: 'Inventory value still with agents' },
  { id: '29', name: 'Carton Movement Photo Log', filename: '29_CartonMovement_PhotoLog.pdf', status: 'in-progress', category: 'owner-oversight', investors: ['otunba'], lastUpdated: '2024-12-05', uploadedBy: 'Warehouse', description: 'Visual proof of packaging & dispatch' },
  { id: '30', name: 'Weekly Owner Profit Charts', filename: '30_WeeklyOwnerProfitCharts.pdf', status: 'complete', category: 'owner-oversight', investors: ['otunba'], lastUpdated: '2024-12-06', uploadedBy: 'Finance', description: 'Week-by-week net profit bar chart' }
];

export const InvestorReadinessTab = () => {
  const [filterInvestor, setFilterInvestor] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedTab, setSelectedTab] = useState('checklist');
  const { toast } = useToast();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'not-ready':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-green-100 text-green-700">Complete</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-100 text-yellow-700">In Progress</Badge>;
      case 'not-ready':
        return <Badge variant="destructive">Not Ready</Badge>;
      default:
        return null;
    }
  };

  const filteredDocuments = documentData.filter(doc => {
    const investorMatch = filterInvestor === 'all' || doc.investors.includes(filterInvestor) || doc.investors.includes('all');
    const statusMatch = filterStatus === 'all' || doc.status === filterStatus;
    const categoryMatch = filterCategory === 'all' || doc.category === filterCategory;
    return investorMatch && statusMatch && categoryMatch;
  });

  const groupedDocuments = filteredDocuments.reduce((groups, doc) => {
    const category = doc.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(doc);
    return groups;
  }, {} as Record<string, DocumentItem[]>);

  const categoryLabels = {
    'financials': '📊 Financials',
    'operations': '⚙️ Operations & Systems',
    'governance': '📁 Governance & Legal',
    'strategy': '🧠 Vision & Strategy',
    'owner-oversight': '💼 Owner Oversight (Otunba)'
  };

  const handlePrintAll = () => {
    const completeDocuments = documentData.filter(doc => doc.status === 'complete');
    toast({
      title: "Generating Print Package",
      description: `Creating printable PDF with ${completeDocuments.length} complete documents...`,
    });

    setTimeout(() => {
      toast({
        title: "Print Package Ready",
        description: "Full investor folder PDF has been generated and is ready for printing.",
      });
    }, 3000);
  };

  const handleDownloadAll = () => {
    const completeDocuments = documentData.filter(doc => doc.status === 'complete');
    toast({
      title: "Creating ZIP Package",
      description: `Bundling ${completeDocuments.length} complete documents for download...`,
    });

    setTimeout(() => {
      toast({
        title: "Download Ready",
        description: "Investor_Readiness_Folder_Complete.zip is ready for download.",
      });
    }, 2500);
  };

  const handleDocumentAction = (action: string, docName: string) => {
    toast({
      title: `${action} Started`,
      description: `${action} ${docName}...`,
    });
  };

  const completionStats = {
    total: documentData.length,
    complete: documentData.filter(d => d.status === 'complete').length,
    inProgress: documentData.filter(d => d.status === 'in-progress').length,
    notReady: documentData.filter(d => d.status === 'not-ready').length
  };

  return (
    <div className="space-y-6">
      {/* Header with Key Stats */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">📁 Investor Readiness Folder – Master Checklist</h2>
            <p className="opacity-90">Ready for any of the 5 Men of Steel – Download & Print in under 10 minutes</p>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={handlePrintAll}
              className="bg-white text-purple-700 hover:bg-gray-100"
            >
              <Printer className="mr-2 h-4 w-4" />
              Print Full Folder
            </Button>
            <Button 
              onClick={handleDownloadAll}
              className="bg-white text-purple-700 hover:bg-gray-100"
            >
              <Download className="mr-2 h-4 w-4" />
              Download All (ZIP)
            </Button>
          </div>
        </div>
      </div>

      {/* Completion Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">{completionStats.total}</div>
            <div className="text-sm text-gray-600">Total Documents</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{completionStats.complete}</div>
            <div className="text-sm text-gray-600">Complete</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{completionStats.inProgress}</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{completionStats.notReady}</div>
            <div className="text-sm text-gray-600">Not Ready</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="checklist">📋 Document Checklist</TabsTrigger>
          <TabsTrigger value="readme">📘 README & Index</TabsTrigger>
          <TabsTrigger value="activity">📊 Activity Log</TabsTrigger>
        </TabsList>

        <TabsContent value="checklist" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="min-w-[150px]">
                  <label className="block text-sm font-medium mb-1">Filter by Investor</label>
                  <Select value={filterInvestor} onValueChange={setFilterInvestor}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Investors</SelectItem>
                      <SelectItem value="tomi">Tomi Davies</SelectItem>
                      <SelectItem value="ron">Ron Conway</SelectItem>
                      <SelectItem value="thiel">Peter Thiel</SelectItem>
                      <SelectItem value="andy">Andy Bechtolsheim</SelectItem>
                      <SelectItem value="otunba">Otunba Shoyombo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="min-w-[130px]">
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="complete">Complete</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="not-ready">Not Ready</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="min-w-[150px]">
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="financials">📊 Financials</SelectItem>
                      <SelectItem value="operations">⚙️ Operations</SelectItem>
                      <SelectItem value="governance">📁 Governance</SelectItem>
                      <SelectItem value="strategy">🧠 Strategy</SelectItem>
                      <SelectItem value="owner-oversight">💼 Owner Oversight</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    onClick={() => setFilterStatus('complete')}
                    className="ml-2"
                  >
                    🖨️ Show Print Ready Only
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Groups */}
          <div className="space-y-6">
            {Object.entries(groupedDocuments).map(([category, docs]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{categoryLabels[category as keyof typeof categoryLabels]}</span>
                    <Badge variant="outline">{docs.length} documents</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {docs.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-3 flex-1">
                          {getStatusIcon(doc.status)}
                          <div className="flex-1">
                            <div className="font-medium text-sm">{doc.name}</div>
                            <div className="text-xs text-gray-500">
                              {doc.filename} • {doc.description}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              Updated {doc.lastUpdated} by {doc.uploadedBy}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(doc.status)}
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDocumentAction('Viewing', doc.name)}
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDocumentAction('Downloading', doc.name)}
                            >
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDocumentAction('Uploading new version for', doc.name)}
                            >
                              <Upload className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="readme" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                📘 README / Document Index
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Purpose of This Folder</h3>
                <p className="text-sm text-gray-600">
                  This investor readiness folder contains all due diligence documents required by elite investors. 
                  Each document has been curated to meet the specific expectations of Tomi Davies, Ron Conway, 
                  Peter Thiel, Andy Bechtolsheim, and Otunba Shoyombo.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How to Use This Folder</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Filter documents by investor to see what each person specifically needs</li>
                  <li>• Use "Print Ready Only" to quickly identify complete documents</li>
                  <li>• Download individual files or the complete ZIP package</li>
                  <li>• Print the full folder PDF for physical presentation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Document Categories Explained</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>📊 Financials:</strong> P&L, Balance Sheet, Cash Flow, CAC/LTV analysis</div>
                  <div><strong>⚙️ Operations:</strong> System workflows, automation metrics, process documentation</div>
                  <div><strong>📁 Governance:</strong> Legal agreements, board resolutions, compliance policies</div>
                  <div><strong>🧠 Strategy:</strong> Vision documents, TAM analysis, competitive moats</div>
                  <div><strong>💼 Owner Oversight:</strong> Cash control, profit tracking, operational accountability</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="text-sm text-gray-600">
                  <p>For questions about any document in this folder:</p>
                  <p>CFO: [Your CFO Email]</p>
                  <p>Founder: [Your Email]</p>
                  <p>Legal: [Legal Contact]</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>📊 Recent Activity & Download History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <span className="font-medium text-sm">Full folder download</span>
                    <div className="text-xs text-gray-500">2024-12-06 15:30 • by Founder</div>
                  </div>
                  <Badge>Export</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <span className="font-medium text-sm">CAC/LTV Analysis updated</span>
                    <div className="text-xs text-gray-500">2024-12-06 14:20 • by Marketing</div>
                  </div>
                  <Badge variant="outline">Upload</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <span className="font-medium text-sm">Board Resolutions viewed</span>
                    <div className="text-xs text-gray-500">2024-12-06 12:15 • by Tomi Davies</div>
                  </div>
                  <Badge variant="outline">View</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <span className="font-medium text-sm">Print package generated</span>
                    <div className="text-xs text-gray-500">2024-12-06 10:45 • by CFO</div>
                  </div>
                  <Badge>Print</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
