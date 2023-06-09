import './Footer.css';


function Footer(){

    return(
        <div className='footer-container'>
            <div className='footer-first-div'>
                <div >
                    <img className='main-logo' src="https://startupz.world/images/white-logo.png" alt="footerimage"/>

                    <p className='address'>
                        <p>
                        101, Relcon Enclave, NH-48    
                        </p>
                        
                        <p>
                            Surat, Gujarat
                        </p>
                        
                        <p>
                            India - 394325
                        </p>
                    </p>
                </div>

                <div className='other-links'>
                    <h4>Company</h4>

                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Pricing</p>
                </div>

                <div className='other-links'>
                    <h4>Quick Links</h4>

                    <p>Community Guidelines</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use </p>
                    <p>Cancellation & Refund</p>
                    <p>Shipping & Exchange</p>
                </div>

                <div className='other-links'>
                    <h4>FAQs</h4>
                    <p>Startup FAQs</p>
                </div>

            </div>

            <div className='social'>
                2023 &nbsp; <span> StartupzWorld</span>,
                All Right Reserved

            </div>
        </div>
    )
}


export default Footer;