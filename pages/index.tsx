import type { ReactElement } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { DrupalNode, getResourceCollectionFromContext } from "next-drupal";

import { NodeArticleTeaser } from "@/components/node-article";
import { Layout } from "@/components/layout";

interface IndexPageProps {
  nodes: DrupalNode[];
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <>
      <Head>
        <title>Next.js and Styled Components for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend with Styled Components for layout and styles."
        />
      </Head>
      <div>
        <h1>Latest Articles.</h1>

        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr />
            </div>
          ))
        ) : (
          <p>No nodes found</p>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<IndexPageProps>> => {
  const nodes = await getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[status]": 1,
        include: "field_image,uid",
        sort: "-created",
      },
    }
  );

  return {
    props: {
      nodes,
    },
    revalidate: 10,
  };
};
