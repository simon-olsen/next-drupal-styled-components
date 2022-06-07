import Link from "next/link"

import { PreviewAlert } from "@/components/preview-alert"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div>
        <header>
          <div>
            <Link href="/" passHref>
              <a>Next.js for Drupal</a>
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
