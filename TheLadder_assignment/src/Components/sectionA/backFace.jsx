const BackFace=({section,index})=>
{
  return(<>
    <div 
        className="absolute inset-0 w-full h-full p-12  overflow-hidden"
        style={{
            backgroundColor: `${section.bgColor}`,
            // backdropFilter: "blur(100px)",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
    >
        <h2
            className={`text-3xl font-light mb-6 ${
                index % 2 !== 0
                    ? "text-black/30"
                    : "text-white/30"
            } font-display text-right`}
        >
            {section.title}
        </h2>
        <p
            className={`text-lg ${
                index % 2 !== 0
                    ? "text-black/20"
                    : "text-white/20"
            } leading-relaxed max-w-l text-right`}
        >
            {section.description}
        </p>
    </div>
  </>)
}

export default BackFace