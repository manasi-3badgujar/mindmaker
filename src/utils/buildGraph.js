// Optional: utility to merge or transform data if you switch formats
export function buildGraphFromJSON(jsonRoot) {
  const attach = (n) => {
    if (!n) return null;
    const children = (n.children || []).map(attach);
    return { ...n, children };
  };
  return attach(jsonRoot);
};