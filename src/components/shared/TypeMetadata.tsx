interface TypeMetadataProps {
    type: string;
}

function TypeMetadata({ type }: TypeMetadataProps) {
    return (
        <span className="text-xs border-[1px] border-gray-hint  me-2 px-2.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {type}
        </span>
    );
}

interface TypeMetadataGroupProps {
    groupName: string;
    types: TypeMetadataProps[];
}

function TypeMetadataGroup({ groupName, types }: TypeMetadataGroupProps) {
    return (
        <div className="space-y-2">
            <h4 className="text-sm">{groupName}</h4>

            <div className="flex flex-row flex-wrap gap-2">
                {types.map((item) => (
                    <TypeMetadata type={item.type} key={item.type} />
                ))}
            </div>
        </div>
    );
}
export { TypeMetadata, TypeMetadataGroup };
