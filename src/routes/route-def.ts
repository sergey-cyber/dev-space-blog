export interface RouteDef {
  getPath: (params?: Record<string, string>) => string;
  label?: string;
}
