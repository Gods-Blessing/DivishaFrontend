import { fundingtype } from "../../../constants/category"


function FundingType(){

    return(
        <div className='container'>
            <p className='category-name'>Explore By <span>Funding Type</span></p>

            <ul className='list'>
                {
                    fundingtype.map((data)=>{
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


export default FundingType;