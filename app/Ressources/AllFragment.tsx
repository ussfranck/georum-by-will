import React from "react"
import { TableViewModeling } from "../components/TableViewModeling"
import { TABS_POSITION } from "../lib/definitions"
import { ServerDataPlaceHolder } from "../lib/placeholder"

export const AllViewFragment = function () {
  return (
    <React.Fragment>
      <TableViewModeling title={"All Documents"} id={TABS_POSITION.ALL_DOCUMENTS} data={ServerDataPlaceHolder.data[0].data} />
      <TableViewModeling title={"All Softwares"} id={TABS_POSITION.ALL_SOFTWARES} data={ServerDataPlaceHolder.data[1].data} />
      <TableViewModeling title={"All Extras"} id={TABS_POSITION.ALL_EXTRAS} data={ServerDataPlaceHolder.data[2].data} />
    </React.Fragment>
  )
}