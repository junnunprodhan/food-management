export type TSupplies = {
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: string;
  description: string;
};

export type TVolunteer = {
  _id?: string;
  name: string;
  email: string;
  image: string | undefined;
  phoneNumber: number;
  location: string;
};

export type TComment = {
  name: string;
  email: string;
  comment: string;
};

export type TTestimonial = {
  _id?: string;
  name: string;
  image: string | undefined;
  description: string;
};
