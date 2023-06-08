import React from "react";
import * as XLSX from "xlsx";

interface IData {
  name: string;
  age: number;
}

const ExportExcel: React.FC = () => {
  const data: IData[] = [
    { name: "John Doe", age: 25 },
    { name: "Jane Smith", age: 30 },
    { name: "Bob Johnson", age: 35 },
  ];

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(
      new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      })
    );
    downloadLink.download = "data.xlsx";
    downloadLink.click();
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExportExcel;
