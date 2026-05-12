"use client";

import MaterialCarousel from './MaterialCarousel';

const products = [
    {
        name: "Italian Carrara",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx3XiIgXswwcxzJUC-l0evSzghB3ElIbCaIMrqyRdrMTCfCF5CCJk6RMCxJ1iMUxZfbTX7QUVHwc_h4UzwswwboEB0RZ-VgigNRRV9mIKR50wYzEIMfQlbsJfIbQIT_NJXwU_lo5Tt-o1puAQqXGrIS5ttVKRtch3bNuyZk7tNZ7jGDvJEiwWvNWzIgD_P9qFOfkgvRaKSIPgDjCEdaeBIDOoxzElgHqepTXlYua49EAR2sWGpfYmzfda-_9oaQzOX8zusfufsZJQ"
    },
    {
        name: "Black Marquina",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpCM_uMCbPPaJboRGTkJHENl5FZldnVZ6EvOx8sWzxsp21G_nwtRIiIRRS-txrkhTH6FKsRCE2i-OCf-MJv3JHuSkUnmau5KFRM5zcZuUMy-RbKjEV6ogqv47t0JD8fGpQ1_adXcWjkeDAtoaZbl856yPO_YyyBYNbH7lxozKpcPMwuB0MejQ6_ZB34ud5RF6kzueQEgnhKXcsq76sMm96iK2h0jAF-C5sfK5n2hJr3nqEFfWLNHBVWjz4ZL3jKfd83puAAMNQS-0"
    },
    {
        name: "Gold Vein Onyx",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn-wYSpwnL603P0OuyFLuqcZ13tGsfRMlry_1Otj2MKx5HEnPXtAmp8KLvE0Wif33kWVy7GiAvpizU2cZhdLNGPqkrnpjandjMqLmj0PSmLgVkcaO67z3ssU2ra25LR_rqIo4Sygk-_FwzkejrruW1fJu1sA_EjpoZQJvTk6xrgXkjrioOGDutj1eqEBtdVstdceIqIaJ-6Yyhe14TcUxCv66M5wlS1oLtSsPiNKkfSGB0Y21NxkQhIYlpy1mdwQe7gRinIChLKBE"
    },
    {
        name: "Silver Travertine",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkiT-KQaGtpxcedpQXeti_vymcdrr6zqylsoDH-DxmqxSadrTLzeFmoA_4UMmYM9GVsl-nK772Jt6H74yv_6eO_DO4CSU00pI7xtQ2pKtIXxG6fqBr320xbDHsBdbViDoxIrjVoCkJfsMPa7NZrjpfn8g2C9QXhGoVl1ZphRgf-RCPvH5th4MOzAh_9G_hd7PgQSLrNd-4GpAIMdI__TkvogbSaSFwKTSmy79QUZ1b7pQHVzb9zrN2XaaXVudqUaut_mCpnrJLmIw"
    }
];

export default function Products() {
    return (
        <section id="products" className="py-24 w-full overflow-hidden bg-surface-container">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <div className="flex flex-col xl:flex-row gap-16 lg:gap-24">
                    <MaterialCarousel 
                        title="Our Products" 
                        items={[...products].reverse()} 
                    />
                    <MaterialCarousel 
                        title="Our Materials" 
                        items={products} 
                    />
                </div>
            </div>
        </section>
    );
}