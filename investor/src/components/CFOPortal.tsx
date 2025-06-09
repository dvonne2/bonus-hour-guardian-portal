
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TomiDaviesTab } from './tabs/TomiDaviesTab';
import { RonConwayTab } from './tabs/RonConwayTab';
import { PeterThielTab } from './tabs/PeterThielTab';
import { AndyBechtolsheimTab } from './tabs/AndyBechtolsheimTab';
import { OtunbaShoyomboTab } from './tabs/OtunbaShoyomboTab';
import { InvestorReadinessTab } from './tabs/InvestorReadinessTab';
import { DangoteDisciplineTab } from './tabs/DangoteDisciplineTab';
import { NeilPatelTab } from './tabs/NeilPatelTab';
import { UniversalHeader } from './UniversalHeader';

export const CFOPortal = () => {
  const [selectedTab, setSelectedTab] = useState('investor-readiness');

  return (
    <div className="min-h-screen bg-gray-50">
      <UniversalHeader />
      
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Vitalvida Investor Portal</h1>
          <p className="text-gray-600">World-class financial oversight and investor readiness for the Men of Steel</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1 mb-8 h-auto p-1">
            <TabsTrigger 
              value="investor-readiness" 
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-purple-700 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">📁 Master</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Readiness</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tomi-davies" 
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-blue-900 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">Tomi</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Governance</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ron-conway"
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">Ron</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Scale</span>
            </TabsTrigger>
            <TabsTrigger 
              value="peter-thiel"
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-slate-800 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">Thiel</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Strategy</span>
            </TabsTrigger>
            <TabsTrigger 
              value="andy-bechtolsheim"
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-gray-700 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">Andy</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Tech</span>
            </TabsTrigger>
            <TabsTrigger 
              value="otunba-shoyombo"
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-green-800 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">Otunba</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Control</span>
            </TabsTrigger>
            <TabsTrigger 
              value="dangote-discipline"
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-gray-800 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">🏭 Dangote</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Cost Control</span>
            </TabsTrigger>
            <TabsTrigger 
              value="neil-patel"
              className="flex flex-col text-xs px-2 py-2 sm:py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-[60px] sm:min-h-[70px]"
            >
              <span className="font-medium">📈 Neil</span>
              <span className="text-[10px] sm:text-xs opacity-75 mt-1">Growth</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="investor-readiness">
            <InvestorReadinessTab />
          </TabsContent>
          
          <TabsContent value="tomi-davies">
            <TomiDaviesTab />
          </TabsContent>
          
          <TabsContent value="ron-conway">
            <RonConwayTab />
          </TabsContent>
          
          <TabsContent value="peter-thiel">
            <PeterThielTab />
          </TabsContent>
          
          <TabsContent value="andy-bechtolsheim">
            <AndyBechtolsheimTab />
          </TabsContent>
          
          <TabsContent value="otunba-shoyombo">
            <OtunbaShoyomboTab />
          </TabsContent>

          <TabsContent value="dangote-discipline">
            <DangoteDisciplineTab />
          </TabsContent>

          <TabsContent value="neil-patel">
            <NeilPatelTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
