import { NextApiRequest, NextApiResponse } from "next";

const albums = [
  {
    name: "Shakira: Bzrp Music Sessions, Vol. 53",
    artists: [
      {name: "Bizarrap"}
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b2732b6d78c5a3f6247aa997b812" },
    ]
  },
  {
    name: "3 Estrellas en el Conjunto",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b2738b0716a84b564e8ff6468de4" }
    ]
  },
  {
    name: "Peso Pluma: Bzrp Music Sessions, Vol. 55",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      {url: "https://i.scdn.co/image/ab67616d0000b27315583045b2fdb7d7bab10e81" }
    ]
  },
  {
    name: "Arcángel: Bzrp Music Sessions, Vol. 54",
    artists: [
      {name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b27390190f3f0092777b6a024112" }
    ]
  },
  {
    name: "Milo J: Bzrp Music Sessions, Vol. 57",
    artists: [
      {name: "Bizarrap"}
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b273055cea306ade28a459e948b4" }
    ]
  },
  {
    name: "en dormir sin Madrid",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b27344fa31a89a1e549f74908a81" }
    ]
  },
  {
    name: "YSY A: Bzrp Music Sessions, Vol. 37",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b2739f185af16085ffa8c91b94eb" }
    ]
  },
  {
    name: "Rauw Alejandro: Bzrp Music Sessions, Vol. 56",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b27395dcc1f2e2a2ad2050f7f41d" }
    ]
  },
  {
    name: "Duki: Bzrp Music Sessions, Vol. 50",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b27393c4eec56cea95c9022ed28f" }
    ]
  },
  {
    name: "Tiago PZK: Bzrp Music Sessions, Vol. 48",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b2735bddce84bc8f03ac82c988d4" }
    ]
  },
  {
    name: "Eladio Carrion: Bzrp Music Sessions, Vol. 40",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b27370030b2894d44b3fb2a53ed8" }
    ]
  },
  {
    name: "Nathy Peluso: Bzrp Music Sessions, Vol. 36",
    artists: [
      { name: "Bizarrap" }
    ],
    images: [
      { url: "https://i.scdn.co/image/ab67616d0000b273559e8529d086f60e1752930b" }
    ]
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(albums)
}
