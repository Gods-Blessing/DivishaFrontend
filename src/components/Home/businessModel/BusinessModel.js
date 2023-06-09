import './BusinessModel.css'

import { Businessmodel } from "../../../constants/category";


function BusinessModel(){

    return(
        <div className='container'>
            <p className='category-name'>Explore By <span>Business Model</span></p>

            <ul className='list'>
                {
                    Businessmodel.map((data)=>{
                        return(
                            <li>
                                {`${data.type} - ${data.name}`}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BusinessModel;