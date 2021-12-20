import { Category } from './category';
export class Page {
  id: number;
  logoImg: string;
  title: string;
  country: string;
  categories: Category;
  coverImg: string;
  description: string;
  youtubeLink: string;
  socialmediaLink: string;

  constructor(
    id,
    logoImg,
    title,
    country,
    categories,
    coverImg,
    description,
    youtubeLink,
    socialmediaLink
  ) {
    this.id = id;
    this.logoImg = logoImg;
    this.title = title;
    this.country = country;
    this.categories = categories;
    this.coverImg = coverImg;
    this.description = description;
    this.youtubeLink = youtubeLink;
    this.socialmediaLink = socialmediaLink;
  }
}
