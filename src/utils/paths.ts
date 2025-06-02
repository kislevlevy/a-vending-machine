export const getBasePath = (): string => {
  return import.meta.env.VITE_BASE_URL || '/';
};

// Helper function to construct asset URLs
export const getAssetUrl = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};
