import React,{useState,useEffect} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContentB from "../Components/sectionB/contentB";
import {
    SiApplepodcasts,
    SiSpotify,
    SiDeepnote,
    SiGoogle,
    SiSoundcloud,
    SiAmazonmusic,
    SiYoutube,
} from "react-icons/si";
import ContentBox from "../Components/sectionB/contentBox";

const platformsData = [
    { name: "Apple podcast", icon: SiApplepodcasts },
    { name: "Spotify", icon: SiSpotify },
    { name: "Deepnote", icon: SiDeepnote },
    { name: "Google podcast", icon: SiGoogle },
    { name: "Soundcloud", icon: SiSoundcloud },
    { name: "Amazon Music", icon: SiAmazonmusic },
    { name: "Youtube", icon: SiYoutube },
];

const FoldingBoxes = () => {
    const { scrollY } = useScroll();

    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        fetch(`https://the-ladder-opal.vercel.app/api/sections?type=sectionb`)
            .then(res => res.json())
            .then(data => setBoxes(data))
            .catch(err => console.error('Error fetching sections:', err));
    }, []);


    const box1RotateX = useTransform(scrollY, [0, 300], [0, -10]);
    const box1TranslateY = useTransform(scrollY, [0, 300], [0, -150]);
    const box1Scale = useTransform(scrollY, [0, 300], [1, 0.8]);
    const box1Color = useTransform(scrollY, [0, 300], ["#ffffff", "#333333"]);

    const box2TranslateY = useTransform(
        scrollY,
        [0, 300, 600],
        [450, 100, -50]
    );
    const box2RotateX = useTransform(scrollY, [300, 600], [0, -10]);
    const box2Scale = useTransform(scrollY, [300, 600], [1, 0.85]);
    const box2Color = useTransform(scrollY, [300, 600], ["#ffffff", "#666666"]);

    const box3TranslateY = useTransform(scrollY, [0, 600, 900], [900, 150, 50]);
    const box3RotateX = useTransform(scrollY, [600, 900], [0, -10]);
    const box3Scale = useTransform(scrollY, [600, 900], [1, 0.9]);
    const box3Color = useTransform(scrollY, [600, 900], ["#ffffff", "#999999"]);

    return (
      <>
        {boxes.length> 0 ? <div className="min-h-screen">
            <div className="sticky top-0 left-0 w-full h-screen pt-40">
                <div
                    className="relative mx-10"
                    style={{ perspective: "1000px" }}
                >
                    <ContentBox
                        boxTranslateY={box1TranslateY}
                        boxRotateX={box1RotateX}
                        boxColor={box1Color}
                        zIndex={3}
                        boxScale={box1Scale}
                    >
                        <ContentB title={boxes[0].title} number={1}>
                            {boxes[0].sub1 && <p className="text-xl">{boxes[0].sub1}</p>}
                            {boxes[0].sub2 && <p className="text-xl mb-4">
                                {boxes[0].sub2}
                            </p>}
                            {boxes[0].desc1 && <p className="text-black/30">
                                {boxes[0].desc1}
                            </p>}
                            {boxes[0].desc2 && <p className="text-black/30">
                                {boxes[0].desc2}
                            </p>}
                        </ContentB>
                    </ContentBox>

                    <ContentBox
                        boxTranslateY={box2TranslateY}
                        boxRotateX={box2RotateX}
                        boxColor={box2Color}
                        zIndex={4}
                        boxScale={box2Scale}
                    >
                        <ContentB title={"PRODUCTION"} number={2}>
                            {boxes[1].sub1 && <p className="text-xl">{boxes[1].sub1}</p>}
                            {boxes[1].sub2 && <p className="text-xl mb-4">
                                {boxes[1].sub2}
                            </p>}
                            {boxes[1].desc1 && <p className="text-black/30">
                                {boxes[1].desc1}
                            </p>}
                            {boxes[1].desc2 && <p className="text-black/30">
                                {boxes[1].desc2}
                            </p>}
                        </ContentB>
                    </ContentBox>

                    <ContentBox
                        boxTranslateY={box3TranslateY}
                        boxRotateX={box3RotateX}
                        boxColor={box3Color}
                        zIndex={5}
                        boxScale={box3Scale}
                    >
                        <ContentB
                            title={"DIFFUSION"}
                            number={3}
                            platformsData={platformsData}
                        >
                            {boxes[2].sub1 && <p className="text-xl">{boxes[2].sub1}</p>}
                            {boxes[2].sub2 && <p className="text-xl mb-4">
                                {boxes[2].sub2}
                            </p>}
                            {boxes[2].desc1 && <p className="text-black/30">
                                {boxes[2].desc1}
                            </p>}
                            {boxes[2].desc2 && <p className="text-black/30">
                                {boxes[2].desc2}
                            </p>}
                        </ContentB>
                    </ContentBox>
                </div>
            </div>

            <div className="h-[200vh]" />
        </div> : 
        <div>Loading....</div>}
        </>
    );
};

export default FoldingBoxes;
