import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: "400" });
const garamondBold = EB_Garamond({ subsets: ["latin"], weight: "700" });
const garamondItalic = EB_Garamond({ subsets: ["latin"], style: "italic" });
// const garamondThin = EB_Garamond({ subsets: ["latin"], weight: "100" });

export { garamond, garamondBold, garamondItalic };
