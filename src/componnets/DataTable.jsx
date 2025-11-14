import DataTable from "react-data-table-component";
export default function MyDataTable() {
const columns = [
{
name: "Avatar",
cell: (row) => (
<img
src={row.avatar}
alt={row.name}
className="w-12 h-12 rounded-full object-cover"/>
),
},
{ name: "Nom", selector: (row) => row.name, sortable: true },
{ name: "Email", selector: (row) => row.email },
{ name: "Rôle", selector: (row) => row.role },
];
const data = [
{
id: 1,
name: "Samia",
email: "samia@example.com",
role: "Admin",
avatar:

"https://res.cloudinary.com/iset-sfax/image/upload/v1658507596/samples/people/bicycle.jpg",

},
{
id: 2,
name: "Ali",
email: "ali@example.com",
role: "User",
avatar:

"https://res.cloudinary.com/iset-sfax/image/upload/v1658507589/samples/people/kitchen-bar.jpg",

},
{
id: 3,

name: "Nadia",
email: "nadia@example.com",
role: "Moderator",
avatar:

"https://res.cloudinary.com/iset-sfax/image/upload/v1658507593/samples/bike.jpg",

},
{
id: 4,
name: "Omar",
email: "omar@axample.com",
role: "User",
avatar:

"https://res.cloudinary.com/iset-sfax/image/upload/v1658507592/samples/people/smiling-man.jpg",

},
];
return (
<div className="p-6">
<DataTable
title="Liste des utilisateurs"
columns={columns}
data={data}
pagination
highlightOnHover
/>
</div>
);
}