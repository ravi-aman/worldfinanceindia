"use client";

import { Tabs } from "./ui/tabs";

// Define the type for the dummy content data structure
type DummyContentData = {
    [key: string]: {
        videoSrc: string;
    };
};

// JSON structure to hold the dummy content dynamically
const dummyContentData: DummyContentData = {
    product: {
        videoSrc: "/media/video1.mp4", // Video for "Hands on session" tab
    },
    services: {
        videoSrc: "/media/video2.mp4", // Video for "Live Training" tab
    },
    playground: {
        videoSrc: "/media/video3.mp4", // Video for "Expert Guidance" tab
    },
};


export function TabsDemo() {
    const tabs = [
        {
            title: "Hands on session",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
                    <p>Hands-on Session</p>
                    <h1 className="text-[19px] text-gray-300 mt-5 font-medium">
                        Gain practical experience through interactive, real-world projects.
                    </h1>
                    <DummyContent tabValue="product" />
                </div>
            ),
        },
        {
            title: "Live Training",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
                    <p>Live Training</p>
                    <h1 className="text-[19px] text-gray-300 mt-5 font-medium">
                        Engage in live, expert-led training sessions to enhance your skills.
                    </h1>
                    <DummyContent tabValue="services" />
                </div>
            ),
        },
        {
            title: "Expert Guidance",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
                    <p>Expert Guidance</p>
                    <h1 className="text-[19px] text-gray-300 mt-5 font-medium">
                        Benefit from personalized insights and advice from industry experts.
                    </h1>
                    <DummyContent tabValue="playground" />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

// TypeScript typing for the DummyContent component props
interface DummyContentProps {
    tabValue: keyof DummyContentData;
}

// DummyContent component to dynamically load videos based on tab value
const DummyContent: React.FC<DummyContentProps> = ({ tabValue }) => {
    const videoSrc = dummyContentData[tabValue]?.videoSrc || "";

    return (
        <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-left-top h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-2xl mx-auto"
        />
    );
};
