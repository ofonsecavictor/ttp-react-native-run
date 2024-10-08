import Svg, { Path } from 'react-native-svg';
export const NotificationIconOutlined = ({ width, height, stroke }: { width?: number; height?: number; stroke?: string }) => (
    <Svg
        width={width || 200}
        height={height || 200}
        viewBox="0 0 512 512"
        fill="none"
    >
        <Path
            d="M427.68,351.43C402,320,383.87,304,383.87,217.35,383.87,138,343.35,109.73,310,96c-4.43-1.82-8.6-6-9.95-10.55C294.2,65.54,277.8,48,256,48S217.79,65.55,212,85.47c-1.35,4.6-5.52,8.71-9.95,10.53-33.39,13.75-73.87,41.92-73.87,121.35C128.13,304,110,320,84.32,351.43,73.68,364.45,83,384,101.61,384H410.49C429,384,438.26,364.39,427.68,351.43Z"
            stroke={stroke || '#000000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
        />
        <Path
            d="M320,384v16a64,64,0,0,1-128,0V384"
            stroke={stroke || '#000000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
        />
    </Svg>
);
