export type Identifier = string;

export interface IDishNormalized {
  id: Identifier;
  name: string;
  price: number;
  ingredients: string[];
}

export interface IReviewNormalized {
  id: Identifier;
  userId: Identifier;
  text: string;
  rating: number;
}

export interface IRestaurantNormalized {
  id: Identifier;
  name: string;
  description: string;
  img: string;
  menu: Identifier[];
  reviews: Identifier[];
}

export interface IUserNormalized {
  id: Identifier;
  name: string;
}
