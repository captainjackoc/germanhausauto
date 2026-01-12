
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
