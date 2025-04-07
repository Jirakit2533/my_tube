import { useEffect, useRef, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { APP_URL } from "@/constants";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

interface SearchInputProps {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpenAction: (value: boolean) => void;
}

export const SearchInput = ({ isMobileSearchOpen, setIsMobileSearchOpenAction }: SearchInputProps) => {
  return (
    <Suspense fallback={<Skeleton className="h-10 w-full" />}>
      <SearchInputSuspense 
        isMobileSearchOpen={isMobileSearchOpen} 
        setIsMobileSearchOpenAction={setIsMobileSearchOpenAction} 
      />
    </Suspense>
  )
}

// SearchInputSuspense component ที่รับ props
const SearchInputSuspense = ({ isMobileSearchOpen, setIsMobileSearchOpenAction }: SearchInputProps) =>  {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const categoryId = searchParams.get("categoryId") || "";

  const [value, setValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = new URL("/search", APP_URL);
    const newQuery = value.trim();

    if (newQuery) {
      url.searchParams.set("query", encodeURIComponent(newQuery));
    } else {
      url.searchParams.delete("query");
    }

    if (categoryId) {
      url.searchParams.set("categoryId", categoryId);
    }

    router.push(url.toString());
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileSearchOpen && inputRef.current) {
        inputRef.current.focus();
      }

      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsMobileSearchOpenAction(false);
      }
    };

    if (isMobileSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileSearchOpen, setIsMobileSearchOpenAction]);

  return (
    <>
      <form className="hidden md:flex w-full max-w-[600px]" onSubmit={handleSearch}>
        <div className="w-full">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500" 
          />
          {value && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setValue("")}
              className="absolute right-2 top1/2 -translate-y-1/2 rounded-full"
            >
              <XIcon className="text-gray-500" />
            </Button>
          )}
        </div>
        <button
          disabled={!value.trim()}
          type="submit"
          className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" >
          <SearchIcon className="size-5" />
        </button> 
      </form>

      {/* Mobile Search Icon */}
      <div className="flex items-end md:hidden">
        {!isMobileSearchOpen && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileSearchOpenAction(true)}
          >
            <SearchIcon />
          </Button>
        )}
      </div>

      {/* Search Form */}
      {isMobileSearchOpen && (
        <form
          ref={formRef}
          className="flex items-center w-full max-w-[600px] relative top-0 left-0 right-0 bg-white p-2 z-50"
          onSubmit={handleSearch}
        >
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full pl-4 py-2 pr-10 rounded-full border focus:outline-none focus:border-blue-500"
          />

          {/* Submit button */}
          <Button
            disabled={!value.trim()}
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-2"
          >
            <SearchIcon className="text-gray-600" />
          </Button>
        </form>
      )}
    </>
  );
};
