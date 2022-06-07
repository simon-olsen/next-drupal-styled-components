export function NodeBasicPage({ node, ...props }) {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
      {node.body?.processed && (
        <div dangerouslySetInnerHTML={{ __html: node.body?.processed }} />
      )}
    </article>
  );
}
