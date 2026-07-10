

function Text({ children, variant = 'span', className = ''}){
    const Tag = variant;
    return <Tag className={className}>{children}</Tag>
}

export default Text;