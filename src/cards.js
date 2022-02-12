
const var1 = [
    {lang:"Python",assembled:"Interpreted",uf:"Data Engineering, Web Development"},
    {lang:"C++",assembled:"Compiled",uf:"Native Applications"},
    {lang:"JavaScript",assembled:"Interpreted",uf:"Web Development"},
    {lang:"Java",assembled:"Compiled",uf:"Universal Applications"}]



function sab(){
  return( <>
  <div className="w-52 rounded overflow-hidden bg-gray-700 shadow-lg">
  <img class="w-full" src="4.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-md text-yellow-200 mb-2">The Pants <u> YOU</u> Deserve
    </div>
    <p class="text-gray-100 text-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  </>);
}
    /*
function sab(){
    var1.map((arrvar) => {
        return (
        <div>
        <h3 className="text-center text-primary">Employee Details</h3>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{arrvar.lang}</h5>
          <p className="card-text">
          <span>Id: {arrvar.assembled}</span><br/>
          <span>Age: {arrvar.uf}</span><br/>
          </p>
          </div>
          <button type="button" className="btn btn-primary">Edit Details</button>
        </div>
        </div>)
})}
*/
export default sab;


