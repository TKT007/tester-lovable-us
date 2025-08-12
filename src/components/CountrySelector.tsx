import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CountrySelectorProps {
  onCountrySelect: (country: string) => void;
}

export const CountrySelector = ({ onCountrySelect }: CountrySelectorProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleValueChange = (value: string) => {
    setSelectedCountry(value);
    onCountrySelect(value);
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-card-foreground">
          Which country do you reside in?
        </h2>
        <p className="text-sm text-muted-foreground">
          This reward is currently limited to specific regions. Please confirm your location.
        </p>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <Select onValueChange={handleValueChange} value={selectedCountry}>
          <SelectTrigger className="w-full h-12 bg-card border-border">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="united-states" className="h-12">
              United States
            </SelectItem>
            <SelectItem value="canada" className="h-12">
              Canada
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
