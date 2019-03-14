import * as React from "react";
import * as Cpa from "@sho-js/cpa";

export interface OnLoadProps {
    service?: Cpa.Service,
}

export const OnLoad: React.FunctionComponent<OnLoadProps> = React.memo((props) => {
    const service = React.useMemo(
        () => props.service || new Cpa.Service(`.${location.host}`),
        [ props.service, ]
    );

    React.useEffect(() => {
        (service).onLoad(new URLSearchParams(location.search));
    }, [ service, ]);

    return null;
});
