import { PRICE_CHECKED_DISPLAY } from "@/data/pieces";
import type { Faq } from "./types";

/** Copy for the two hub pages, /buy-it-for-life and /gifts, shared with llms.txt. */
export interface HubCopy {
  title: string;
  description: string;
  question: string;
  answer: string;
  faqs: Faq[];
}

export const BIFL_HUB: HubCopy = {
  title: "Buy it for life",
  description:
    "Ranked buy-it-for-life lists: cast-iron skillets, brass and bronze door hardware, wood stoves, the kitchen and fireplace tools, checked against five tests.",
  question: "What does “buy it for life” mean?",
  answer:
    "Buying something once, built well enough to last the rest of your life and the next person's: solid materials, made to be repaired rather than replaced, and backed by a maker who stands behind it. In a home, that means cast iron, forged iron, solid brass and bronze, tin-lined copper, hardwood and well-supported stoves. Our five lists rank the pieces that pass the [Heirloom Standard](/standard).",
  faqs: [
    {
      question: "What does BIFL mean?",
      answer:
        "BIFL is short for \"buy it for life\": choosing things built to last a lifetime instead of cheaper ones that need replacing. The phrase was popularised by an online community of the same name, and it has become shorthand for products with solid materials, repairable construction and a lifetime warranty.",
    },
    {
      question: "Is buy it for life worth it?",
      answer:
        "For things used every day, usually: a $29.90 cast-iron skillet that lasts a lifetime costs less than a run of nonstick pans that each last a few years. For expensive pieces the case rests on repair and the maker's support as much as the price, which is why the fifth test asks for a real warranty and parts you can get.",
    },
    {
      question: "What home items last a lifetime?",
      answer:
        "Cast-iron and carbon-steel pans, enameled cast iron that's looked after, tin-lined copper, forged knives, thick hardwood boards, forged iron fire tools and andirons, solid brass and bronze door hardware, and cast-iron or soapstone stoves with parts support. What they share is solid material whose working surface can be renewed.",
    },
    {
      question: "Do you test these products?",
      answer:
        "We don't test them side by side. We check each piece's materials, construction, warranty and origin against the maker's own published facts, and rank on what we can verify. Where something isn't confirmed yet, the list and the piece page say so.",
    },
    {
      question: "Do you earn money from these lists?",
      answer:
        "Some links are affiliate links: if you buy through them, the retailer may pay us a commission at no extra cost to you. It never decides what we include or where it ranks, and many pieces on these lists earn us nothing. Each piece page says whether its link may earn a commission.",
    },
  ],
};

export const GIFT_HUB: HubCopy = {
  title: "Heirloom gift guides",
  description:
    "Holiday gift guides for gifts that last: under $100, under $250, for the cook, for a new home or a wedding, and splurges, all checked against five tests.",
  question: "What makes a good heirloom gift?",
  answer:
    "Something used every day that gets better with use and can be handed down: a cast-iron skillet, a forged fire poker, a solid brass hook, a hardwood board. Every gift in these guides is solid material with nothing to wear out that can't be renewed, and verifies at least four of our five tests. Prices start at $29.90, for the Lodge 12-inch skillet.",
  faqs: [
    {
      question: "What's a good heirloom gift under $50?",
      answer:
        "The Lodge 12-inch cast-iron skillet ($29.90), which passes all five of our tests, or Iwachu's cast-iron trivet from Morioka, Japan ($32.95). Both are in [heirloom gifts under $100](/gifts/under-100).",
    },
    {
      question: "What's a good housewarming gift that lasts?",
      answer:
        "Something for the house itself: a solid bronze door knocker, a solid brass or bronze hook, or a cast-iron Dutch oven for the kitchen. Our picks are in [housewarming and wedding gifts that last](/gifts/housewarming-and-wedding).",
    },
    {
      question: "What gift lasts forever?",
      answer:
        "Very little lasts forever, but solid iron, brass, bronze and copper come close. A cast-iron skillet, a forged poker or a bronze hook can be in use for generations, because there's no coating to wear off and nothing that can't be renewed.",
    },
    {
      question: "Are these prices current?",
      answer: `They're as listed on each retailer's page on ${PRICE_CHECKED_DISPLAY}. Prices change, especially around Black Friday, so check the retailer before you buy.`,
    },
  ],
};
