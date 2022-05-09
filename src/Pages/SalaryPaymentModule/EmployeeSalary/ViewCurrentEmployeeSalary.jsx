import React from "react";
import FindEmployeeSalary from "../../../Components/SalaryPaymentModule/EmployeeSalary/FindEmployeeSalary";
import ViewEmloyeesalary from "../../../Components/SalaryPaymentModule/EmployeeSalary/ViewEmloyeesalary";

const ViewCurrentEmployeeSalary = () => {
  return (
    <div>
      <FindEmployeeSalary />
      <ViewEmloyeesalary />
      <h1>View Employee salary sheet page</h1>
    </div>
  );
};

export default ViewCurrentEmployeeSalary;
