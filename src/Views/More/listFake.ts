import { stacksMore } from "Router/routes";
import { ItemListProps } from "types/ItemMoreProps";

export const list: ItemListProps[] = [
  {
    id: "1",
    icon: "event-note",
    name: "Agenda",
    route: stacksMore.schedule,
  },
  {
    id: "2",
    icon: "web-asset",
    name: "Nossas Páginas",
    route: stacksMore.ourPages,
  },
  {
    id: "3",
    icon: "heart",
    name: "Pedidos de Oração",
    route: stacksMore.askForPray,
  },
  {
    id: "4",
    icon: "attach-money",
    name: "Contribua",
    route: stacksMore.donation,
  },
  {
    id: "5",
    icon: "share",
    name: "Compartilhar",
    route: stacksMore.share,
  },
  {
    id: "6",
    icon: "phone-in-talk",
    name: "Fale Conosco",
    route: stacksMore.talkToUs,
  },
];
