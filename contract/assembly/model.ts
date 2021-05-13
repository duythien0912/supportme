// @nearfile

@nearBindgen
export class Store {
  storeID: string;
  ownerID: string;
  domain: string;
  name: string;
  swags: Swag[];
}

@nearBindgen
export class Swag {
  ownerID: string;
  name: string;
  description: string;
  price: string;
}
