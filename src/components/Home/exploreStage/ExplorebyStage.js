
import { stage } from "../../../constants/category";


function ExplorebyStage(){

    return(
        <div className='container'>
            <p className='category-name'>Explore By <span>Stage</span></p>

            <ul className='list'>
                {
                    stage.map((data)=>{
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


export default ExplorebyStage;