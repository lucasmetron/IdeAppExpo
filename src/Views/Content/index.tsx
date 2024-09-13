import React from "react";
import { faker } from "@faker-js/faker";

import * as S from "./styles";
import VitrineContents from "components/VitrineContents";
import MainContent from "components/MainContent";
import { ContentProps } from "types/ContentProps";

export default function Content() {
  const data: ContentProps[] = [
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
  ];

  const data2: ContentProps[] = [
    {
      title: faker.lorem.slug(3),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
  ];

  const data3: ContentProps[] = [
    {
      title: faker.lorem.slug(3),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
  ];

  const data4: ContentProps[] = [
    {
      title: faker.lorem.slug(3),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
    {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(5),
      img: faker.image.url({ width: 500, height: 300 }),
      subtitle: faker.lorem.slug(2),
    },
  ];
  return (
    <S.container>
      <MainContent data={data} />
      <VitrineContents title="Adicionados recentemente" data={data2} />
      <VitrineContents title="Células" data={data3} />
      <VitrineContents title="Sermões de domingo" data={data4} />
    </S.container>
  );
}
