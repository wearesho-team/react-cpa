import * as React from "react";
import * as Cpa from "@sho-js/cpa";

export interface OnLoadProps {
    service?: Cpa.Service,
}

export const OnLoad: React.FunctionComponent<OnLoadProps> = React.memo((props) => {
    React.useEffect(() => {
        const service = props.service || new Cpa.Service(`.${location.host}`);
        (service).onLoad(new URLSearchParams(location.search));
    }, [ props.service, ]);

    return null;
});
