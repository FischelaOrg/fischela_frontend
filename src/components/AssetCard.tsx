

const AssetCard = () => {
    return (
        <section className="asset_card">
            <div className="asset_card__image_container">
                <img src="/assets/gta.jpeg" className="asset_card__image"/>
            </div>

            <section className="asset_card__body">
                <h2>Title</h2>
                <div className="asset_card__detail_container">
                    <span>price</span>
                    <span>0xaefda...eadea</span>
                </div>
            </section>
        </section>
    )
}

export default AssetCard