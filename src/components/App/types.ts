type InputValue = {
    input: string;
}

interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  [key: string]: string; // для підтримки додаткових мов
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Tag {
  title: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  [key: string]: string; // для підтримки додаткових форматів URL
}

interface User {
  id: string;
  updated_at?: string;
  username: string;
  name: string;
  first_name?: string;
  [key: string]: any; // для підтримки додаткових полів користувача
}

interface Photo {
  id: string;
  urls: Urls;
  alt_description: string;
  likes: number;
  user: User;
  alternative_slugs?: AlternativeSlugs;
  asset_type?: string;
  blur_hash?: string;
  breadcrumbs?: object[]; // Типізуйте цей об'єкт, якщо відома структура
  color?: string;
  created_at?: string;
  current_user_collections?: any[]; // Типізуйте цей масив, якщо відома структура
  description?: string;
  height?: number;
  liked_by_user?: boolean;
  links?: Links;
  promoted_at?: string | null;
  slug?: string;
  sponsorship?: string | null;
  tags?: Tag[];
  topic_submissions?: object; // Типізуйте цей об'єкт, якщо відома структура
  updated_at?: string;
  width?: number;
}