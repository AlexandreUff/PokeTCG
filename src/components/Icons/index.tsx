interface IconProps {
    className?: string
}

export const Picture = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
}

export const Previous = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><path d="m15 18-6-6 6-6"/></svg>
}

export const Next = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><path d="m9 18 6-6-6-6"/></svg>
}

export const X = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
}

export const Search = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}

export const FilterList = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
}