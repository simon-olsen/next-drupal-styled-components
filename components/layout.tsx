import React, { ReactNode } from "react";
import Link from "next/link";
import { PreviewAlert } from "@/components/preview-alert";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --baseFont: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    }

  html {
    box-sizing: border-box;
    font-family: var(--baseFont);
    font-size: 20px; /*  Base font size for setting rems */
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  h1 {
      font-family: var(--baseFont);
  }
  h2, h3 {
      font-weight: 700;
  }
  p {
    line-height: 1.4;
  }
  /* HANDY CLASSES */
  /* Don't wrap emails, phones or other non-wrapping strings */
  .nowrap,
  .date,
  .email,
  .phone {
    white-space: nowrap;
  }

  /* Align text */
  .text-center,
  .text-centre,
  .text--center,
  .text--centre {
    text-align: center;
  }
  .text-right,
  .text--right {
    text-align: right;
  }
  .text-left,
  .text--left {
    text-align: left;
  }

  .text-small,
  .text--small {
    font-size: 80%;
  }

  .text-large,
  .text--large {
    font-size: 120%;
  }

  .text-larger,
  .text--larger {
    font-size: 150%;
  }

  /* Text colours */
  .text--yellow {
    color: var(--ro-yellow);
  }
  .text--white {
    color: var(--ro-white);
  }
  .text--grey {
    color: var(--ro-grey);
  }
  .text--black {
    color: var(--ro-black);
  }

  /* Transform text */
  .text--uppercase {
    text-transform: uppercase;
  }
  .text--titlecase,
  .text--capitalise,
  .text--capitalize {
    text-transform: capitalize;
  }
`;

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <PreviewAlert />
      <div>
        <header>
          <div>
            <Link href="/" passHref>
              <a>Styled Components, Next.js and Drupal</a>
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};
