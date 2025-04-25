import fetchPhoto from "./fetchPhoto";

export interface Photo {
  id: number;
  urls: {
    regular: string;
    small?: string;
  };
  alt: string;
  likes: number;
  description: string;
  user: {
    name: string;
    location: string;
  };
}

export interface SpinnerProps {
  loading: boolean;
  size: number;
  color: string;
}
export interface LoadMoreBtnProps {
  onClick: () => void;
}
