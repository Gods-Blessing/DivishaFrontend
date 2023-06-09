import { investmentnature } from "../../../constants/category";


function InvestmentNature(){

    return(
        <div className='container'>
            <p className='category-name'>Explore By <span>Investment Nature</span></p>

            <ul className='list'>
                {
                    investmentnature.map((data)=>{
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


export default InvestmentNature;