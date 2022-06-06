import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { scheduleExamApi } from "../../../Api/PromotionModule/ExamApi/scheduleExamApi";

const ScheduleExamForm = () => {
  const [Exam, setExam] = useState([]);
  const { EmployeeID } = useParams();
  useEffect(() => {
    async function fetchData() {
      setExam(await scheduleExamApi(EmployeeID, Exam));
    }
    fetchData();
  }, []);
  console.log(Exam);
  return <div>from schedule exam</div>;
};
export default ScheduleExamForm;
