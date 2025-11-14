import CardsSection from "./CardsSection";
import Chart from "./Chart";
import MyDataTable from "./DataTable";
export default function Dashboard() {
return (
<div id="dashboard">
<h1 className="text-center text-3xl font-bold mt-6">Tableau de bord</h1>
<CardsSection />
<Chart />

<MyDataTable />
</div>
);
}