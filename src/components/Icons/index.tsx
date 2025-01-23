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

export const PokeBall = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.000000 64.000000" className={className ?? ''}><g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="currentColor"><path d="M220 624 c-227 -82 -293 -362 -125 -529 65 -65 125 -89 225 -89 100 0 160 24 225 89 65 65 89 125 89 225 0 100 -24 160 -89 225 -82 82 -222 116 -325 79z m232 -71 c34 -19 65 -47 85 -77 33 -48 56 -112 47 -128 -3 -4 -34 -8 -69 -8 -61 0 -65 2 -80 29 -24 48 -62 71 -115 71 -53 0 -91 -23 -116 -71 -15 -29 -17 -30 -82 -27 l-67 3 3 30 c8 79 98 178 186 205 57 17 150 5 208 -27z m-80 -180 c23 -20 24 -80 1 -105 -20 -23 -80 -24 -105 -1 -23 20 -24 80 -1 105 20 23 80 24 105 1z m-167 -103 c22 -68 135 -94 194 -45 16 14 33 35 36 45 6 18 16 20 81 20 l74 0 -6 -27 c-35 -147 -190 -242 -331 -204 -92 25 -176 112 -197 204 l-6 27 74 0 c65 0 75 -2 81 -20z"/><path d="M300 320 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13 0 -20 -7 -20 -20z"/></g></svg>
}

export const LoaderCircle = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
}

export const Done = ({className} : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? ''}><path d="M20 6 9 17l-5-5"/></svg>
}