import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

export const HomeIcon = ({ width, height, fill }: { width: number; height: number; fill: string }) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
    >
        <G clipPath="url(#clip0)">
            <Rect width="24" height="24" fill="none" />
            <Path
                d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21"
                stroke={fill}
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0">
                <Rect width="24" height="24" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
