<form>

<label htmlFor="location">
Location
<select
id="animal"
value={location}
onSelect={(e)=>setLocation(e.target.value)}
onBlur={(e)=>setLocation(e.target.value)}
>
<option/>
{/* j a v a s c r i p t */}
{LOCATIONS.map((location) =>(
<option
key="location"
value={location}>
{location}
</option>))}

</select>
</label>

<button>Submit</button>
</form>
