import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 40"
            className={cn('text-foreground h-6 w-auto', className)}
        >
            <text
                x="0"
                y="28"
                fontFamily="Inter, Poppins, sans-serif"
                fontWeight="800"
                fontSize="28"
                fill={uniColor ? 'currentColor' : 'url(#logo-gradient-black)'}
            >
                WeBroPk
            </text>

            {!uniColor && (
                <defs>
                    {/* Black with slight white center highlight */}
                    <linearGradient
                        id="logo-gradient-black"
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#000000" />          {/* Full Black */}
                        <stop offset="50%" stopColor="#E6E6E6" />        {/* Soft White Tint */}
                        <stop offset="100%" stopColor="#000000" />       {/* Full Black */}
                    </linearGradient>
                </defs>
            )}
        </svg>
    );
};
