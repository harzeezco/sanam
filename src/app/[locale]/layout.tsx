import { ReactNode } from "react";
import { getSEOTags } from "@/src/libs/seo";

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default async function RootLayout({ children }: { children: ReactNode }) {

  return (
    <div>
      {children}
    </div>
  );
}
