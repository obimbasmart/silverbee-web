import React from "react";
import Icon from "../shared/Icon";

interface FeatureProps {
    title: string;
    desc: string;
    icon: string;
}

function Feature(props: FeatureProps) {
    return (
        <div className="flex flex-row gap-x-3 border-[1px] border-gray-hint rounded-lg p-3">
            <div>
                <Icon width={30} height={30} name={props.icon} />
            </div>

            <div className="space-y-1">
                <h4 className="text-sm font-medium font-manrope">
                    {props.title}
                </h4>
                <p className="text-xs">{props.desc}</p>
            </div>
        </div>
    );
}

export default Feature;
