import './Home.css';
import BusinessModel from './businessModel/BusinessModel';
import BusinessNature from './businessnature/BusinessNature';
import ExplorebyStage from './exploreStage/ExplorebyStage';
import ExploreCategory from './explorebycategory/ExploreCategory';
import FundingType from './fundingtype/FundingType';
import InterestedCategory from './interested/InterestedCategory';
import InvestmentNature from './investmentNature/InvestmentNature';


function Home(){
    return(
        <div className='home-container'>
            <div className="search-div">
                <div className='search-input-div'>
                    <input placeholder="Startup Name..." />
                    <button>Search</button>
                </div>

                <div className="headings">
                    <h1>Discover</h1>
                    <p className="second-heading">amazing startups</p>

                    <p className="third-heading">Find great startups curated by our experts for investing</p>
                </div>
            </div>

            <section className='category-section'>
                <ExploreCategory/>
                <BusinessModel/>
                <InterestedCategory/>
                <ExplorebyStage/>
                <FundingType/>
                <BusinessNature/>
                <InvestmentNature/>
            </section>

        </div>
    )
}

export default Home;