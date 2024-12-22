export default function Icon({width, height}: {width: number; height: number}) {
    return (
        <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="30" x2="30" y2="170" stroke="black" strokeWidth="10"/>
            <line x1="30" y1="100" x2="100" y2="100" stroke="black" strokeWidth="10"/>
            <line x1="100" y1="30" x2="100" y2="170" stroke="black" strokeWidth="10"/>
            <line x1="100" y1="30" x2="170" y2="170" stroke="blue" strokeWidth="10"/>
            <line x1="170" y1="30" x2="170" y2="170" stroke="blue" strokeWidth="10"/>
        </svg>
    );
}