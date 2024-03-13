import { TableViewModeling } from "../components/TableViewModeling";
import { TABS_POSITION } from "../lib/definitions";
import { ServerDataPlaceHolder } from "../lib/placeholder";

export const AllDocumentsFragment = function () {
  return <TableViewModeling title={"All Documents"} 
          id={TABS_POSITION.ALL_DOCUMENTS} data={ServerDataPlaceHolder.data[0].data} tools/>
}