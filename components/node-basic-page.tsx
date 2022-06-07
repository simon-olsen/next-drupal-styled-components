import { DrupalNode } from "next-drupal";

interface NodePageProps {
  node: DrupalNode;
}

export const NodeBasicPage: React.FC<NodePageProps> = ({ node, ...props }) => {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
      {node.body?.processed && (
        <div dangerouslySetInnerHTML={{ __html: node.body?.processed }} />
      )}
    </article>
  );
};
