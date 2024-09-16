import Icon from "../shared/Icon";

interface FeatureProps {
    icon: string;
    title: string;
}
function Feature({ icon, title }: FeatureProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-3">
            <Icon width={30} height={30} name={icon} />
            <p className="text-xs text-center">{title}</p>
        </div>
    );
}

export default Feature;
