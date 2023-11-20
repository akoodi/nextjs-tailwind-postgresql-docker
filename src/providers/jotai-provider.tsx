"use client";

import { Provider } from "jotai";
import { ReactNode } from "react";

const JotaiProvider = ({children} : {children:ReactNode}) => {
    return <Provider>{children}</Provider>
}

export default JotaiProvider;