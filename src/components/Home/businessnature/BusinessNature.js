
import { businessnature } from "../../../constants/category";

function BusinessNature(){

    return(
        <div className='container'>
            <p className='category-name'>Explore By <span>Business Nature</span></p>

            <ul className='list'>
                {
                    businessnature.map((data)=>{
                        return(
                            <li>
                                {data.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default BusinessNature;