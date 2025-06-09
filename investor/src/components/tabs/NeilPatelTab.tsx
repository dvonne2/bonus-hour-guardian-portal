
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExportControls } from '../ExportControls';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Eye, Users, Target, DollarSign, Share2, Search, Mail, MessageCircle, FileText } from 'lucide-react';

export const NeilPatelTab = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  // Sample data for paid ads performance
  const paidAdsData = [
    { platform: 'Facebook', spend: 850000, roas: 4.2, ctr: 2.1, cpl: 2500, cac: 8500, topCreative: 'Before/After Story' },
    { platform: 'TikTok', spend: 650000, roas: 3.8, ctr: 1.8, cpl: 3200, cac: 9800, topCreative: 'Hair Growth Hook' },
    { platform: 'Google', spend: 450000, roas: 5.1, ctr: 3.2, cpl: 1800, cac: 7200, topCreative: 'Search Ad 1' },
    { platform: 'YouTube', spend: 320000, roas: 3.5, ctr: 2.5, cpl: 2800, cac: 9100, topCreative: 'Demo Video' },
    { platform: 'WhatsApp', spend: 120000, roas: 6.2, ctr: 4.1, cpl: 1500, cac: 5800, topCreative: 'Broadcast #7' }
  ];

  // Sample data for organic social performance
  const organicSocialData = [
    { platform: 'Instagram', followers: 45200, growth: 12.3, engagement: 4.8, bioClicks: 1240, conversion: 8.2 },
    { platform: 'TikTok', followers: 32800, growth: 18.7, engagement: 6.2, bioClicks: 890, conversion: 6.5 },
    { platform: 'YouTube', followers: 15600, growth: 8.4, engagement: 3.9, bioClicks: 420, conversion: 11.2 },
    { platform: 'Facebook', followers: 28400, growth: 5.2, engagement: 2.1, bioClicks: 580, conversion: 7.8 }
  ];

  // Sample SEO data
  const seoData = {
    organicSessions: 12500,
    sessionGrowth: 23.4,
    avgRankPosition: 15.2,
    topKeywords: [
      { keyword: 'hair growth oil', rank: 3, traffic: 2400, difficulty: 65 },
      { keyword: 'natural hair care', rank: 7, traffic: 1800, difficulty: 72 },
      { keyword: 'fulani hair oil', rank: 12, traffic: 1200, difficulty: 45 },
      { keyword: 'Nigerian hair products', rank: 8, traffic: 950, difficulty: 58 }
    ],
    blogPerformance: {
      totalViews: 8400,
      avgReadTime: '3:42',
      bounceRate: 28.5,
      conversion: 4.2
    }
  };

  // Sample affiliate data
  const affiliateData = [
    { name: 'Beauty Blogger A', traffic: 2400, conversion: 12.8, sales: 186000, refundRate: 3.2, payout: 18600 },
    { name: 'Influencer B', traffic: 1800, conversion: 9.5, sales: 142000, refundRate: 5.1, payout: 14200 },
    { name: 'Content Creator C', traffic: 1200, conversion: 15.2, sales: 98000, refundRate: 2.8, payout: 9800 },
    { name: 'Micro Influencer D', traffic: 850, conversion: 18.4, sales: 76000, refundRate: 1.9, payout: 7600 }
  ];

  // Sample email/WhatsApp data
  const emailData = {
    openRate: 28.5,
    ctr: 4.2,
    conversion: 2.8,
    unsubscribeRate: 0.5,
    bestSubject: 'Your Hair Transformation Starts Today',
    whatsappMetrics: {
      broadcastsSent: 12,
      replyRate: 15.8,
      conversion: 11.2,
      salesPer100Chats: 24
    }
  };

  // Neil Score calculation
  const neilScore = Math.round(
    (paidAdsData.reduce((acc, platform) => acc + platform.roas, 0) / paidAdsData.length) * 10 +
    (organicSocialData.reduce((acc, platform) => acc + platform.engagement, 0) / organicSocialData.length) * 8 +
    (seoData.sessionGrowth / 100) * 15 +
    (emailData.conversion * 5)
  );

  const chartColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-6">
      <ExportControls tabName="Neil Patel Growth Engine" theme="neil" />
      
      {/* Header Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Neil Score</p>
              <p className="text-3xl font-bold text-blue-600">{neilScore}/100</p>
            </div>
            <Target className="h-8 w-8 text-blue-500" />
          </div>
          <Progress value={neilScore} className="mt-2" />
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Ad Spend</p>
              <p className="text-2xl font-bold">₦{(paidAdsData.reduce((acc, p) => acc + p.spend, 0) / 1000).toFixed(0)}K</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg ROAS</p>
              <p className="text-2xl font-bold">{(paidAdsData.reduce((acc, p) => acc + p.roas, 0) / paidAdsData.length).toFixed(1)}x</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Organic Sessions</p>
              <p className="text-2xl font-bold">{(seoData.organicSessions / 1000).toFixed(1)}K</p>
              <p className="text-xs text-green-600">+{seoData.sessionGrowth}%</p>
            </div>
            <Search className="h-8 w-8 text-purple-500" />
          </div>
        </Card>
      </div>

      <Tabs defaultValue="paid-ads" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="paid-ads">Paid Ads</TabsTrigger>
          <TabsTrigger value="organic-social">Organic Social</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="affiliates">Affiliates</TabsTrigger>
          <TabsTrigger value="email">Email/WhatsApp</TabsTrigger>
          <TabsTrigger value="content">Content Hub</TabsTrigger>
        </TabsList>

        <TabsContent value="paid-ads">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">🔴 Paid Ads Performance by Platform</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-medium mb-4">ROAS by Platform</h4>
                <ChartContainer config={{
                  roas: { label: "ROAS", color: "#3b82f6" }
                }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={paidAdsData}>
                      <XAxis dataKey="platform" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="roas" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </Card>

              <Card className="p-6">
                <h4 className="font-medium mb-4">Spend Distribution</h4>
                <ChartContainer config={{
                  spend: { label: "Spend", color: "#10b981" }
                }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={paidAdsData}
                        dataKey="spend"
                        nameKey="platform"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {paidAdsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </Card>
            </div>

            <Card className="p-6">
              <h4 className="font-medium mb-4">Platform Performance Table</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Platform</th>
                      <th className="text-left p-2">Spend</th>
                      <th className="text-left p-2">ROAS</th>
                      <th className="text-left p-2">CTR</th>
                      <th className="text-left p-2">CAC</th>
                      <th className="text-left p-2">Top Creative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paidAdsData.map((platform, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 font-medium">{platform.platform}</td>
                        <td className="p-2">₦{(platform.spend / 1000).toFixed(0)}K</td>
                        <td className="p-2">
                          <Badge variant={platform.roas >= 4 ? "default" : "destructive"}>
                            {platform.roas}x
                          </Badge>
                        </td>
                        <td className="p-2">{platform.ctr}%</td>
                        <td className="p-2">₦{platform.cac.toLocaleString()}</td>
                        <td className="p-2">{platform.topCreative}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="organic-social">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">🔵 Organic Social Media Performance</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-medium mb-4">Follower Growth</h4>
                <div className="space-y-4">
                  {organicSocialData.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">{platform.platform}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{platform.followers.toLocaleString()}</p>
                        <p className="text-sm text-green-600">+{platform.growth}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-medium mb-4">Engagement vs Conversion</h4>
                <ChartContainer config={{
                  engagement: { label: "Engagement %", color: "#3b82f6" },
                  conversion: { label: "Conversion %", color: "#10b981" }
                }}>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={organicSocialData}>
                      <XAxis dataKey="platform" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="engagement" fill="#3b82f6" />
                      <Bar dataKey="conversion" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </Card>
            </div>

            <Card className="p-6">
              <h4 className="font-medium mb-4">Bio Link Performance</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {organicSocialData.map((platform, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium">{platform.platform}</p>
                    <p className="text-2xl font-bold text-blue-600">{platform.bioClicks}</p>
                    <p className="text-xs text-gray-600">clicks</p>
                    <p className="text-sm text-green-600">{platform.conversion}% conversion</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="seo">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">🟢 SEO Performance Tracker</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Organic Sessions</h4>
                  <Search className="h-5 w-5 text-purple-500" />
                </div>
                <p className="text-3xl font-bold">{seoData.organicSessions.toLocaleString()}</p>
                <p className="text-sm text-green-600">+{seoData.sessionGrowth}% vs last month</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Avg Rank Position</h4>
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-3xl font-bold">{seoData.avgRankPosition}</p>
                <p className="text-sm text-blue-600">Improving ↗</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Blog Conversion</h4>
                  <FileText className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-3xl font-bold">{seoData.blogPerformance.conversion}%</p>
                <p className="text-sm text-gray-600">Avg time: {seoData.blogPerformance.avgReadTime}</p>
              </Card>
            </div>

            <Card className="p-6">
              <h4 className="font-medium mb-4">Top Keywords Performance</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Keyword</th>
                      <th className="text-left p-2">Rank</th>
                      <th className="text-left p-2">Monthly Traffic</th>
                      <th className="text-left p-2">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoData.topKeywords.map((keyword, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 font-medium">{keyword.keyword}</td>
                        <td className="p-2">
                          <Badge variant={keyword.rank <= 10 ? "default" : "secondary"}>
                            #{keyword.rank}
                          </Badge>
                        </td>
                        <td className="p-2">{keyword.traffic.toLocaleString()}</td>
                        <td className="p-2">
                          <Progress value={keyword.difficulty} className="w-16 h-2" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="affiliates">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">🟣 Affiliate & Influencer Portal</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-medium mb-4">Top Performers by Revenue</h4>
                <ChartContainer config={{
                  sales: { label: "Sales (₦)", color: "#10b981" }
                }}>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={affiliateData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="sales" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </Card>

              <Card className="p-6">
                <h4 className="font-medium mb-4">Conversion vs Refund Rate</h4>
                <div className="space-y-4">
                  {affiliateData.map((affiliate, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">{affiliate.name}</span>
                      <div className="text-right">
                        <p className="text-green-600 font-semibold">{affiliate.conversion}% conversion</p>
                        <p className="text-red-500 text-sm">{affiliate.refundRate}% refund</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h4 className="font-medium mb-4">Affiliate Performance Table</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Affiliate</th>
                      <th className="text-left p-2">Traffic</th>
                      <th className="text-left p-2">Conversion</th>
                      <th className="text-left p-2">Sales</th>
                      <th className="text-left p-2">Refund Rate</th>
                      <th className="text-left p-2">Payout</th>
                    </tr>
                  </thead>
                  <tbody>
                    {affiliateData.map((affiliate, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 font-medium">{affiliate.name}</td>
                        <td className="p-2">{affiliate.traffic.toLocaleString()}</td>
                        <td className="p-2">
                          <Badge variant={affiliate.conversion >= 12 ? "default" : "secondary"}>
                            {affiliate.conversion}%
                          </Badge>
                        </td>
                        <td className="p-2">₦{(affiliate.sales / 1000).toFixed(0)}K</td>
                        <td className="p-2 text-red-500">{affiliate.refundRate}%</td>
                        <td className="p-2">₦{(affiliate.payout / 1000).toFixed(0)}K</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="email">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">🟠 Email & WhatsApp Campaign Performance</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-medium mb-4">Email Metrics</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-blue-500" />
                      <span>Open Rate</span>
                    </div>
                    <span className="font-semibold">{emailData.openRate}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-5 w-5 text-green-500" />
                      <span>Click-Through Rate</span>
                    </div>
                    <span className="font-semibold">{emailData.ctr}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-purple-500" />
                      <span>Conversion Rate</span>
                    </div>
                    <span className="font-semibold">{emailData.conversion}%</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-sm font-medium">Best Subject Line:</p>
                    <p className="text-sm text-blue-700">"{emailData.bestSubject}"</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-medium mb-4">WhatsApp Performance</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-green-500" />
                      <span>Broadcasts Sent</span>
                    </div>
                    <span className="font-semibold">{emailData.whatsappMetrics.broadcastsSent}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Share2 className="h-5 w-5 text-blue-500" />
                      <span>Reply Rate</span>
                    </div>
                    <span className="font-semibold">{emailData.whatsappMetrics.replyRate}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-purple-500" />
                      <span>Conversion Rate</span>
                    </div>
                    <span className="font-semibold">{emailData.whatsappMetrics.conversion}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>Sales per 100 Chats</span>
                    </div>
                    <span className="font-semibold">{emailData.whatsappMetrics.salesPer100Chats}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="content">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">⚫ Content Marketing Intelligence Hub</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="font-medium mb-4">Blog Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Views</span>
                    <span className="font-semibold">{seoData.blogPerformance.totalViews.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Read Time</span>
                    <span className="font-semibold">{seoData.blogPerformance.avgReadTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bounce Rate</span>
                    <span className="font-semibold">{seoData.blogPerformance.bounceRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion</span>
                    <span className="font-semibold text-green-600">{seoData.blogPerformance.conversion}%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-medium mb-4">Top Content Themes</h4>
                <div className="space-y-2">
                  <Badge className="w-full justify-center">Natural Hair Care</Badge>
                  <Badge variant="secondary" className="w-full justify-center">Before/After Stories</Badge>
                  <Badge variant="outline" className="w-full justify-center">Hair Growth Tips</Badge>
                  <Badge variant="secondary" className="w-full justify-center">Product Reviews</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-medium mb-4">Repurpose Map</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium">Blog → Reel → Carousel</p>
                    <p className="text-gray-600">Hair Growth Guide</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-medium">Video → Blog → Email</p>
                    <p className="text-gray-600">Customer Testimonial</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="font-medium">Reel → Story → Blog</p>
                    <p className="text-gray-600">Before/After Result</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-lg">Weekly Neil Report Ready</h4>
            <p className="text-gray-600">Complete marketing performance snapshot across all channels</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Preview Report</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              🖨️ Download Neil Report
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
