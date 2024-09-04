import { api } from "services/api";
import { CoursesCollegeProps } from "types/CoursesCollegeProps";

export async function getCourses(setCoursesCollege: any) {
  await api
    .get("api.php")
    .then((res) => {
      if (res.data.length > 0) {
        // isso esta aqui ate o sergio colocar a imagem na api
        const newList = res.data.map((item: CoursesCollegeProps) => {
          item.imgUrl =
            "https://static.mobfiq.com.br/apps-banners/e13162f1-bfb8-4d7e-a0a0-efbdf2033fce-200613ad-2a7e-49e4-98b8-eb12fae89c20.png";
          return item;
        });
        setCoursesCollege(newList);
      }
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}
