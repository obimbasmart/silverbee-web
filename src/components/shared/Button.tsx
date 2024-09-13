interface ButtonProps {
    onClick: () => void;
    title: string;
    icon?: React.ReactNode;
    containerStyles?: string;
    textStyles?: string;
}
function Button({
    onClick,
    title,
    icon,
    containerStyles,
    textStyles,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-row items-center justify-center px-6 py-3 text-primary space-x-2 rounded-lg ${containerStyles}`}
        >
            <p className={`text-primary text-sm font-medium ${textStyles}`}>
                {title}
            </p>
            {icon}
        </button>
    );
}

export default Button;
