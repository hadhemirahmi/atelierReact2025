import Details from "./Detaile";

function Card(props) {
let informations={build_year:props.wonder.build_year,time_period:
props.wonder.time_period, location:props.wonder.location}
const handeleWikipediaClick = (id) => {
console.log("ID clicked:", id);
const champ = props.wonder;
if (champ.id === id) {
const wikipediaUrl =`https://fr.wikipedia.org/wiki/${encodeURIComponent(champ.name)}`;
window.open(wikipediaUrl, "_blank");
}}
const handleGoogleMapsClick = (id) => {
console.log("ID clicked:", id);
const champ = props.wonder;
if (champ.id === id) {
const googleMapsUrl = props.wonder.google_map ;
window.open(googleMapsUrl, "_blank");}}

return (
<div className="col">
<div className="card" style={{width: "18rem"}} >
<img src={props.wonder.image} className="card-img-top" alt="pyramides"
width={100} height={300}/>
<div className="card-body">

<h5 className="card-title">{props.wonder.name}</h5>
<p className="card-text">{props.wonder.desc}</p>
<Details informations={informations}/><br />


<a href="#" className="btn btn-primary"
 onClick={()=>handeleWikipediaClick(props.wonder.id)}>Wikipédia</a><br />

 <a href={props.wonder.google_map} 
 className="btn btn-primary" onClick={()=>handleGoogleMapsClick(props.wonder.google_map)} >Google maps</a>


</div>
</div>
</div>
);
}
export default Card;