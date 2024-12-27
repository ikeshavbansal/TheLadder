const FrontFace=({section,index})=>
{
  return(
    <>
      <div 
        className="absolute inset-0 w-full h-full p-12  overflow-hidden"
        style={{
            backgroundColor: `${section.bgColor}`,
            opacity: index % 2 !== 0 ? 1 : 0.80,
            // backdropFilter: "blur(8px)",
            backfaceVisibility: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: index % 2 !== 0 
                ? "0 4px 30px rgba(0, 0, 0, 0.1)"
                : "inset 0 0 30px rgba(0,0,0,0.2)",
        }}
    >
        <h2
            className={`text-3xl font-light mb-6 ${
                index % 2 !== 0
                    ? "text-black"
                    : "text-white"
            } font-display`}
        >
            {section.title}
        </h2>
        <p
            className={`text-lg ${
                index % 2 !== 0
                    ? "text-black/70"
                    : "text-white/70"
            } leading-relaxed max-w-l`}
        >
            {section.description}
        </p>
    </div>
    </>
  )
}

export default FrontFace