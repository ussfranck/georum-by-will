import { TableViewModeling } from "../components/TableViewModeling";
import { TABS_POSITION } from "../lib/definitions";
import { ServerDataPlaceHolder } from "../lib/placeholder";

export const AllExtrsFilesFragment = function () {
  return <TableViewModeling title={"All Extras"} id={TABS_POSITION.ALL_EXTRAS} data={ServerDataPlaceHolder.data[2].data} tools/>
};