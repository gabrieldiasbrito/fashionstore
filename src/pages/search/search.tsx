import Filter from '../../components/filter/filter'
import SearchDisplay from '../../components/searchdisplay/searchdisplay'
import './search.css'

export default function Search(){
    return(
        <div className='search'>
            <Filter/>
            <SearchDisplay/>
        </div>
    )
}