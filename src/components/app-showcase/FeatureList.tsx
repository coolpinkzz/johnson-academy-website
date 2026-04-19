import { CheckCircle2 } from "lucide-react";
import type { AppShowcaseFeature } from "@/data/app-showcase";

type FeatureListProps = {
  features: AppShowcaseFeature[];
  className?: string;
};

export default function FeatureList({ features, className = "" }: FeatureListProps) {
  return (
    <ul
      className={`flex flex-col gap-4 ${className}`.trim()}
      aria-label="Johnson Academy app features"
    >
      {features.map((feature) => (
        <li key={feature.title} className="flex gap-3">
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            strokeWidth={2}
            aria-hidden
          />
          <div>
            <h3 className="text-base font-semibold text-white">{feature.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
