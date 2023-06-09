import Image from "next/image";



const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__inner_container">
                <div className="banner__image_container">
                    <Image alt="" className="banner__image" src="/assets/banner-img.png"/>
                </div>

                <div className="banner__minting_container">
                    <h3>Home of Income generating Digital Assets</h3>
                    <div className="banner__stats">
                        <span className="banner__stats_item">20,000 Items sold</span>
                        <span className="banner__stats_total_amount">total: $4 million+</span>

                    </div>
                    <button className="banner__btn">Minting Now</button>
                </div>
            </div>
        </section>
    )
}

export default Banner;