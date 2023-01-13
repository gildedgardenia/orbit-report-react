export const COLUMNS = [
   {
           Header: "Name",
           accessor: "name",
   },
   {
           Header: "Type",
           accessor: "type",
   },
   {
           Header: "Launch Date",
           accessor: "launchDate",
         },
         {
           Header: "Orbit Type",
           accessor: "orbitType",
         },
         {
           Header: "Operational",
           accessor: d => d.operational.toString(),
         },
       ];
