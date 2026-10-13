import records from "./curated-objects.json";

export interface CuratedObject {
  id: string;
  title: string;
  kind: "museum" | "listing";
  era: string;
  category: "Lighting" | "Hardware" | "Decorative objects";
  type: string;
  creator: string;
  date: string;
  medium: string;
  note: string;
  source: string;
  sourceUrl: string;
  checkedOn: string;
  price?: string;
  priceDate?: string;
  image?: {
    src: string;
    alt: string;
    originalUrl: string;
    credit: string;
    license: string;
    licenseUrl: string;
    evidenceUrl: string;
    width: number;
    height: number;
  };
}

export const OBJECTS = records as CuratedObject[];
export const getObject = (id: string) => OBJECTS.find((object) => object.id === id);
export const displayDate = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
