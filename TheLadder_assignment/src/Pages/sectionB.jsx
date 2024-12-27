import React from "react";
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
        <div className="min-h-screen">
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
                        <ContentB title={"CREATION"} number={1}>
                            <p className="text-xl">Vous avez une idée ?</p>
                            <p className="text-xl mb-4">
                                Nous avons la méthode.
                            </p>
                            <p className="text-black/30">
                                Il existe mille et une façons de faire un
                                podcast. Nous vous aidons à trouver la vôtre.
                                Grâce à l’expertise éditoriale et technique de
                                notre équipe, nous vous aidons à choisir le
                                meilleur format sonore pour votre projet : celui
                                qui répondra à vos objectifs, à vos envies, et
                                qui fera briller votre message.
                            </p>
                            <p className="text-black/30">
                                Construction éditoriale, durée, style de
                                narration, choix des voix, habillage, besoins
                                techniques : ensemble, nous donnons forme à
                                votre projet.
                            </p>
                        </ContentB>
                    </ContentBox>

                    {/* Box 2: Production */}
                    <ContentBox
                        boxTranslateY={box2TranslateY}
                        boxRotateX={box2RotateX}
                        boxColor={box2Color}
                        zIndex={4}
                        boxScale={box2Scale}
                    >
                        <ContentB title={"PRODUCTION"} number={2}>
                            <p className="text-xl">
                                Pour chaque projet, c’est une équipe de
                                professionnels passionnés, sélectionnés et
                                dédiés qui intervient à chaque étape et selon
                                vos besoins :
                            </p>

                            <p className="text-black/30">
                                La préproduction → rédaction du script, casting
                                des voix, choix de l’identité sonore.
                                L’enregistrement → en studio à Toulouse, sur
                                site, ou délocalisé en studio mobile. La
                                postproduction → montage, sound design, mixage,
                                mastering.
                            </p>
                        </ContentB>
                    </ContentBox>

                    {/* Box 3: Diffusion */}
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
                            <p className="text-xl">
                                Avoir un podcast, c’est bien. Le faire entendre,
                                c’est mieux.
                            </p>
                            <p className="text-black/30">
                                Hébergement des contenus,, mise en ligne sur les
                                différentes plateformes d’écoute, mise à
                                disposition d’un player audio intégrable, texte
                                et vignette de présentation, optimisation de
                                l’audience et suivi des statistiques d’écoute,
                                on s’occupe de tout (enfin, si vous le voulez !)
                            </p>
                        </ContentB>
                    </ContentBox>
                </div>
            </div>

            <div className="h-[200vh]" />
        </div>
    );
};

export default FoldingBoxes;
