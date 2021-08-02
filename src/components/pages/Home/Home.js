import React from 'react';
import Header from './Header';

function Home() {

    return (
        <div>
            <Header />
            <div>
                <title id="homeTitle"> 
                    <h2>Mati</h2>
                </title>
                <section>
                    <div>
                        <h5>About this project:</h5>
                    </div>
                    <div>
                        <p>
                            This site aims to create a safe space to record your experiences and 
                            learning throughout your antenatal time, including pre-conception,
                            pregnancy, and the postnatal period.
                        </p>
                        <p>
                            Studies show that the process of educating yourself around the birth process, and the building
                            of a strong support network for your labour have positive correlations to having better outcomes
                            and a more positive experience. Arming yourself with this knowledge and seeking out support gives
                            you a strong role in advocating for yourself and being advocated for throughout your pregnancy,
                            birth, and postpartum.
                        </p>
                    </div>
                </section>
               

            </div>

        </div>
    ) ;
}

export default Home;