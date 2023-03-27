const Stats = () => {

    const stats = [
        {
            data: "+10",
            title: "Clients"
        },
        {
            data: "97%",
            title: "Satisfaction"
        },
        {
            data: "100%",
            title: "Dans les délais"
        },
    ]

    return (
        <section id={1} className="py-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                        Nos clients sont toujours satisfaits
                    </h3>
                    <p className="max-w-2xl mt-3 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                        Des petits statistiques sur nos prestations avec le retour de nos clients.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center bg-gray-100 dark:bg-trueGray-800 px-12 py-4 rounded-lg sm:w-auto">
                                    <h4 className="text-4xl text-indigo-500 font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-black dark:text-gray-400 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Stats;