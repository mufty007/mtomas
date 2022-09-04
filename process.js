// Importing Icons
import { HiOutlineColorSwatch } from "react-icons/hi";
import { TbPaint } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";

export const process = [
    {
        "id": 1,
        "title": "Planning",
        "description": "Anything without a plan will evantually fail, so I plan every process and keep my cleint in the loop to be transparant and make them part of the process.",
        "icon": <HiOutlineColorSwatch size="2em"/>
    },
    {
        "id": 2,
        "title": "Design",
        "description": "I design every websie or app and make sure it represent the brand’s identity and at the same time making it unique to stand out from others in the same niche.",
        "icon": <TbPaint size="2em"/>
    },
    {
        "id": 3,
        "title": "prototype",
        "description": "Before wasting time and resources develping something, I always prototype the concept and user test it to make sure it represent the brand and fix any issues it might have.",
        "icon": <MdAnimation size="2em"/>
    },
    {
        "id": 4,
        "title": "develop",
        "description": "After all the designs are brand fitting and approved by my clients, I develop the final website or app using code or no-code tools your choose",
        "icon": <AiOutlineCode size="2em"/>
    }
]