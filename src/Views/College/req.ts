import { api } from "services/api";

export async function getCourses(setCoursesCollege: any) {
  await api
    .get("api.php")
    .then((res) => {
      console.log("res: ", res);
      setCoursesCollege(res.data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}
