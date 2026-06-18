// src/types/WishlistType.ts

export interface WishlistType {
  id: string; // Bisa juga number, tergantung struktur database Backend
  category: string;
  title: string;
  location: string;
  imageUrl: string;
  badgeColor: string;
}