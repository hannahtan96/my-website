import { useRef } from "react";
import Header from "../components/Header";
import { useIsomorphicLayoutEffect } from "../Utils/index";
import { stagger } from "../animations/index";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

// Local Data
import data from "../data/data.json";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";

const Main = () => {
    // Ref
    const workRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const textOne = useRef<HTMLHeadingElement>(null);
    const textTwo = useRef<HTMLHeadingElement>(null);
    const textThree = useRef<HTMLHeadingElement>(null);
    const textFour = useRef<HTMLHeadingElement>(null);

    // Handling Scroll
    const handleWorkScroll = () => {
        if (workRef.current) {
            window.scrollTo({
                top: workRef.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    const handleAboutScroll = () => {
        if (aboutRef.current) {
            window.scrollTo({
                top: aboutRef.current.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    useIsomorphicLayoutEffect(() => {
        stagger(
            [textOne.current, textTwo.current, textThree.current, textFour.current],
            { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
            { y: 0, x: 0, transform: "scale(1)" }
        );
    }, []);

    return (
        <div className={`relative ${data.showCursor && "cursor-none"}`}>

            <Head>
                <title>{data.name}</title>
            </Head>

            <div className="gradient-circle"></div>
            <div className="gradient-circle-bottom"></div>

            <div className="container mx-auto mb-10">
                <Header
                    handleWorkScroll={handleWorkScroll}
                    handleAboutScroll={handleAboutScroll}
                />
                <div className="laptop:mt-20 mt-10">
                    <div className="mt-5">
                        <h1
                            ref={textOne}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                        >
                            {data.headerTaglineOne}
                        </h1>
                        <h1
                            ref={textTwo}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                        >
                            {data.headerTaglineTwo}
                        </h1>
                        <h1
                            ref={textThree}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                        >
                            {data.headerTaglineThree}
                        </h1>
                        <h1
                            ref={textFour}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                        >
                            {data.headerTaglineFour}
                        </h1>
                    </div>

                    <Socials className="mt-2 laptop:mt-5" />
                </div>
                <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
                    <h1 className="text-2xl text-bold">Work.</h1>

                    <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                        {data.projects.map((project) => (
                            <WorkCard
                                key={project.id}
                                img={project.imageSrc}
                                name={project.title}
                                description={project.description}
                                onClick={() => window.open(project.url)}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
                    <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
                    <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
                        {data.aboutpara}
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;