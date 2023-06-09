import { interested } from "../../../constants/category";


function InterestedCategory(){

    return(
        <div className='container'>
            <p className='category-name'>Explore By <span>Interested In</span></p>

            <ul className='list'>
                {
                    interested.map((data)=>{
                        return(
                            <li>
                                {data.type}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default InterestedCategory;