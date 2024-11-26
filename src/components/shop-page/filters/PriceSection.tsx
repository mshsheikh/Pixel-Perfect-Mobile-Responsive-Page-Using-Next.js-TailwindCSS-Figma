import React from "react";
import { Slider } from "@/components/ui/slider";

const PriceSection = () => {
  return (
    <div className="border-none">
      <div className="text-black font-bold text-xl p-0 py-0.5">
        Price
      </div>
      <div className="pt-4">
        <Slider
          defaultValue={[50, 200]}
          min={0}
          max={250}
          step={1}
          label="$"
        />
        <div className="mb-3" />
      </div>
    </div>
  );
};

export default PriceSection;
