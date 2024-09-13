import { api } from "services/api";
import { CoursesCollegeProps } from "types/CoursesCollegeProps";
import { faker } from "@faker-js/faker";

export async function getCourses(setCoursesCollege: any) {
  await api
    .get("api.php")
    .then((res) => {
      if (res.data.length > 0) {
        // isso esta aqui ate o sergio colocar a imagem na api
        const newList = res.data.map((item: CoursesCollegeProps) => {
          item.imgUrl = faker.image.url({ width: 500, height: 300 });
          return item;
        });
        setCoursesCollege(newList);
      }
    })
    .catch((error) => {
      setCoursesCollege([]);
    });
}
