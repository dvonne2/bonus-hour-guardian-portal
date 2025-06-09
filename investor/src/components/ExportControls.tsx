import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Download } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface ExportControlsProps {
  tabName: string;
  theme?: 'tomi' | 'ron' | 'thiel' | 'andy' | 'otunba' | 'dangote' | 'neil';
}

export const ExportControls: React.FC<ExportControlsProps> = ({ tabName, theme = 'tomi' }) => {
  const [dateRange, setDateRange] = useState('this-month');
  const [exportFormat, setExportFormat] = useState('pdf');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const { toast } = useToast();

  const themeColors = {
    tomi: 'bg-blue-900 hover:bg-blue-800',
    ron: 'bg-green-600 hover:bg-green-700',
    thiel: 'bg-slate-800 hover:bg-slate-900',
    andy: 'bg-gray-700 hover:bg-gray-800',
    otunba: 'bg-green-800 hover:bg-green-900',
    dangote: 'bg-gray-800 hover:bg-gray-900',
    neil: 'bg-blue-600 hover:bg-blue-700'
  };

  const handleExport = () => {
    const timestamp = new Date().toISOString();
    const formatType = exportFormat.toUpperCase();
    
    toast({
      title: "Export Started",
      description: `${tabName} report (${formatType}) is being generated for ${dateRange}...`,
    });

    // Simulate export process
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `${tabName}_${dateRange}_${timestamp}.${exportFormat} has been downloaded.`,
      });
    }, 2000);
  };

  return (
    <Card className="p-4 mb-6 bg-white">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-2">Date Range</label>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="last-7-days">Last 7 Days</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="ytd">Year to Date</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {dateRange === 'custom' && (
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[150px]">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, 'PPP') : 'Start Date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[150px]">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, 'PPP') : 'End Date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        )}

        <div className="min-w-[120px]">
          <label className="block text-sm font-medium mb-2">Format</label>
          <Select value={exportFormat} onValueChange={setExportFormat}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="xlsx">Excel</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-6">
          <Button 
            onClick={handleExport}
            className={`${themeColors[theme]} text-white`}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>
    </Card>
  );
};
