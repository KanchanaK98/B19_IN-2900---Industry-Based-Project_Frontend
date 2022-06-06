import { useState, useEffect } from "react";
import { viewAllExamsApi } from "../../../Api/PromotionModule/ExamApi/viewAllExamsApi";

const ViewAllExamList = () => {
  const [PaperList, setPaperList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPaperList(await viewAllExamsApi());
    }
    fetchData();
  }, []);
  console.log(PaperList);
  return <div>from all exm list</div>;
};
export default ViewAllExamList;
