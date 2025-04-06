export type Identifier = string;

export interface IDish {
  id: Identifier;
  name: string;
  price: number;
  ingredients: string[];
}

export interface IReview {
  id: Identifier;
  user: string;
  text: string;
  rating: number;
}

export interface IRestaurant {
  id: Identifier;
  name: string;
  menu: IDish[];
  reviews: IReview[];
}

export interface IUser {
  name: string;
}

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
  menu: Identifier[];
  reviews: Identifier[];
}

export interface IUserNormalized {
  id: Identifier;
  name: string;
}
