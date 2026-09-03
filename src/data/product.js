const categories = [
    "Tech",
    "Audio",
    "Workspace",
    "Gaming",
    "Accessories",
];
const productNames = [
    "Nova Laptop",
    "Pulse headphones",
    "Orbit Keyboard",
    "Flux Mouse",
    "Echo Speaker",
    "Pixel Monitor",
    "Core Webcam",
    "Arc Tablet",
    "Loop Earbuds",
    "Grid Controller",
];

const descriptions = {
    Tech: "Reliable everyday technology build for focused work, entertainment, and productivity.",
    Audio: "Immersive sound with a comfortable design made for music, calls, and everyday listening",
    Workspace: "A clean, practical workspace essential designed to keep your setuo comfortable and productive.",
    Gaming: "Responsive performance and practical controls designed for fast-paced gaming sessions.",
    Accessories: "A versatile everyday accessary designed to complement your devices and simplify your setup.",
};

export const PRODUCT_COUNT = 5000;
export function generateProducts() {
    return Array.from(
        { length: PRODUCT_COUNT },
        (_, index) => {
            const name = productNames[index % productNames.length];
            const category = categories[index % categories.length];

            return {
                id: index + 1,
                title:`${name} ${index + 1}`,
                category,
                price: 999 + ((index * 137) % 70000),
                description: descriptions[category],
            };
        }
    );
}