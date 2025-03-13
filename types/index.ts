export interface IDish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface IReview {
  id: string;
  user: string;
  text: string;
  rating: number;
}

export interface IRestaurant {
  id: string;
  name: string;
  menu: IDish[];
  reviews: IReview[];
}
