import { Identifier } from "../types";

interface IEntity {
  id: Identifier;
}

export function getEntities<Item extends IEntity>(arr: Item[]) {
  return arr.reduce<Record<Identifier, Item>>((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {});
}

export function getIds<Item extends IEntity>(arr: Item[]) {
  return arr.map<Item["id"]>(({ id }) => id);
}
