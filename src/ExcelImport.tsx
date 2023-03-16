import React, {useEffect} from 'react';
import {read, utils} from 'xlsx';
import axios from "axios";

const ExcelImport =() => {
  let url = "https://www.w3schools.com/xml/note.xml"
  useEffect(()=> {
    axios.get(url)
      .then((response) => {
        console.log('Your xml file as string', response.data);
      });
    }, [url])


    const handleImport = ($event: any) => {
      const files = $event.target.files;
      if (files.length) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const wb = read(event?.target?.result);
          const sheets = wb.SheetNames;

          if (sheets.length) {
            const rows = utils.sheet_to_json(wb.Sheets[sheets[0]])
            // setMovies(rows)
            console.log(rows)
          }
        }
        reader.readAsArrayBuffer(file);
      }
    }

    return (
      <div>
        <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required
               onChange={handleImport}
               accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
      </div>
    );
  }

  export default ExcelImport;
