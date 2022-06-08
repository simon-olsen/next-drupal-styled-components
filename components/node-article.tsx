import Image from "next/image"
import Link from "next/link"
import { DrupalNode } from "next-drupal";
import { formatDate } from "@/lib/format-date";

interface NodePageProps {
  node: DrupalNode;
}

export const NodeArticle: React.FC<NodePageProps> = ({ node, ...props }) => {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
      <NodeMeta node={node} />
      {node.field_image?.uri && (
        <figure>
          <Image
            src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.field_image.uri.url}`}
            width={768}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={node.field_image.resourceIdObjMeta.alt}
          />
          {node.field_image.resourceIdObjMeta.title && (
            <figcaption>{node.field_image.resourceIdObjMeta.title}</figcaption>
          )}
        </figure>
      )}
      {node.body?.processed && (
        <div dangerouslySetInnerHTML={{ __html: node.body?.processed }} />
      )}
    </article>
  );
};

export const NodeArticleTeaser: React.FC<NodePageProps> = ({
  node,
  ...props
}) => {
  return (
    <article {...props}>
      <Link href={node.path.alias} passHref>
        <a>
          <h2>{node.title}</h2>
        </a>
      </Link>
      <NodeMeta node={node} />
      {node.field_image?.uri && (
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.field_image.uri.url}`}
            alt={`Supporting image for ${node.title}`}
            width={768}
            height={480}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
      {node.body?.summary && <p>{node.body.summary}</p>}
    </article>
  );
};

const NodeMeta: React.FC<NodePageProps> = ({ node, ...props }) => {
  return (
    <div {...props}>
      {node.uid?.display_name ? (
        <span>
          Posted by <span>{node.uid?.display_name}</span>
        </span>
      ) : null}
      <span> - {formatDate(node.created)}</span>
    </div>
  );
};
