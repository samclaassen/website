import { notFound } from "next/navigation";
import { ListPageView } from "@/components/lists/ListPageView";
import { BIFL_LISTS, getList, listPath } from "@/lib/lists";
import { generatePageMetadata } from "@/lib/seo";
import { sitePhoto } from "@/lib/site-images";

interface Params {
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return BIFL_LISTS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const list = getList("bifl", slug);
  if (!list) return {};
  return generatePageMetadata({
    title: list.metaTitle ?? list.title,
    description: list.description,
    path: listPath(list),
    ogImage: list.image ? sitePhoto(list.image).src : undefined,
  });
}

export default async function BuyItForLifeListPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const list = getList("bifl", slug);
  if (!list) notFound();
  return <ListPageView list={list} />;
}
