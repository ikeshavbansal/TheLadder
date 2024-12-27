const ContentB = ({
    number,
    title,
    description,
    platformsData = [],
    children,
}) => {
    return (
        <div className="w-full">
            <h2 className="text-4xl font-light mb-8">{title}</h2>
            <hr className="border-gray-200 mb-12" />
            <div className="flex items-start gap-24">
                <div className="flex-shrink-0 w-1/4">
                    <span
                        className={`text-[200px] font-light leading-none ${
                            number === 3
                                ? "text-green-500"
                                : number == 2
                                ? "text-blue-200"
                                : "text-yellow-500"
                        }`}
                    >
                        {number}
                    </span>
                </div>
                <div className="pt-8 w-3/4">
                    {children}
                    {platformsData.length > 0 && (
                        <div className="flex flex-wrap gap-6 mt-8">
                            {platformsData.map(({ name, icon: Icon }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-2 text-gray-400"
                                >
                                    <Icon className="text-xl" />
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentB;
