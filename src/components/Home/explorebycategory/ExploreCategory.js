import './ExploreCategory.css';

import { arr } from '../../../constants/category';


function ExploreCategory() {
    return(
        <div className='category-container'>
            <p className='category-name'>Explore By <span>Category</span></p>
            <div className='cards-div'>

                {
                    arr.map((data)=>{
                        return(

                            <div className='category-card'>
                                <img src={data.image} alt='cardimage'/>

                                <p> {data.category} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default ExploreCategory;