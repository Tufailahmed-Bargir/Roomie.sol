import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";

interface PriceRange {
  min: number;
  max: number;
}

interface FilterContentProps {
  verifiedOnly: boolean;
  setVerifiedOnly: (value: boolean) => void;
  priceRange: PriceRange;
  setPriceRange: (value: PriceRange) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
}

export function FilterContent({
  verifiedOnly,
  setVerifiedOnly,
  priceRange,
  setPriceRange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Price Range (per night)</h3>
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: Number(e.target.value) })
            }
            className="w-full"
          />
          <span>-</span>
          <Input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: Number(e.target.value) })
            }
            className="w-full"
          />
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-medium mb-2">Dates</h3>
        <div className="space-y-2">
          <div>
            <label htmlFor="check-in" className="text-sm text-gray-600">
              Check-in
            </label>
            <Input
              id="check-in"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="check-out" className="text-sm text-gray-600">
              Check-out
            </label>
            <Input
              id="check-out"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Verified properties only</span>
        <Switch checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
      </div>
      <Separator />
      <div className="flex space-x-2">
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
          Apply Filters
        </Button>
        <Button variant="outline" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  );
}
