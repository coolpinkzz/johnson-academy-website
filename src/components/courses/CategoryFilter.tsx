type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="sticky top-16 z-20 -mx-4 border-y border-white/10 bg-black/70 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-x-auto">
        <div className="flex min-w-max items-center gap-3 pb-1">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/5 text-muted hover:bg-white/10 hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
