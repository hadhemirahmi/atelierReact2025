export default function CardsSection() {
const cards = [
{ title: "Utilisateurs", value: 120, color: "bg-blue-500" },
{ title: "Ventes", value: 75, color: "bg-green-500" },
{ title: "Commandes", value: 45, color: "bg-yellow-500" },
];
return (
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
{cards.map((card, index) => (
<div key={index} className={`rounded-2xl shadow-xl text-white
${card.color} p-6`}>
<h2 className="text-xl font-bold mb-2">{card.title}</h2>
<p className="text-3xl">{card.value}</p>
</div>
))}
</div>
);
}