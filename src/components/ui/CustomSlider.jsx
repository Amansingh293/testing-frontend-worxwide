import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export const CustomSlider = React.forwardRef(
  (
    {
      className,
      trackColor,
      thumbColor,
      thumbSize,
      height,
      handleChange,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex items-center w-full touch-none select-none",
          className
        )}
        value={value}
        onValueChange={handleChange}
        {...props}
      >
        {/* Track */}
        <SliderPrimitive.Track
          className="relative w-full rounded-full bg-gray-300" // Keep track background white
          style={{
            height: height || "8px", // ✅ Set track height
          }}
        >
          {/* Completed Part */}
          <SliderPrimitive.Range
            className="absolute h-full rounded-full"
            style={{
              backgroundColor: trackColor || "#207C97", // ✅ Completed part color
            }}
          />
        </SliderPrimitive.Track>

        {/* Thumb */}
        {props.defaultValue.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cn(
              "block rounded-full border border-gray-300 shadow cursor-pointer",
              thumbSize ? `w-[${thumbSize}] h-[${thumbSize}]` : "w-4 h-4"
            )}
            style={{
              backgroundColor: thumbColor || "#207C97", // ✅ Thumb color directly
            }}
          />
        ))}
      </SliderPrimitive.Root>
    );
  }
);

CustomSlider.displayName = "CustomSlider";
