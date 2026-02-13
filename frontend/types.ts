export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  colors: string[];
}

export interface FeatureCard {
  title: string;
  description: string;
  image: string;
  label: string;
}
