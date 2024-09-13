import { faker } from "@faker-js/faker";
import { ContentProps } from "types/ContentProps";

export const data: ContentProps[] = [
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(5),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
];

export const data2: ContentProps[] = [
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(50),
    img: faker.image.avatar(),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
];

export const data3: ContentProps[] = [
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
];

export const data4: ContentProps[] = [
  {
    title: faker.lorem.slug(3),
    content: faker.lorem.paragraph(50),
    img: faker.image.url({ width: 800, height: 500 }),
    subtitle: faker.lorem.slug(2),
    creator: faker.person.fullName(),
  },
];
