function HeroBackdrop() {
    return (
        <div className="absolute top-0 h-[80%] w-full overflow-hidden rounded-b-[75px] bg-gradient-to-b from-metallic-sunburst to-satin-sheen-gold">
            <div className="bg-hero-abstract relative flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat"></div>
        </div>
    );
}

export default HeroBackdrop;
