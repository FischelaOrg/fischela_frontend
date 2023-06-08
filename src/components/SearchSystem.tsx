

export default function SearchSystem(){
    return (
        <div className='search__component'>
            <select className='search__selector'>
                <option>Select</option>
            </select>
            <div className='form__grouper'>
                <input placeholder='search by name or trait' className='form__control' />
            </div>

            <select className='search__selector'>
                <option>Price low to high</option>
            </select>

            <div className='search__results_count'>
                230 results
            </div>
        </div>
    )
}