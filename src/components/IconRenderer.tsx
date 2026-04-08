import * as React from 'react';
import {
  PlaneLanding, BedDouble, Utensils, Landmark, Wine, Palette, Coffee,
  TreePine, Church, Bell, Book, Train, Castle, Leaf, Theater, ShoppingBag, Pizza,
  Building2, Store, Building, Sprout, Music, Map, GlassWater, Skull, Car, PlaneTakeoff,
  CalendarDays, Euro, Footprints, TrainFront, Info, MapPin, Clock, Phone, Globe, Ticket,
  Heart, BookOpen, ArrowRight, ArrowLeft, X, Search, ChevronDown, Flag
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'fa-plane-arrival': PlaneLanding,
  'fa-bed': BedDouble,
  'fa-utensils': Utensils,
  'fa-bridge': Landmark,
  'fa-monument': Landmark,
  'fa-wine-glass': Wine,
  'fa-palette': Palette,
  'fa-coffee': Coffee,
  'fa-building-columns': Landmark,
  'fa-tree': TreePine,
  'fa-landmark': Landmark,
  'fa-church': Church,
  'fa-bell': Bell,
  'fa-book': Book,
  'fa-train': Train,
  'fa-chess-rook': Castle,
  'fa-leaf': Leaf,
  'fa-place-of-worship': Church,
  'fa-masks-theater': Theater,
  'fa-bag-shopping': ShoppingBag,
  'fa-pizza-slice': Pizza,
  'fa-tree-city': Building2,
  'fa-store': Store,
  'fa-building': Building,
  'fa-seedling': Sprout,
  'fa-music': Music,
  'fa-road': Map,
  'fa-archway': Landmark,
  'fa-champagne-glasses': Wine,
  'fa-skull': Skull,
  'fa-mug-hot': Coffee,
  'fa-taxi': Car,
  'fa-plane-departure': PlaneTakeoff,
  'fa-calendar-days': CalendarDays,
  'fa-euro-sign': Euro,
  'fa-shoe-prints': Footprints,
  'fa-train-subway': TrainFront,
  'fa-circle-info': Info,
  'fa-location-dot': MapPin,
  'fa-clock': Clock,
  'fa-phone': Phone,
  'fa-globe': Globe,
  'fa-ticket': Ticket,
  'fa-heart': Heart,
  'fa-address-book': BookOpen,
  'fa-arrow-right': ArrowRight,
  'fa-arrow-left': ArrowLeft,
  'fa-times': X,
  'fa-search': Search,
  'fa-chevron-down': ChevronDown,
  'fa-flag-checkered': Flag
};

export const IconRenderer = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = iconMap[name] || MapPin;
  return <IconComponent className={className} />;
};
