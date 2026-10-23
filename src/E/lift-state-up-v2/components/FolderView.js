export default function FolderView(props) {

    return <>
        <div>{props.description}</div>
        <RenderTree {...props} />
    </>
}

function RenderTree({active, onClick, nodeName, childNodes}) {
    const isActive = active === nodeName? 'active': '';

    if(childNodes.length > 0) {
        return <details open>
            <summary className={isActive} onClick={onClick}>{nodeName}</summary>
            {childNodes.map((child) => (
                <RenderTree key={child.nodeName} active={active} onClick={onClick} {...child} />
            ))}
        </details>
    } else {
        return <div className={isActive} onClick={onClick}>{nodeName}</div>
    }
}