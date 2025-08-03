import React from 'react'

export default function Button({
borderSize = "border",
horizontalPadding = "px-3",
borderRadius = "rounded-full",
buttonTextHorizontalMargin = "mx-auto",
buttonTextColor = "text-white",
buttonTextCase = "uppercase",
buttonHoverBg = "hover:bg-white",
buttonHoverTextColor = "hover:text-black",
doTransition = "transition-all",
buttonWidth,
performFunction,
buttonText


}) {
    return (
        <button className={`${borderSize} ${horizontalPadding} ${borderRadius} ${buttonTextHorizontalMargin}
                    ${buttonTextColor} ${buttonTextCase} ${buttonHoverBg} ${buttonHoverTextColor} ${doTransition} 
                    ${buttonWidth} duration-500 ease-in-out`}
                onClick={e => performFunction(e)}>
            {buttonText}
        </button>
    )
}
