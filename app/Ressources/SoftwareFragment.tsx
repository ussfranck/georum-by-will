import { TableViewModeling } from "../components/TableViewModeling"
import { TABS_POSITION } from "../lib/definitions"
import { ServerDataPlaceHolder } from "../lib/placeholder"

export const AllSoftwareFragment = function () {
  return <TableViewModeling title={"All Softwares"} id={TABS_POSITION.ALL_SOFTWARES} data={ServerDataPlaceHolder.data[1].data} tools />
}