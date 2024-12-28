import FrontFace from "./frontFace";
import BackFace from "./backFace";
const CubeA = ({ sections }) => {
    return (
        <>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="absolute inset-0 w-[600px] h-[300px]"
                    style={{
                        transform: `rotateX(${
                            index * 90
                        }deg) translateZ(150px)`,
                        transformStyle: "preserve-3d",
                    }}
                >
                    <FrontFace section={section} index={index} />
                    <BackFace section={section} index={index} />
                </div>
            ))}
        </>
    );
};

export default CubeA;
