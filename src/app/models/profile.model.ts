export interface Profile {
  position: string;
  about: string;
  image: string;
  name: string;
  age: string;
  location: string;
  links: Link[];
}

interface Link{
  name: string;
  url: string;
}
