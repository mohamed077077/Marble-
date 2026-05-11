"use client";

import { useState, useEffect } from "react";
import Card from "./Card";

const projectsData = [
    {   id: 1,
        title: "The Obsidian Residence",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCobJdV4iL4E2It_S8CWHTqNrtxIRbKiO7PmmHqKYNWy2FH4zOEPjfjBaXSBkU81JtPARGAFwueMohc1eUGZffzreKilKkZ_Gy2TPT_23CKks5AruJcGRr_DNl8mLcIg3DWoeOdUUFGkty5HJnc7BWGb9e3MnrBRxnNT1hTCHTNJT0FC5yT9gD8qaMB5ludAjrHLwF0IvOV7uLi2PHP5ZPDNzI4Vlv2GwzxelwlPEZ9VzS_0yyGS_dolpUFQoW0ovfApE03j70wGr8"
    },
    {
        id:2,
        title: "Aethel Tower Facade",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6G7_UI76g6NfBqKN1xoxkLf2oHQJ7GGIFMKjoIMmXIvQm42VgSCYfm7LgpxWjBUe8viWTjmi3W7HHgAEVr2_xtEaYROt3zuK3mVjqJzYhpwp3HP03slJFNYPj-VSb9E_WgZ1IV2V776qj7VvLSQXE4MdUEYhGBbDp7fHGKReaib4gEEhyQJfVYigmo0VFK_PFmbd_aYbtLpoXTnXO_5nYSOuGJ3Pl2ellcjlwOhczEelwbF4VmjXJtahEB_uqhhLZ_ezgaYEtPAE"
    },
    {
        id:3,
        title: "Aura Wellness Retreat",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA47Hc7L4R3FdY11uGDgoRhi4fVm8wE4CmqQH22XNXKak2KwleVRYG6JVTJlzY-U9PNJN0M60TroC8FegmQ7xp6_3GjDssq0adkzWi_Evj31Hpdxjmx7SKlRthnswuOke3LLtZsdwnbQxmt5N-6xYSGo9SoY_ZRWDZjJqd2XGUKDYYkNEc8lsVE8jf5EV45WRyrAp8_yV13ppsbAch0bIZQmy3liu7zgxoRiQhMCadwHrmBCYjaitSoanbwn4s5YRNuw_jLtguBR4g"
    },
    {
        id:4,
        title: "Floating Onyx Steps",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABc_gmtgABvSfn-jzDDVrbZjOhj8Zp4NpPWIGA0XlwCnhW01fsVJkWhlH1A_0Wv5C73ZFOrHB1OAkNvI_8VgmwGyx2GbfXwliU_ALg-0fmiK-FffMj6Rx_3GAgCZMju40bMG033wkwukrMUKA_unLli72DZwXDRzdLpCEEkpknaVeZNHfww61OH5mXoLQA1id_oGJ-2DaUjL6xBJE3LG9nUfI6TSMSNJ_ETaalMIWhvgp4-InMp2DtgBHI-6URrU9whDso8Szz4os"
    },
    {   id:5,
        title: "Vanguard Headquarters",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdCtq06AxD-_a6KlUbrDioISofi8ILLAhXOw_tfk8H7uc8Rpbm1NBJChYA3qxZNZ7F3_wfcRauyU-5RLGfXGmiXP3uv3YbnzkEUWKDtIlYNinVq8xmNgUd2BQEQgoz4QyX7roTf5w_glSzkY_6zZODZsFo4cXkukKi9zq2fD6ngPb28LE4Y260kqHeOlIksQmzgCQdT5uWCuav7Q0Au-gUJi9wpLUSyb-YYAaC9jl6DJuHMCHjsj_7Pf6tJ5DJ_O9kFDjdQEsI_I0"
    },
    {  
        id:6,
        title: "Monolith Hearth",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd1RzSPudnVhXxACPwgKB8kieFsGnzmHJNw4cuWkGk6jF8HYahAKDScXPSGTSgf9wi5E5aGFsoLoQ9H8HmygUCLFS87nyMQy0RLtG91-cvKIWh74zRB2R43PXdePll-LyO1U0NH4c9GRq6F7MiiccOad3W4hDzkqjPjIE7g5Dji_BmKcI9XYnHTxzRAbhpSQAeAoyPG2XweMMZHa6-S9LfXQ692B4iTkMrd81a0BX4egw1eqyWNq711Y7a73AU3Pev8reNlMuY30I"
    },
     {   id: 7,
        title: "The Obsidian Residence",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCobJdV4iL4E2It_S8CWHTqNrtxIRbKiO7PmmHqKYNWy2FH4zOEPjfjBaXSBkU81JtPARGAFwueMohc1eUGZffzreKilKkZ_Gy2TPT_23CKks5AruJcGRr_DNl8mLcIg3DWoeOdUUFGkty5HJnc7BWGb9e3MnrBRxnNT1hTCHTNJT0FC5yT9gD8qaMB5ludAjrHLwF0IvOV7uLi2PHP5ZPDNzI4Vlv2GwzxelwlPEZ9VzS_0yyGS_dolpUFQoW0ovfApE03j70wGr8"
    },
    {
        id:8,
        title: "Aethel Tower Facade",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6G7_UI76g6NfBqKN1xoxkLf2oHQJ7GGIFMKjoIMmXIvQm42VgSCYfm7LgpxWjBUe8viWTjmi3W7HHgAEVr2_xtEaYROt3zuK3mVjqJzYhpwp3HP03slJFNYPj-VSb9E_WgZ1IV2V776qj7VvLSQXE4MdUEYhGBbDp7fHGKReaib4gEEhyQJfVYigmo0VFK_PFmbd_aYbtLpoXTnXO_5nYSOuGJ3Pl2ellcjlwOhczEelwbF4VmjXJtahEB_uqhhLZ_ezgaYEtPAE"
    },
    {
        id:9,
        title: "Aura Wellness Retreat",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA47Hc7L4R3FdY11uGDgoRhi4fVm8wE4CmqQH22XNXKak2KwleVRYG6JVTJlzY-U9PNJN0M60TroC8FegmQ7xp6_3GjDssq0adkzWi_Evj31Hpdxjmx7SKlRthnswuOke3LLtZsdwnbQxmt5N-6xYSGo9SoY_ZRWDZjJqd2XGUKDYYkNEc8lsVE8jf5EV45WRyrAp8_yV13ppsbAch0bIZQmy3liu7zgxoRiQhMCadwHrmBCYjaitSoanbwn4s5YRNuw_jLtguBR4g"
    },
    {
        id:10,
        title: "Floating Onyx Steps",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABc_gmtgABvSfn-jzDDVrbZjOhj8Zp4NpPWIGA0XlwCnhW01fsVJkWhlH1A_0Wv5C73ZFOrHB1OAkNvI_8VgmwGyx2GbfXwliU_ALg-0fmiK-FffMj6Rx_3GAgCZMju40bMG033wkwukrMUKA_unLli72DZwXDRzdLpCEEkpknaVeZNHfww61OH5mXoLQA1id_oGJ-2DaUjL6xBJE3LG9nUfI6TSMSNJ_ETaalMIWhvgp4-InMp2DtgBHI-6URrU9whDso8Szz4os"
    },
    {   id:11,
        title: "Vanguard Headquarters",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdCtq06AxD-_a6KlUbrDioISofi8ILLAhXOw_tfk8H7uc8Rpbm1NBJChYA3qxZNZ7F3_wfcRauyU-5RLGfXGmiXP3uv3YbnzkEUWKDtIlYNinVq8xmNgUd2BQEQgoz4QyX7roTf5w_glSzkY_6zZODZsFo4cXkukKi9zq2fD6ngPb28LE4Y260kqHeOlIksQmzgCQdT5uWCuav7Q0Au-gUJi9wpLUSyb-YYAaC9jl6DJuHMCHjsj_7Pf6tJ5DJ_O9kFDjdQEsI_I0"
    },
    {  
        id:12,
        title: "Monolith Hearth",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd1RzSPudnVhXxACPwgKB8kieFsGnzmHJNw4cuWkGk6jF8HYahAKDScXPSGTSgf9wi5E5aGFsoLoQ9H8HmygUCLFS87nyMQy0RLtG91-cvKIWh74zRB2R43PXdePll-LyO1U0NH4c9GRq6F7MiiccOad3W4hDzkqjPjIE7g5Dji_BmKcI9XYnHTxzRAbhpSQAeAoyPG2XweMMZHa6-S9LfXQ692B4iTkMrd81a0BX4egw1eqyWNq711Y7a73AU3Pev8reNlMuY30I"
    },
     {   id:13,
        title: "The Obsidian Residence",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCobJdV4iL4E2It_S8CWHTqNrtxIRbKiO7PmmHqKYNWy2FH4zOEPjfjBaXSBkU81JtPARGAFwueMohc1eUGZffzreKilKkZ_Gy2TPT_23CKks5AruJcGRr_DNl8mLcIg3DWoeOdUUFGkty5HJnc7BWGb9e3MnrBRxnNT1hTCHTNJT0FC5yT9gD8qaMB5ludAjrHLwF0IvOV7uLi2PHP5ZPDNzI4Vlv2GwzxelwlPEZ9VzS_0yyGS_dolpUFQoW0ovfApE03j70wGr8"
    },
    {
        id:14,
        title: "Aethel Tower Facade",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6G7_UI76g6NfBqKN1xoxkLf2oHQJ7GGIFMKjoIMmXIvQm42VgSCYfm7LgpxWjBUe8viWTjmi3W7HHgAEVr2_xtEaYROt3zuK3mVjqJzYhpwp3HP03slJFNYPj-VSb9E_WgZ1IV2V776qj7VvLSQXE4MdUEYhGBbDp7fHGKReaib4gEEhyQJfVYigmo0VFK_PFmbd_aYbtLpoXTnXO_5nYSOuGJ3Pl2ellcjlwOhczEelwbF4VmjXJtahEB_uqhhLZ_ezgaYEtPAE"
    },
    {
        id:15,
        title: "Aura Wellness Retreat",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA47Hc7L4R3FdY11uGDgoRhi4fVm8wE4CmqQH22XNXKak2KwleVRYG6JVTJlzY-U9PNJN0M60TroC8FegmQ7xp6_3GjDssq0adkzWi_Evj31Hpdxjmx7SKlRthnswuOke3LLtZsdwnbQxmt5N-6xYSGo9SoY_ZRWDZjJqd2XGUKDYYkNEc8lsVE8jf5EV45WRyrAp8_yV13ppsbAch0bIZQmy3liu7zgxoRiQhMCadwHrmBCYjaitSoanbwn4s5YRNuw_jLtguBR4g"
    },
    {
        id:16,
        title: "Floating Onyx Steps",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABc_gmtgABvSfn-jzDDVrbZjOhj8Zp4NpPWIGA0XlwCnhW01fsVJkWhlH1A_0Wv5C73ZFOrHB1OAkNvI_8VgmwGyx2GbfXwliU_ALg-0fmiK-FffMj6Rx_3GAgCZMju40bMG033wkwukrMUKA_unLli72DZwXDRzdLpCEEkpknaVeZNHfww61OH5mXoLQA1id_oGJ-2DaUjL6xBJE3LG9nUfI6TSMSNJ_ETaalMIWhvgp4-InMp2DtgBHI-6URrU9whDso8Szz4os"
    },
    {   id:17,
        title: "Vanguard Headquarters",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdCtq06AxD-_a6KlUbrDioISofi8ILLAhXOw_tfk8H7uc8Rpbm1NBJChYA3qxZNZ7F3_wfcRauyU-5RLGfXGmiXP3uv3YbnzkEUWKDtIlYNinVq8xmNgUd2BQEQgoz4QyX7roTf5w_glSzkY_6zZODZsFo4cXkukKi9zq2fD6ngPb28LE4Y260kqHeOlIksQmzgCQdT5uWCuav7Q0Au-gUJi9wpLUSyb-YYAaC9jl6DJuHMCHjsj_7Pf6tJ5DJ_O9kFDjdQEsI_I0"
    },
    {  
        id:18,
        title: "Monolith Hearth",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd1RzSPudnVhXxACPwgKB8kieFsGnzmHJNw4cuWkGk6jF8HYahAKDScXPSGTSgf9wi5E5aGFsoLoQ9H8HmygUCLFS87nyMQy0RLtG91-cvKIWh74zRB2R43PXdePll-LyO1U0NH4c9GRq6F7MiiccOad3W4hDzkqjPjIE7g5Dji_BmKcI9XYnHTxzRAbhpSQAeAoyPG2XweMMZHa6-S9LfXQ692B4iTkMrd81a0BX4egw1eqyWNq711Y7a73AU3Pev8reNlMuY30I"
    }
];

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(4);
            } else {
                setItemsPerPage(6);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const maxPage = Math.ceil(projectsData.length / itemsPerPage);
        if (currentPage > maxPage) {
            setCurrentPage(1);
        }
    }, [itemsPerPage, currentPage]);

    const totalPages = Math.ceil(projectsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projectsData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="projects" className="py-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 flex flex-col items-start">
                <h2 className="font-headline-xl text-headline-xl text-primary-fixed inline-block relative pb-4">
                    Featured Projects
                    <span className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/30"></span>
                    <span 
                        className="absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ease-out"
                        style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></span>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start content-start">
                {currentProjects.map((project) => (
                    <Card 
                        key={project.id} 
                        title={project.title} 
                        imageUrl={project.imageUrl} 
                        className="block"
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-16 flex justify-center gap-3">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-12 h-12 flex items-center justify-center rounded-sm border transition-all duration-300 font-label-lg text-label-lg cursor-pointer transition-all duration-300 ${
                                currentPage === page
                                    ? "bg-secondary border-secondary text-on-primary-fixed "
                                    : "bg-transparent border-outline-variant text-on-surface hover:border-primary-fixed hover:text-primary-fixed hover:scale-110 active:scale-95"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </section>
    )
}