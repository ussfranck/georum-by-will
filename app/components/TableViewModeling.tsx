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

  const [filteredData, setFilteredData] = React.useState<FilterData[]>(data);
  const [inputValue, setInputValue] = React.useState<string>("");

  const [fileType, setFileType] = React.useState<string | undefined>("");
  const [fileGender, setFileGender] = React.useState<string | null>(null);

  useEffect(() => {
    updateTableRef(tableRef);
    perfomFilterByFileType();
  }, [updateTableRef, fileType]);


  const perfomFilterByFileType = async function () {
    let results = async function () {
      return new Promise<FilterData[]>((resolve, reject) => {
        const result : FilterData[] = data.filter(item => item.file_type.toLocaleLowerCase() === fileType);
        if (!data) {
          reject(data);
          return;
        }
        resolve(result);
      })
    };

    const filterResult = await results();
    // console.log(filterResult);

    if (!(filterResult === null || filterResult.length === 0)) {
      setFilteredData(filterResult);
      // console.profile("Filte Filter with success");
      return;
    } else {
      setFilteredData(data);
      // console.warn(`File Unlocated -> ${fileType}`);
      return;
    }
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

  return (
    <div className={`${styles.table_view_modeling} flex`} id={id.toString()}>
      <div className={`${styles.table_view_modeling__heading} flex`}>
        <h3>•&nbsp;{title}</h3>
        {
          tools &&
            id === TABS_POSITION.ALL_DOCUMENTS ? (
            <div className="flex">
              <select name="gender-select" id="gender-select" onChange={(e) => setFileGender(e.target.value)}>
                <option value={""} disabled>Genre du document</option>
                <option value="livres">Livres</option>
                <option value="livres">Article</option>
                <option value="livres">Memoire</option>
                <option value="livres">Tutos</option>
              </select>
              <select name="type-select" id="type-select" onChange={(e) => setFileType(e.target.value)} value={fileType}>
                <option value={""} disabled>Type du document</option>
                <option value={"kml"}>KML(.kml)</option>
                <option value={"pdf"}>PDF(.pdf)</option>
                <option value={"zip"}>ZIP(.zip)</option>
                <option value={"txt"}>TXT(.txt)</option>
                <option value={"dwg"}>DWG(.dwg)</option>
                <option value={"geo"}>GEO(.geo)</option>
                <option value={"data"}>DATA(.data)</option>
                <option value={"exe"}>EXE(.exe) Pour Windows</option>
                <option value={"ppt"}>PPT(.ppt)</option>
              </select>
              <input type="search" placeholder="Fitrer Par Nom" onKeyUp={(e) => handleFilterByNameWhenKeyPressed(e)} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            </div>
          ) :
            (
              <div className="flex">
                <input type="search" placeholder="Filtrer Par Nom" onKeyUp={(e) => handleFilterByNameWhenKeyPressed(e)} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
              </div>
            )
        }
      </div>
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