"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../css/TableViewModeling.module.css";
import { TABS_POSITION } from "../lib/definitions";
import { useSearch } from "../hooks/searchContext";
import Link from "next/link";

interface TableViewModelingProps {
  title?: string;
  id: TABS_POSITION;
  tools?: boolean;
  data: {
    name: string;
    uri: string;
    gender: string;
    add_to: string;
    file_type: string;
    file_size: number;
  }[] | {
    name: string;
    uri: string;
    gender: string;
    add_to: string;
    file_type: string;
    file_size: string;
  }[];
};

type FilterData = {
  name: string;
  uri: string;
  gender: string;
  add_to: string;
  file_type: string;
  file_size: string | number;
}

export const TableViewModeling: React.FC<TableViewModelingProps> = function ({ title, id, tools, data }) {
  const { foundItem, updateTableRef } = useSearch();
  const tableRef = useRef<HTMLTableElement | null>(null);
  const fileTypeSelectRef = useRef<HTMLSelectElement | null>(null);

  const [filteredData, setFilteredData] = React.useState<FilterData[]>(data);
  const [inputValue, setInputValue] = React.useState<string>("");

  const [fileType, setFileType] = React.useState<string | undefined>(undefined);
  const [fileGender, setFileGender] = React.useState<string | null>(null);

  const handleFilterByFileType = function () {
    setFileType(fileTypeSelectRef.current?.value);
    console.info(fileType);
  }


  const handleFilterByNameWhenKeyPressed = function (e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      if (!(inputValue === "" || inputValue === null)) {
        let results = data.filter((item) => item.name.toLocaleLowerCase() === inputValue.toLowerCase());
        if (!(results === null || results.length === 0)) {
          setFilteredData(results);
          return;
        } else {
          alert("No results found");
          setFilteredData(data);
          return;
        }
      } else {
        alert("Tapez un filtre");
        setFilteredData(data);
      }
    }
  };


  useEffect(() => {
    updateTableRef(tableRef);
    setFileType("invalid-value");
  }, [updateTableRef])

  return (
    <div className={`${styles.table_view_modeling} flex`} id={id.toString()}>
      <div className={`${styles.table_view_modeling__heading} flex`}>
        <h3>•&nbsp;{title}</h3>
        {
          tools &&
          <div className="flex">
            <select name="gender-select" id="gender-select" onChange={(e) => setFileGender(e.target.value)}>
              <option defaultValue={"invalid-value"}>Genre du document</option>
              <option value="gender-1">By Gender 1</option>
              <option value="gender-2">By Gender 2</option>
            </select>
            <select name="type-select" id="type-select" ref={fileTypeSelectRef} onChange={() => handleFilterByFileType()}>
              <option defaultValue={"invalid-value"}>Type du document</option>
              <option>KML(.kml)</option>
              <option>DOC(.docx)</option>
              <option>PDF(.pdf)</option>
              <option>ZIP(.pdf)</option>
              <option>TXT(.txt)</option>
              <option>DWG(.dwg)</option>
              <option>GEO(.geo)</option>
              <option>DATA(.data)</option>
              <option>EXE(.exe) Pour Windows</option>
              <option>PPT(.ppt)</option>
            </select>
            <input type="search" placeholder="Filter by name" onKeyUp={(e) => handleFilterByNameWhenKeyPressed(e)} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          </div>
        }
      </div>
      {/* {withMoreTools && <div className="filter-by flex">
      <p>Trier Par:&nbsp;</p>
      <div className="flex">
        <input type="date" name="filter-by-add-date" id="filter-by-add-date" placeholder="Date d'ajout" min={0} />
        <input type="text" name="filter-by-name" id="filter-by-name" placeholder="Nom du fichier" />
      </div>
    </div>} */}
      <table className={styles.table_view_modeling_table} ref={tableRef}>
        <thead>
          <th><strong>Name</strong></th>
          <th><strong>Genre</strong></th>
          <th><strong>Ajouter le</strong></th>
          <th><strong>Type</strong></th>
          <th><strong>Taille</strong></th>
        </thead>
        <tbody>
          {filteredData.map((dta, index) => (
            <tr key={index} className={foundItem === dta.name ? styles.__highlighted : undefined}>
              <td>&nbsp;→ <a href={''} target="_blank">&nbsp;{dta.name}</a></td>
              <td>&nbsp;&nbsp;&nbsp;<span>{dta.gender}</span></td>
              <td>&nbsp;&nbsp;&nbsp;<span>{dta.add_to}</span></td>
              <td>&nbsp;&nbsp;&nbsp;<span>{dta.file_type}</span></td>
              <td>&nbsp;&nbsp;&nbsp;<span>{dta.file_size} MB</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredData.length >= 11 ? (
        <span className={`${styles.table_view_modeling_incoming_pagination} flex`}>
        [
        <Link href="/" className={styles.table_view_modeling_incoming_pagination_active}>Prev</Link>
        <Link href="/">Next</Link>
        ]</span>
      ) : undefined}
    </div>
  );
}