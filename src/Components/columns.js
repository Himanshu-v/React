import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "E-mail",
    Footer: "E-mail",
    accessor: "email",
    Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "E-mail",
        Footer: "E-mail",
        accessor: "email",
      },
    ],
  },
];
