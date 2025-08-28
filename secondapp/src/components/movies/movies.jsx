export default function Movies(){
    let mlist = ['John Carter','Battle Ship','Bee Keeper'];
    return (
        <div>
            <h3>Movies</h3>
            <ol>
                {mlist.map(m => <li key={m}>{m}</li>)}
            </ol>
        </div>
    )
}