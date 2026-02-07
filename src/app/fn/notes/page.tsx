import { permanentRedirect } from "next/navigation";
import { FC } from "react";

const Notes: FC = () => {
    permanentRedirect("/fn");
};

export default Notes;
