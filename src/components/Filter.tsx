"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-2 my-6 text-sm text-gray-500">
      <span>Sort by:</span>
      <select
        onChange={(e) => handleFilter(e.target.value)}
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-mx p-1 rounded-sm"
      >
        <option value="newest">Newest</option>
        <option value="oldes">Oldes</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
