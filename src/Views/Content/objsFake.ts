import { faker } from "@faker-js/faker";
import { ContentProps } from "types/ContentProps";

export const data: ContentProps[] = [
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
];

export const data2: ContentProps[] = [
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(5),
    img: faker.image.avatar(),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
];

export const data3: ContentProps[] = [
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
];

export const data4: ContentProps[] = [
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 500, height: 300 }),
    subtitle: faker.lorem.slug(2),
  },
];
